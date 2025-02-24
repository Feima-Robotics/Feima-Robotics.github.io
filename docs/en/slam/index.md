---
layout: page
title: SLAM SDK Documentation Overview
lang: en
---

# SLAM Documentation Overview

## Service Discovery

SLAM devices support automatic device discovery in local networks through MDNS service discovery mechanism. The service
name is `_slam._tcp`, and the service instance name is the device's SN number.

**Example**

``` go
func DiscoverServices() error {
    fmt.Println("DiscoverServices")
    go func(results <-chan *zeroconf.ServiceEntry) {
        for entry := range results {
            log.Println(entry)
            if Listener != nil {
                Listener <- entry
                }
        }
        log.Println("No more entries.")
    }(entries)

    var ctx context.Context
    ctx, cancel = context.WithCancel(context.Background())
    defer cancel()
    err := zeroconf.Browse(ctx, "_slam._tcp", "local.", entries, zeroconf.SelectIPTraffic(zeroconf.IPv4))
    return err
}
```

## Basic Communication

SLAM devices support two communication methods: HTTP and WebSocket

|             | HTTP                                                                                                                   | WebSocket                                                                                            |
|-------------|------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| Address     | http://{DeviceIP}:19700                                                                                                | ws://{DeviceIP}:19700/ws                                                                             |
| Data Format | Json                                                                                                                   |
| Usage       | Get/Post requests                                                                                                      | JSON-RPC 2.0                                                                                         |
| Pros & Cons | Pros: HTTP is easy to use, many debugging tools<br/>Cons: No bidirectional communication, cannot receive notifications | Pros: Supports notifications, has connection status<br/>Cons: Debugging is less convenient than HTTP |

### HTTP

Set `Content-Type` to `application/json` in the Header, and send requests according to the Get or Post method tag.

Request format: `http://192.168.1.100:19700+method`

Response format:

```json
{
  "status": 0,
  "message": null,
  "data": resultValue
}
```

### WebSocket

WebSocket connection supports bidirectional communication, the device will actively send JSON-RPC 2.0 formatted
notifications.

#### Sending

Use a JSON-RPC library or manually implement to send data in JSON-RPC 2.0 format:

```json
{
  "jsonrpc": "2.0",
  "id": 2,
  "method": "/slam/start_work"
}
```

#### Response

```json
{
  "jsonrpc": "2.0",
  "id": 2,
  "result": resultValue
}
```

The resultValue depends on the return value defined in the method.
Method refers to the HTTP request API or method in JSON-RPC, see SLAM_SDK.md for details.

#### Notifications

WebSocket connection will actively send JSON-RPC 2.0 notifications.

##### Control Points

Triggered when clicking the handle record button

**Example**

```json
{
  "jsonrpc": "2.0",
  "method": "OnSlamRecordPoint",
  "params": {
    "mark_idex": 0,
    "time": 0,
    "local_info": "string"
  }
}
```

##### Battery Status

`Supported since SDK 0.6.6` Sends every 5s when battery information is not obtained

**Example**

```json
{
  "jsonrpc": "2.0",
  "method": "OnDeviceStatus",
  "params": {
    "app_version": 0,
    "sn": 0,
    "cycle_count": 0,
    "temperature": 0,
    "voltage": 0,
    "battery_vol_1": 0,
    "battery_vol_2": 0,
    "battery_vol_3": 0,
    "current": 0,
    "rsoc": 0,
    "remain_capacity": 0,
    "full_charge_capacity": 0,
    "safety_status": 0,
    "other_status": 0,
    "power_status": 0
  }
}
```

##### Real-time Mapping

`Supported since SDK 0.6.1` Sends real-time mapping status every second

**Example**

```json
{
  "jsonrpc": "2.0",
  "method": "OnDeviceStatus",
  "params": {
    "id": 29,
    "mission_id": 2,
    "state": 1,
    "timestamp": 1739418291,
    "progress": 0
  }
}
```

## Real-time Point Cloud Data

SLAM devices use TCP for point cloud transmission. Currently, there are two versions:

### Version 1

Point cloud data and pose data are transmitted separately, colored point clouds are not supported. Version 2 will
gradually replace Version 1.

**Ports**

- TCP point cloud transmission
  19800
- TCP pose transmission
  19801

#### Point Cloud Data Format

Single frame point cloud data is sent with the fixed string #FEIMA# as the end character for data separation.

