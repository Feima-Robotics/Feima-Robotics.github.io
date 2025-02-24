---
layout: page
title: SLAM SDK 文档概览
lang: zh
---

# SLAM 文档概览

## 服务发现

SLAM 设备通过 MDNS 服务发现机制支持在局域网中自动发现设备。该服务的名称为 `_slam._tcp`，服务实例名称为设备的 SN 号。

**示例**

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

## 基本通讯

SLAM 设备支持HTTP/WebSocket两种通讯方式

|      | HTTP                                  | WebSocket                         |
|------|---------------------------------------|-----------------------------------|
| 地址   | http://{DeviceIP}:19700               | ws://{DeviceIP}:19700/ws          |
| 数据格式 | Json                                  |
| 使用   | Get/Post请求                            | JSON-RPC 2.0                      |
| 优缺点  | 优点：http易于使用，调试工具多<br/>缺点：非双向通讯，无法获取通知 | 优点：支持接收通知，有连接状态<br/>缺点：调试不如HTTP方便 |

### HTTP

Header中设置`Content-Type`为`application/json`，根据method的Get或者Post标签发送请求.

请求格式为`http://192.168.1.100:19700+method`

响应格式为：

```json
{
  "status": 0,
  "message": null,
  "data": resultValue
}
```

### WebSocket

WebSocket连接支持双向通讯，设备会主动下发JSON-RPC 2.0格式的通知。

#### 发送

使用JsonRPC库或手动实现，发送JSON-RPC 2.0格式的数据：

```json
{
  "jsonrpc": "2.0",
  "id": 2,
  "method": "/slam/start_work"
}
```

#### 返回

```json
{
  "jsonrpc": "2.0",
  "id": 2,
  "result": resultValue
}
```

resultValue具体取决于method中定义的返回值。
Method
HTTP请求的API，或JSON-RPC中的method，具体查看SLAM_SDK.md

#### 通知

WebSocket连接会主动发送JSON-RPC2.0通知

##### 控制点

当点击手柄记录点按钮时触发

**示例**

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

##### 电池状态

`SDK0.6.6开始支持` 未获取电量信息时，5s发送一次

**示例**

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

##### 实时建图

`SDK0.6.1开始支持` 每秒发送实时建图状态

**示例**

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

## 实时点云数据

SLAM设备点云使用TCP传输，目前存在2个版本：

### 版本1

点云数据和姿态数据分开传输，不支持赋色点云，版本2将逐渐替代版本1

**端口**

- TCP点云传输
  19800
- TCP位姿传输
  19801

#### 点云数据格式

单帧点云数据发送，结尾以#FEIMA#固定字符为结束字符，用于数据分隔。

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

#### 位置姿态数据格式

位置姿态数据发送，结尾以#FEIMA#固定字符为结束字符，用于数据分隔。

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

### 版本2

点云数据和姿态数据组合传输，支持赋色点云

**端口**

- 19805 TCP组合数据传输

#### **数据格式**

组合数结构为TPackageInfo+TFrame，#FEIMA#固定字符为结束字符，用于数据分隔。

```C++
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

## 蓝牙

对于支持Bluetooth LE的SLAM设备，可通过Bluetooth LE对设备进行WiFi配置。

### 设备信息

* 蓝牙名称：设备SN
* 编解码：UTF8

#### 连接方式

通过BLE协议连接到设备SN

#### UUID信息

* BLE Service UUID：00006a01-0000-1000-8000-00805f9b34fb

### WiFi配置

#### 连接WiFi

| Characteristic | UUID                                 | Properties      |
|----------------|--------------------------------------|-----------------|
| WiFi setting   | 00006a04-0000-1000-8000-00805f9b34fb | withoutResponse |

Write

```
ssid=$ssid passwd=$password
```

#### WiFi 连接历史

| Characteristic | UUID                                 | Properties      |
|----------------|--------------------------------------|-----------------|
| WiFi history   | 00006a06-0000-1000-8000-00805f9b34fb | withoutResponse |

Read

```
network id / ssid / bssid / flags
0 SLAM_AP any     [CURRENT]
```

#### WiFi设置

| Characteristic | UUID                                 | Properties      |
|----------------|--------------------------------------|-----------------|
| WiFi control   | 00006a05-0000-1000-8000-00805f9b34fb | withoutResponse |

连接历史WiFi

Write

```
SELECT_NETWORK ${network id}
```

移除WiFi历史

Write

```
REMOVE_NETWORK ${network id}
```

##### 保存设置

Write

```
SAVE_CONFIG
```

#### WiFi状态

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

#### WiFi scan list

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