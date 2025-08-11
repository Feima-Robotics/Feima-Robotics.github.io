# Getting Started

Welcome to the SLAM SDK Development Tutorial! This guide provides a detailed introduction on how to connect SLAM devices
and get them working properly, helping you quickly master the use of the device APIs.

## 1. Connecting the Device

SLAM devices offer two connection methods, with specific support varying by device model:

| Device Model   | Wi-Fi + Bluetooth | Device Hotspot |  
|----------------|-------------------|----------------|  
| SLAM200 Series | ✅                 | ❌              |  
| SLAM1000       | ✅                 | ❌              |  
| SLAM100        | ❌                 | ✅              |  
| SLAM2000       | ❌                 | ✅              |  

### Wi-Fi + Bluetooth

(For SLAM200 Series and SLAM1000)

**Connection Steps:**

1. Use the BLE protocol to scan and discover the target device.
2. Establish a Bluetooth connection.
3. Locate the service UUID: `00006a01-0000-1000-8000-00805f9b34fb`.
4. Locate the characteristic UUID: `00006a05-0000-1000-8000-00805f9b34fb`.
5. Write the Wi-Fi credentials to the specified characteristic (format: `ssid=${Wi-Fi name} passwd=${Wi-Fi password}`)
   to connect the device and the phone to the same Wi-Fi network.
6. Read the characteristic `00006a03-0000-1000-8000-00805f9b34fb` to verify whether the `ip_address` field has obtained
   a valid IP address.

> Congratulations 🎉, you have completed Wi-Fi network configuration! For more detailed Bluetooth features, please refer
> to the [Bluetooth Protocol](./protocol).

### Device Hotspot

(For SLAM100 and SLAM2000)

**SLAM100 Default Configuration:**

* Hotspot name: "slam100_xxxxx"
* Default password: "12345678"
* Default IP address: `192.168.10.1`

**SLAM2000 Default Configuration:**

* Hotspot name: "slam2000_xxxxx"
* Default password: "12345678"
* Default IP address: `10.201.126.1`

> Note: "xxxxx" represents the device's unique identifier. For specific information, please check the device label.

## 2. Device Start/Stop Control

After successfully connecting to the SLAM device and obtaining its IP address, you can control its operation via HTTP
protocol. This section details the workflow for starting/stopping the device and monitoring its status.

### Technical Specifications

- **Protocol**: HTTP
- **Port**: 19700
- **Device Address**: `${IP}` (Example uses `192.168.10.1` for demonstration)

---

### 2.1 Starting the Device

#### Request Example

```shell  
curl --location --request GET 'http://192.168.10.1:19700/slam/start_work'  
```  

#### Successful Response

```json  
{
  "data": {
    "status": 2
  },
  "message": "",
  "status": 0
}  
```  

#### Key Notes

1. **Warm-up Phase**:
    - The LiDAR does not activate immediately.
    - SLAM100 requires **60 seconds** by default, `DataReady` status is not supported.
    - Other models require `DataReady` status code verification.

   > This state is not supported by earlier firmware status codes and uses fixed timing.
   > If the `DataReady` status code is not supported or timeout (over 30S), please use a fixed time

   | Device Model               | Timer      |  
   |----------------------------|------------|  
   | SLAM2000 earlier firmware  | 75 Seconds |
   | SLAM100                    | 60 Seconds |

2. **Status Check Command**:

```shell  
curl --location --request GET 'http://192.168.10.1:19700/slam/get_error_status'  
```  

#### Status Code Interpretation

```json  
{
  "data": {
    "code_camera": 0,
    "code_command": 0,
    "code_fpga": 0,
    "code_i2000": 0,
    "code_imu": 0,
    "code_lidar": 0,
    "code_mcu": 0,
    "code_raster": 0,
    "code_time_sync": 0
  },
  "message": "",
  "status": 0
}  
```  

**Ready State Condition**:  
`code_command & 0x01 << 15 == 1` indicates the device is operational.

For detailed definitions, please refer to [Status Codes](./status-code) -> Version 2 -> code_command -> `DATA_READY`.

---

### 2.2 Stopping the Device

#### Request Example

```shell  
curl --location --request GET 'http://192.168.10.1:19700/slam/end_work'  
```  

#### Successful Response

```json  
{
  "data": {
    "status": 3
  },
  "message": "",
  "status": 0
}  
```  

> **Note:**
> Do not immediately restart work or power off after stopping, as the point cloud processing program is still running. Immediate power off may result in point cloud data loss. You can use the following methods to check mapping status:
> * Use [HTTP](./http) -> `/slam/get_mapping_info`
> * Or connect [WebSocket](./protocol) -> receive `OnMappingStatus`
> 
> When `state` is `6`, mapping is complete, and the device will emit a beep sound

---

### Next Steps

Proceed to [HTTP Control Interface](./http) for advanced operations.