```c++
typedef struct {
    float x;
    float y;
    float z;
} Point;

typedef struct {
    uint32_t id;
    double timestamp;
    uint32_t payloadLen;
} PointCloudHeader;

typedef struct {
    PointCloudHeader header;
    Point points[ ];  // len = payloadLen / sizeof(Point)
} PointCloud;
```

#### Pose Data Format

Pose data is sent with the fixed string #FEIMA# as the end character for data separation.

```c++
typedef struct {
    uint32_t id;
    double timestamp;
    float ptX;  // position
    float ptY;
    float ptZ;
    float qX;  // quaternion
    float qY;
    float qZ;
    float qW;
} Pose;
```

### Version 2

Point cloud data and pose data are combined for transmission, and colored point clouds are supported.

**Ports**

- TCP combined data transmission
  19805

#### Data Format

The combined data structure consists of TPackageInfo+TFrame, with the fixed string #FEIMA# as the end character for data
separation.

```c++
#pragma pack(push)
#pragma pack(1)
typedef struct {
    float x;
    float y;
    float z;
    unsigned char intensity;
    unsigned char rgb[3]; // RGB
} TPointRGBI;

typedef struct {
    uint32_t id;
    double timestamp;
    uint32_t payloadLen;
} TPointCloudHeader;

typedef struct {
    TPointCloudHeader header;
    TPointRGBI *points;  // len = payloadLen / sizeof(TPointRGBI)
} TPointRGBICloud;

typedef struct {
        uint32_t id;
        double timestamp;
        double posX;  // position
        double posY;
        double posZ;
        float qX;
        float qY;
        float qZ;
        float qW;
} TDPose;

typedef struct {
        TDPose pose;
        TPointRGBICloud cloud;
} TFrame;

typedef struct {
    uint16_t version;
} TPackageInfo;

#pragma pack(pop)
```

## Bluetooth

For SLAM devices that support Bluetooth LE, WiFi configuration can be performed through Bluetooth LE.

### Device Information

* Bluetooth Name: Device SN
* Encoding: UTF8

#### Connection Method

Connect to the device SN through BLE protocol.

#### UUID Information

* BLE Service UUID: 00006a01-0000-1000-8000-00805f9b34fb

### WiFi Configuration

#### Connect to WiFi

| Characteristic | UUID                                 | Properties      |
|----------------|--------------------------------------|-----------------|
| WiFi setting   | 00006a04-0000-1000-8000-00805f9b34fb | withoutResponse |

Write

```
ssid=$ssid passwd=$password
```

#### WiFi Connection History

| Characteristic | UUID                                 | Properties      |
|----------------|--------------------------------------|-----------------|
| WiFi history   | 00006a06-0000-1000-8000-00805f9b34fb | withoutResponse |

Read

```
network id / ssid / bssid / flags
0 SLAM_AP any     [CURRENT]
```

#### WiFi Settings

| Characteristic | UUID                                 | Properties      |
|----------------|--------------------------------------|-----------------|
| WiFi control   | 00006a05-0000-1000-8000-00805f9b34fb | withoutResponse |

Connect to Historical WiFi

Write

```
SELECT_NETWORK ${network id}
```

Remove WiFi History

Write

```
REMOVE_NETWORK ${network id}
```

##### Save Settings

Write

```
SAVE_CONFIG
```

#### WiFi Status

| Characteristic | UUID                                 | Properties      |
|----------------|--------------------------------------|-----------------|
| WiFi status    | 00006a03-0000-1000-8000-00805f9b34fb | withoutResponse |

Read

```
bssid=9c:9d:7e:89:3c:a6
freq=5240
ssid=SLAM_AP
id=3
mode=station
wifi_generation=6
pairwise_cipher=CCMP
group_cipher=CCMP
key_mgmt=WPA2-PSK
wpa_state=COMPLETED
ip_address=192.168.31.199
p2p_device_address=52:41:1c:b5:3b:c2
address=50:41:1c:b5:3b:c2
uuid=2ac68d52-d10a-5acd-8a20-1aec276fc077
ieee80211ac=1
```

#### WiFi Scan List

| Characteristic | UUID                                 | Properties      |
|----------------|--------------------------------------|-----------------|
| WiFi scan list | 00006a02-0000-1000-8000-00805f9b34fb | withoutResponse |

Write

```
SCAN
```

Read

```
bssid / frequency / signal level / flags / ssid
9c:9d:7e:89:3c:a6 5240 -36     [WPA2-PSK-CCMP][WPS][ESS]       SLAM_AP
```