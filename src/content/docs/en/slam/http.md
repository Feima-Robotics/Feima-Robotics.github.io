---
layout: page
title: SLAM SDK HTTP API
---

Base URLs:

* <a href="http://{{DeviceIP}}:19700">http://{{DeviceIP}}:19700</a>

## GET Version Information

GET /slam/get_version

> Example Response

> 200 Response

```json
{
  "status": 0,
  "message": null,
  "data": {}
}
```

### Response

| Status Code | Description                                             | Notes | Model  |
|-------------|---------------------------------------------------------|-------|--------|
| 200         | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none  | Inline |

### Response Structure

Status Code **200**

| Name      | Type    | Required | Constraints | Chinese Name | Description         |
|-----------|---------|----------|-------------|--------------|---------------------|
| » status  | integer | true     | none        |              | 0 success, 1 failed |
| » message | null    | true     | none        |              | error message       |
| » data    | object  | true     | none        |              | none                |

## GET Sync Device Time

GET /slam/sync_time

### Parameters

| Name      | Position | Type   | Required | Description   |
|-----------|----------|--------|----------|---------------|
| timestamp | query    | string | true     | UTC timestamp |
| timezone  | query    | string | false    | Timezone      |

> Example Response

> 200 Response

```json
{
  "status": 0,
  "message": null
}
```

### Response

| Status Code | Description                                             | Notes | Model                           |
|-------------|---------------------------------------------------------|-------|---------------------------------|
| 200         | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none  | [BaseResult](#schemabaseresult) |

## GET Get Device Time

GET /slam/get_sys_time

> Example Response

> 200 Response

```json
{
  "time": "string",
  "timestamp": 0,
  "timezone": "string",
  "offset": 0
}
```

### Response

| Status Code | Description                                             | Notes | Model                           |
|-------------|---------------------------------------------------------|-------|---------------------------------|
| 200         | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none  | [SystemTime](#schemasystemtime) |

## GET Check Timezone Existence

GET /slam/exists_timezone

### Parameters

| Name     | Position | Type   | Required | Description        |
|----------|----------|--------|----------|--------------------|
| timezone | query    | string | true     | Timezone city name |

> Example Response

> 200 Response

```json
{
  "status": 0,
  "message": null,
  "data": true
}
```

### Response

| Status Code | Description                                             | Notes | Model  |
|-------------|---------------------------------------------------------|-------|--------|
| 200         | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none  | Inline |

### Response Structure

Status Code **200**

| Name      | Type    | Required | Constraints | Chinese Name | Description         |
|-----------|---------|----------|-------------|--------------|---------------------|
| » status  | integer | true     | none        |              | 0 success, 1 failed |
| » message | null    | true     | none        |              | error message       |
| » data    | boolean | true     | none        |              | none                |

## GET Get Wi-Fi Configuration

GET /slam/get_wifi_status

> Example Response

> 200 Response

```json
{
  "status": 0,
  "message": null,
  "data": {
    "country": "string",
    "fre": 0
  }
}
```

### Response

| Status Code | Description                                             | Notes | Model  |
|-------------|---------------------------------------------------------|-------|--------|
| 200         | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none  | Inline |

### Response Structure

Status Code **200**

| Name       | Type                              | Required | Constraints | Chinese Name | Description         |
|------------|-----------------------------------|----------|-------------|--------------|---------------------|
| » status   | integer                           | true     | none        |              | 0 success, 1 failed |
| » message  | null                              | true     | none        |              | error message       |
| » data     | [WifiConfig2](#schemawificonfig2) | true     | none        |              | none                |
| »» country | string                            | true     | none        |              | none                |
| »» fre     | integer                           | true     | none        |              | 0: 2.4G; 1: 5G      |

## GET Test Capture

GET /slam/capture

Capture images, stored in `/mnt/udisk/snap/`.

### Parameters

| Name   | Position | Type   | Required | Description                                      |
|--------|----------|--------|----------|--------------------------------------------------|
| camera | query    | string | false    | Optional, default: all ("color", or unspecified) |

> Example Response

> 200 Response

```json
{
  "status": 0,
  "message": null,
  "data": {
    "status": 1
  }
}
```

### Response

| Status Code | Description                                             | Notes | Model                               |
|-------------|---------------------------------------------------------|-------|-------------------------------------|
| 200         | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none  | [CommonResult](#schemacommonresult) |

## GET Start Work

GET /slam/start_work

> Example Response

> 200 Response

```json
{
  "status": 0,
  "message": null,
  "data": {
    "status": 1
  }
}
```

### Response

| Status Code | Description                                             | Notes | Model                               |
|-------------|---------------------------------------------------------|-------|-------------------------------------|
| 200         | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none  | [CommonResult](#schemacommonresult) |

## GET Restart Device

GET /slam/restart

> Example Response

> 200 Response

```json
{}
```

### Response

| Status Code | Description                                             | Notes | Model  |
|-------------|---------------------------------------------------------|-------|--------|
| 200         | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none  | Inline |

### Response Structure

## GET End Work

GET /slam/end_work

> Example Response

> 200 Response

```json
{
  "status": 0,
  "message": null,
  "data": {
    "status": 1
  }
}
```

### Response

| Status Code | Description                                             | Notes | Model                               |
|-------------|---------------------------------------------------------|-------|-------------------------------------|
| 200         | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none  | [CommonResult](#schemacommonresult) |

## GET Set Motor Speed

GET /slam2000/set_motor_speed

### Parameters

| Name  | Position | Type             | Required | Description |
|-------|----------|------------------|----------|-------------|
| speed | query    | number (float32) | true     | -           |

> Example Response

> 200 Response

```json
{
  "status": 0,
  "message": null
}
```

### Response

| Status Code | Description                                             | Notes | Model  |
|-------------|---------------------------------------------------------|-------|--------|
| 200         | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none  | Inline |

### Response Structure

Status Code **200**

| Name      | Type    | Required | Constraints | Chinese Name | Description         |
|-----------|---------|----------|-------------|--------------|---------------------|
| » status  | integer | true     | none        |              | 0 success, 1 failed |
| » message | null    | true     | none        |              | error message       |

## GET Set Camera State

GET /slam2000/set_camera_configs

### Parameters

| Name        | Position | Type    | Required | Description                    |
|-------------|----------|---------|----------|--------------------------------|
| controlType | query    | integer | true     | 1: Color Lens; 2: Optical Lens |
| camType     | query    | integer | true     | Camera setting params          |
| param       | query    | integer | false    | Camera setting params          |

#### Details

**camType**: Camera setting params
1: Turn on/off camera (0: off, 1: on)
2: Capture (no param)
3: Toggle recording mode (0: off, 1: on)
4: Toggle data sharing (0: off, 1: on)
5: Toggle YUV data sharing (0: off, 1: on)
6: Toggle burst mode (0: off, 1: on)
7: Set exposure (0: off; 1: 50Hz; 2: 60Hz)
8: Capture interval (number of frames per second)

**param**: Camera setting params
1: Turn on/off camera (0: off, 1: on)
2: Capture (no param)
3: Toggle recording mode (0: off, 1: on)
4: Toggle data sharing (0: off, 1: on)
5: Toggle YUV data sharing (0: off, 1: on)
6: Toggle burst mode (0: off, 1: on)
7: Set exposure (0: off; 1: 50Hz; 2: 60Hz)
8: Capture interval (number of frames per second)

> Example Response

> 200 Response

```json
{
  "status": 0,
  "message": null
}
```

### Response

| Status Code | Description                                             | Notes | Model                           |
|-------------|---------------------------------------------------------|-------|---------------------------------|
| 200         | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none  | [BaseResult](#schemabaseresult) |

## GET Format SSD

GET /slam2000/format_storage

> Example Response

> 200 Response

```json
{
  "status": 0,
  "message": null,
  "data": 0
}
```

### Response

| Status Code | Description                                             | Notes | Model  |
|-------------|---------------------------------------------------------|-------|--------|
| 200         | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none  | Inline |

### Response Structure

Status Code **200**

| Name      | Type    | Required | Constraints | Chinese Name | Description         |
|-----------|---------|----------|-------------|--------------|---------------------|
| » status  | integer | true     | none        |              | 0 success, 1 failed |
| » message | null    | true     | none        |              | error message       |
| » data    | integer | true     | none        |              | none                |

## GET Set Run Mode

GET /slam2000/set_run_mode

### Parameters

| Name | Position | Type   | Required | Description                 |
|------|----------|--------|----------|-----------------------------|
| mode | query    | number | false    | 1: Stand mode; 0: Back mode |

> Example Response

> 200 Response

```json
{}
```

### Response

| Status Code | Description                                             | Notes | Model  |
|-------------|---------------------------------------------------------|-------|--------|
| 200         | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none  | Inline |

### Response Structure

## GET Restart Device Power (Excluding MCU)

GET /slam2000/control_by_type?action_type=25&param=10

### Parameters

| Name        | Position | Type   | Required | Description                                       |
|-------------|----------|--------|----------|---------------------------------------------------|
| action_type | query    | string | true     | msg_id=30, control action type from protocol      |
| param       | query    | string | true     | msg_id=30, control action parameter from protocol |

> Example Response

> 200 Response

```json
{}
```

### Response

| Status Code | Description                                             | Notes | Model  |
|-------------|---------------------------------------------------------|-------|--------|
| 200         | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none  | Inline |

### Response Structure

## GET Configure Wi-Fi

GET /slam2000/set_wifi_country_mode

### Parameters

| Name        | Position | Type   | Required | Description |
|-------------|----------|--------|----------|-------------|
| countryCode | query    | string | true     | -           |
| freq        | query    | string | true     | -           |

> Example Response

> 200 Response

```json
{
  "status": 0,
  "message": null,
  "data": {
    "country": "string",
    "fre": 0,
    "setWifi": 0
  }
}
```

### Response

| Status Code | Description                                             | Notes | Model  |
|-------------|---------------------------------------------------------|-------|--------|
| 200         | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none  | Inline |

### Response Structure

Status Code **200**

| Name       | Type    | Required | Constraints | Chinese Name | Description         |
|------------|---------|----------|-------------|--------------|---------------------|
| » status   | integer | true     | none        |              | 0 success, 1 failed |
| » message  | null    | true     | none        |              | error message       |
| » data     | object  | true     | none        |              | none                |
| »» country | string  | true     | none        |              | none                |
| »» fre     | integer | true     | none        |              | 0: 2.4G; 1: 5G      |
| »» setWifi | integer | true     | none        |              | 0: fail; 1: success |

## GET Get Serial Number

GET /slam/get_serial_number

> Example Response

> 200 Response

```json
{
  "status": 0,
  "message": null,
  "data": {
    "serialNo": "string"
  }
}
```

### Response

| Status Code | Description                                             | Notes | Model  |
|-------------|---------------------------------------------------------|-------|--------|
| 200         | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none  | Inline |

### Response Structure

Status Code **200**

| Name        | Type            | Required | Constraints | Chinese Name | Description         |
|-------------|-----------------|----------|-------------|--------------|---------------------|
| » status    | integer         | true     | none        |              | 0 success, 1 failed |
| » message   | null            | true     | none        |              | error message       |
| » data      | [SN](#schemasn) | true     | none        |              | none                |
| »» serialNo | string          | true     | none        |              | none                |

## GET Get Work Status

GET /slam/get_work_status

> Example Response

> 200 Response

```json
{
  "status": 0,
  "message": null
}
```

### Response

| Status Code | Description                                             | Notes | Model                           |
|-------------|---------------------------------------------------------|-------|---------------------------------|
| 200         | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none  | [BaseResult](#schemabaseresult) |

## GET Get Error Status

GET /slam/get_error_status

> Example Response

> 200 Response

```json
{}
```

### Response

| Status Code | Description                                             | Notes | Model  |
|-------------|---------------------------------------------------------|-------|--------|
| 200         | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none  | Inline |

### Response Structure

## GET Get Real-Time Mapping Status

GET /slam/get_mapping_info

> Example Response

> 200 Response

```json
{
  "status": 0,
  "message": null,
  "data": {
    "id": 0,
    "mission_id": 0,
    "state": 1,
    "timestamp": 0,
    "progress": 0
  }
}
```

### Response

| Status Code | Description                                             | Notes | Model                                       |
|-------------|---------------------------------------------------------|-------|---------------------------------------------|
| 200         | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none  | [RealMappingState](#schemarealmappingstate) |

### Response Structure

Status Code **200**

| Name         | Type    | Required | Description                                                                                                                          |
|--------------|---------|----------|--------------------------------------------------------------------------------------------------------------------------------------|
| status       | integer | true     | 0: success, 1: failed                                                                                                                |
| message      | null    | true     | Error message                                                                                                                        |
| data         | object  | true     | Mapping status data                                                                                                                  |
| » id         | integer | true     | Unique mapping session ID                                                                                                            |
| » mission_id | integer | true     | Associated mission ID                                                                                                                |
| » state      | integer | true     | Mapping state:<br>0: Unknown<br>1: Idle<br>2: Initializing<br>3: Mapping<br>4: Optimizing<br>5: Saving<br>6: Completed<br>100: Error |
| » timestamp  | number  | true     | Timestamp of last update                                                                                                             |
| » progress   | number  | true     | Completion percentage (0-100)                                                                                                        |

#### Enum

| Property | Value |
|----------|-------|
| state    | 1     |
| state    | 2     |
| state    | 3     |
| state    | 4     |
| state    | 5     |
| state    | 100   |

## GET Get Hardware Version Information

GET /slam2000/get_main_board_info

> Example Response

> 200 Response

```json
{}
```

### Response

| Status Code | Description                                             | Notes | Model  |
|-------------|---------------------------------------------------------|-------|--------|
| 200         | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none  | Inline |

## GET Get Motor Board Status

GET /slam2000/get_motor_board_state

> Example Response

> 200 Response

```json
{
  "status": 0,
  "message": null,
  "data": {
    "total_voltage": 0,
    "battery_voltage": 0,
    "lidar_voltage": 0,
    "mc_ph_current_1": 0,
    "mc_ph_current_2": 0,
    "mc_ph_current_3": 0,
    "rotate_speed": 0,
    "motor_state": 0,
    "raster_num": 0,
    "temp_rk": 0,
    "temp_fpga": 0,
    "pps_count": 0
  }
}
```

### Response

| Status Code | Description                                             | Notes | Model                           |
|-------------|---------------------------------------------------------|-------|---------------------------------|
| 200         | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none  | [MotorBoard](#schemamotorboard) |

| 名称                 | 类型                              | 必选   | 约束   | 中文名 | 说明                  |
|--------------------|---------------------------------|------|------|-----|---------------------|
| » status           | integer                         | true | none |     | 0 success, 1 failed |
| » message          | null                            | true | none |     | error message       |
| » data             | [MotorBoard](#schemamotorboard) | true | none |     | none                |
| »» total_voltage   | number                          | true | none |     | none                |
| »» battery_voltage | number                          | true | none |     | none                |
| »» lidar_voltage   | number                          | true | none |     | none                |
| »» mc_ph_current_1 | number                          | true | none |     | none                |
| »» mc_ph_current_2 | number                          | true | none |     | none                |
| »» mc_ph_current_3 | number                          | true | none |     | none                |
| »» rotate_speed    | number                          | true | none |     | none                |
| »» motor_state     | number                          | true | none |     | none                |
| »» raster_num      | number                          | true | none |     | none                |
| »» temp_rk         | number                          | true | none |     | none                |
| »» temp_fpga       | number                          | true | none |     | none                |
| »» pps_count       | number                          | true | none |     | none                |

## GET Get System Runtime Information

GET /slam2000/get_run_state

> Example Response

> 200 Response

```json
{
  "status": 0,
  "message": null,
  "data": {
    "run_time": 0,
    "run_rote": 0,
    "cpu_use": 0,
    "mem_use": 0,
    "cpu_temp": 0,
    "active_sta": 0,
    "record_time": 0,
    "ssd_mount": 0
  }
}
```

### Response

| Status Code | Description                                             | Notes | Model                         |
|-------------|---------------------------------------------------------|-------|-------------------------------|
| 200         | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none  | [RunStatus](#schemarunstatus) |

### 返回数据结构

状态码 **200**

| 名称             | 类型                            | 必选   | 约束   | 中文名 | 说明                       |
|----------------|-------------------------------|------|------|-----|--------------------------|
| » status       | integer                       | true | none |     | 0 success, 1 failed      |
| » message      | null                          | true | none |     | error message            |
| » data         | [RunStatus](#schemarunstatus) | true | none |     | none                     |
| »» run_time    | integer                       | true | none |     | Total work time(seconds) |
| »» run_rote    | integer                       | true | none |     | Rotate count             |
| »» cpu_use     | number                        | true | none |     | none                     |
| »» mem_use     | number                        | true | none |     | none                     |
| »» cpu_temp    | number                        | true | none |     | none                     |
| »» active_sta  | integer                       | true | none |     | none                     |
| »» record_time | integer                       | true | none |     | Work time(seconds)       |
| »» ssd_mount   | integer                       | true | none |     | 0: 正常挂载；1: 没有挂载          |

## GET Get Project State

GET /slam2000/get_proj_state

> Example response

> 200 Response

```json
{
  "status": 0,
  "message": null,
  "data": {
    "prj_name": "string",
    "prj_path": "string",
    "prj_time": "string",
    "prj_type": 0
  }
}
```

### Responses

| Status | Meaning                                                 | Description | Schema |
|--------|---------------------------------------------------------|-------------|--------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | Inline |

### 返回数据结构

状态码 **200**

| Name      | Type                              | Required | Constraints | Description |
|-----------|-----------------------------------|----------|-------------|-------------|
| » status  | integer                           | true     | none        |             | 0 success, 1 failed |
| » message | null                              | true     | none        |             | error message       |
| » data    | [ProjectInfo](#schemaprojectinfo) | true     | none        |             | none                |
| prj_name  | string                            | true     | none        | none        |
| prj_path  | string                            | true     | none        | none        |
| prj_time  | string                            | true     | none        | none        |
| prj_type  | integer                           | true     | none        | none        |

## GET Set Project State

GET /slam2000/set_proj_state

### Parameters

| Name | In    | Type   | Required | Description  |
|------|-------|--------|----------|--------------|
| name | query | string | no       | Project name |
| path | query | string | no       | Project path |

> Example response

> 200 Response

```json
{
  "status": 0,
  "message": null
}
```

### Responses

| Status | Meaning                                                 | Description | Schema                          |
|--------|---------------------------------------------------------|-------------|---------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | [BaseResult](#schemabaseresult) |

## GET Get Battery State

GET /slam2000/get_battery_state

> Example response

> 200 Response

```json
{
  "status": 0,
  "message": null,
  "data": {
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

### Responses

| Status | Meaning                                                 | Description | Schema |
|--------|---------------------------------------------------------|-------------|--------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | Inline |

### Response Schema

Status Code **200**

| Name                    | Type                              | Required | Constraints | Description         |
|-------------------------|-----------------------------------|----------|-------------|---------------------|
| » status                | integer                           | true     | none        | 0 success, 1 failed |
| » message               | null                              | true     | none        | error message       |
| » data                  | [BatteryInfo](#schemabatteryinfo) | true     | none        | none                |
| »» app_version          | number                            | true     | none        | none                |
| »» sn                   | number                            | true     | none        | none                |
| »» cycle_count          | number                            | true     | none        | none                |
| »» temperature          | number                            | true     | none        | none                |
| »» voltage              | number                            | true     | none        | none                |
| »» battery_vol_1        | number                            | true     | none        | none                |
| »» battery_vol_2        | number                            | true     | none        | none                |
| »» battery_vol_3        | number                            | true     | none        | none                |
| »» current              | number                            | true     | none        | none                |
| »» rsoc                 | number                            | true     | none        | none                |
| »» remain_capacity      | number                            | true     | none        | none                |
| »» full_charge_capacity | number                            | true     | none        | none                |
| »» safety_status        | number                            | true     | none        | none                |
| »» other_status         | number                            | true     | none        | none                |
| »» power_status         | number                            | true     | none        | none                |

## GET Get Camera Info

GET /slam2000/get_camera_info

> Example response

> 200 Response

```json
{
  "name": "string",
  "optCamState": 0,
  "optCamOpen": 0,
  "optCamRecMode": 0,
  "optCamEncShareMode": 0,
  "optCamYuvShareMode": 0,
  "optCamContShootMode": 0,
  "optCamExpos": 0,
  "optCamInter": 0,
  "corCamState": 0,
  "corCamOpen": 0,
  "corCamRecMode": 0,
  "corCamEncShareMode": 0,
  "corCamYuvShareMode": 0,
  "corCamContShootMode": 0,
  "corCamExpos": 0,
  "corCamInter": 0
}
```

### Responses

| Status | Meaning                                                 | Description | Schema                    |
|--------|---------------------------------------------------------|-------------|---------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | [Camera2](#schemacamera2) |

## GET Get SSD Info

GET /slam2000/get_ssd_info

> Example response

> 200 Response

```json
{
  "status": 0,
  "message": null,
  "data": {
    "total_space": 0,
    "free_space": 0,
    "used_space": 0
  }
}
```

### Responses

| Status | Meaning                                                 | Description | Schema |
|--------|---------------------------------------------------------|-------------|--------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | Inline |

### Response Schema

Status Code **200**

| Name           | Type                      | Required | Constraints | Description         |
|----------------|---------------------------|----------|-------------|---------------------|
| » status       | integer                   | true     | none        | 0 success, 1 failed |
| » message      | null                      | true     | none        | error message       |
| » data         | [Storage](#schemastorage) | true     | none        | In MB               |
| »» total_space | integer                   | true     | none        | In MB               |
| »» free_space  | integer                   | true     | none        | In MB               |
| »» used_space  | integer                   | true     | none        | In MB               |

## GET Remove Record Point

GET /slam/remove_record_point

### Parameters

| Name  | In    | Type   | Required | Description |
|-------|-------|--------|----------|-------------|
| index | query | string | yes      | -           |

> Example response

> 200 Response

```json
{
  "status": 0,
  "message": null,
  "data": {
    "status": 1
  }
}
```

### Responses

| Status | Meaning                                                 | Description | Schema                              |
|--------|---------------------------------------------------------|-------------|-------------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | [CommonResult](#schemacommonresult) |

## GET Get Record Point List

GET /slam/get_record_point_list

> Example response

> 200 Response

```json
{
  "status": 0,
  "message": null,
  "result": [
    {
      "index": 0,
      "time": 0,
      "name": "string",
      "type": 0
    }
  ]
}
```

### Responses

| Status | Meaning                                                 | Description | Schema |
|--------|---------------------------------------------------------|-------------|--------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | Inline |

### Response Schema

Status Code **200**

| Name      | Type                                  | Required | Constraints | Description         |
|-----------|---------------------------------------|----------|-------------|---------------------|
| » status  | integer                               | true     | none        | 0 success, 1 failed |
| » message | null                                  | true     | none        | error message       |
| » result  | [[RecordPoint2](#schemarecordpoint2)] | true     | none        | none                |
| »» index  | integer                               | true     | none        | none                |
| »» time   | number                                | true     | none        | none                |
| »» name   | string                                | true     | none        | none                |
| »» type   | integer                               | true     | none        | none                |

## GET Set Record Point Name

GET /slam/set_record_point_name

### Parameters

| Name  | In    | Type   | Required | Description                    |
|-------|-------|--------|----------|--------------------------------|
| index | query | string | yes      | Control point index            |
| name  | query | string | yes      | Max 32 chars (letters/numbers) |

> Example response

> 200 Response

```json
{
  "status": 0,
  "message": null
}
```

### Responses

| Status | Meaning                                                 | Description | Schema                          |
|--------|---------------------------------------------------------|-------------|---------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | [BaseResult](#schemabaseresult) |

## GET Record Point With Name

GET /slam/record_point_with_name

### Parameters

| Name | In    | Type   | Required | Description                              |
|------|-------|--------|----------|------------------------------------------|
| name | query | string | yes      | Max 32 chars                             |
| type | query | string | no       | 1-default 2-static point 3-feature point |

> Example response

> 200 Response

```json
{
  "status": 0,
  "message": null,
  "data": {}
}
```

### Responses

| Status | Meaning                                                 | Description | Schema |
|--------|---------------------------------------------------------|-------------|--------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | Inline |

### Response Schema

Status Code **200**

| Name      | Type    | Required | Constraints | Description         |
|-----------|---------|----------|-------------|---------------------|
| » status  | integer | true     | none        | 0 success, 1 failed |
| » message | null    | true     | none        | error message       |
| » data    | object  | true     | none        | none                |

## GET Record Point

GET /slam2000/record_point

### Parameters

| Name | In    | Type   | Required | Description                       |
|------|-------|--------|----------|-----------------------------------|
| name | query | string | no       | Max 32 chars (letters/underscore) |

> Example response

> 200 Response

```json
{}
```

### Responses

| Status | Meaning                                                 | Description | Schema |
|--------|---------------------------------------------------------|-------------|--------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | Inline |

### Response Schema

## GET Set NTRIP Server

GET /rtk/set_ntrip_server

### Parameters

| Name | In    | Type   | Required | Description |
|------|-------|--------|----------|-------------|
| host | query | string | no       | none        |
| port | query | string | no       | none        |

> Example response

> 200 Response

```json
{
  "status": 0,
  "message": null
}
```

### Responses

| Status | Meaning                                                 | Description | Schema                          |
|--------|---------------------------------------------------------|-------------|---------------------------------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | [BaseResult](#schemabaseresult) |

## GET Set NTRIP Account

GET /rtk/set_ntrip_mes

### Parameters

| Name | In    | Type   | Required | Description |
|------|-------|--------|----------|-------------|
| user | query | string | no       | none        |
| pwd  | query | string | no       | none        |
| mntp | query | string | no       | none        |

> Example response

> 200 Response

```json
{
  "status": 0,
  "message": null,
  "data": {
    "mount_point": "string",
    "username": "string",
    "password": "string"
  }
}
```

### Responses

| Status | Meaning                                                 | Description | Schema |
|--------|---------------------------------------------------------|-------------|--------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | Inline |

### Response Schema

Status Code **200**

| Name           | Type                                | Required | Constraints | Description         |
|----------------|-------------------------------------|----------|-------------|---------------------|
| » status       | integer                             | true     | none        | 0 success, 1 failed |
| » message      | null                                | true     | none        | error message       |
| » data         | [NTripAccount](#schemantripaccount) | true     | none        | none                |
| »» mount_point | string                              | true     | none        | none                |
| »» username    | string                              | true     | none        | none                |
| »» password    | string                              | true     | none        | none                |

## GET Get NTRIP Settings

GET /rtk/get_ntrip_settings

> Example response

> 200 Response

```json
{
  "status": 0,
  "message": null,
  "data": {
    "host": "string",
    "mount_point": "string",
    "username": "string",
    "password": "string",
    "port": 0
  }
}
```

### 返回结果

| Status | Meaning                                                 | Description | Schema |
|--------|---------------------------------------------------------|-------------|--------|
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | Inline |

### 返回数据结构

状态码 **200**

| Name           | Type                              | Required | Constraints | Name | Description         |
|----------------|-----------------------------------|----------|-------------|------|---------------------|
| » status       | integer                           | true     | none        |      | 0 success, 1 failed |
| » message      | null                              | true     | none        |      | error message       |
| » data         | [NTripConfig](#schemantripconfig) | true     | none        |      | none                |
| »» host        | string                            | true     | none        |      | none                |
| »» mount_point | string                            | true     | none        |      | none                |
| »» username    | string                            | true     | none        |      | none                |
| »» password    | string                            | true     | none        |      | none                |
| »» port        | integer                           | true     | none        |      | none                |

## 数据模型

<h2 id="tocS_BaseResult">BaseResult</h2>

<a id="schemabaseresult"></a>
<a id="schema_BaseResult"></a>
<a id="tocSbaseresult"></a>
<a id="tocsbaseresult"></a>

```json
{
  "status": 0,
  "message": null
}

```

### Properties

| Name    | Type    | Required | Constraints | Name | Description         |
|---------|---------|----------|-------------|------|---------------------|
| status  | integer | true     | none        |      | 0 success, 1 failed |
| message | null    | true     | none        |      | error message       |

<h2 id="tocS_Status">Status</h2>

<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
{
  "status": 1
}

```

### Properties

| Name   | Type    | Required | Constraints | Name | Description        |
|--------|---------|----------|-------------|------|--------------------|
| status | integer | true     | none        |      | 0 failed，1 success |

<h2 id="tocS_CommonResult">CommonResult</h2>

<a id="schemacommonresult"></a>
<a id="schema_CommonResult"></a>
<a id="tocScommonresult"></a>
<a id="tocscommonresult"></a>

```json
{
  "status": 0,
  "message": null,
  "data": {
    "status": 1
  }
}

```

### Properties

| Name    | Type                    | Required | Constraints | Name | Description         |
|---------|-------------------------|----------|-------------|------|---------------------|
| status  | integer                 | true     | none        |      | 0 success, 1 failed |
| message | null                    | true     | none        |      | error message       |
| data    | [Status](#schemastatus) | true     | none        |      | result data         |

<h2 id="tocS_Error">Error</h2>

<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "status": 1,
  "message": "Timeout",
  "data": null
}

```

### Properties

| Name    | Type    | Required | Constraints | Name | Description         |
|---------|---------|----------|-------------|------|---------------------|
| status  | integer | true     | none        |      | 0 success, 1 failed |
| message | string  | true     | none        |      | error message       |
| data    | null    | true     | none        |      | result data         |

<h2 id="tocS_ActiveStatus">ActiveStatus</h2>

<a id="schemaactivestatus"></a>
<a id="schema_ActiveStatus"></a>
<a id="tocSactivestatus"></a>
<a id="tocsactivestatus"></a>

```json
{
  "status": 0
}

```

### Properties

| Name   | Type    | Required | Constraints | Name | Description                                    |
|--------|---------|----------|-------------|------|------------------------------------------------|
| status | integer | true     | none        |      | 0 unactivated，1 activated，2 temporaryActivated |

<h2 id="tocS_BatteryInfo">BatteryInfo</h2>

<a id="schemabatteryinfo"></a>
<a id="schema_BatteryInfo"></a>
<a id="tocSbatteryinfo"></a>
<a id="tocsbatteryinfo"></a>

```json
{
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

```

### Properties

| Name                 | Type   | Required | Constraints | Name | Description |
|----------------------|--------|----------|-------------|------|-------------|
| app_version          | number | true     | none        |      | none        |
| sn                   | number | true     | none        |      | none        |
| cycle_count          | number | true     | none        |      | none        |
| temperature          | number | true     | none        |      | none        |
| voltage              | number | true     | none        |      | none        |
| battery_vol_1        | number | true     | none        |      | none        |
| battery_vol_2        | number | true     | none        |      | none        |
| battery_vol_3        | number | true     | none        |      | none        |
| current              | number | true     | none        |      | none        |
| rsoc                 | number | true     | none        |      | none        |
| remain_capacity      | number | true     | none        |      | none        |
| full_charge_capacity | number | true     | none        |      | none        |
| safety_status        | number | true     | none        |      | none        |
| other_status         | number | true     | none        |      | none        |
| power_status         | number | true     | none        |      | none        |

<h2 id="tocS_RealMappingState">RealMappingState</h2>

<a id="schemarealmappingstate"></a>
<a id="schema_RealMappingState"></a>
<a id="tocSrealmappingstate"></a>
<a id="tocsrealmappingstate"></a>

```json
{
  "id": 0,
  "mission_id": 0,
  "state": 1,
  "timestamp": 0,
  "progress": 0
}

```

### Properties

| Name       | Type    | Required | Constraints | Name | Description                                                                 |
|------------|---------|----------|-------------|------|-----------------------------------------------------------------------------|
| id         | integer | true     | none        |      | none                                                                        |
| mission_id | integer | true     | none        |      | none                                                                        |
| state      | integer | true     | none        |      | RealStateUnknown = 0;<br />RealStateIdle = 1;<br />RealStateInit = 2;<br /> 

RealStateMapping = 3;<br />RealStateOptimizing = 4;<br />RealStateSaving = 5;<br />RealStateFinished = 6;<br />
RealStateError = 100; |
| timestamp | number | true | none | | none |
| progress | number | true | none | | none |

#### 枚举值

| Property | Value |
|----------|-------|
| state    | 1     |
| state    | 2     |
| state    | 3     |
| state    | 4     |
| state    | 5     |
| state    | 100   |

<h2 id="tocS_RecordPoint2">RecordPoint2</h2>

<a id="schemarecordpoint2"></a>
<a id="schema_RecordPoint2"></a>
<a id="tocSrecordpoint2"></a>
<a id="tocsrecordpoint2"></a>

```json
{
  "index": 0,
  "time": 0,
  "name": "string",
  "type": 0
}

```

### Properties

| Name  | Type    | Required | Constraints | Name | Description |
|-------|---------|----------|-------------|------|-------------|
| index | integer | true     | none        |      | none        |
| time  | number  | true     | none        |      | none        |
| name  | string  | true     | none        |      | none        |
| type  | integer | true     | none        |      | none        |

<h2 id="tocS_SN">SN</h2>

<a id="schemasn"></a>
<a id="schema_SN"></a>
<a id="tocSsn"></a>
<a id="tocssn"></a>

```json
{
  "serialNo": "string"
}

```

### Properties

| Name     | Type   | Required | Constraints | Name | Description |
|----------|--------|----------|-------------|------|-------------|
| serialNo | string | true     | none        |      | none        |

<h2 id="tocS_StatusCode2">StatusCode2</h2>

<a id="schemastatuscode2"></a>
<a id="schema_StatusCode2"></a>
<a id="tocSstatuscode2"></a>
<a id="tocsstatuscode2"></a>

```json
{
  "code_camera": 0,
  "code_command": 0,
  "code_fpga": 0,
  "code_i2000": 0,
  "code_imu": 0,
  "code_lidar": 0,
  "code_mcu": 0,
  "code_raster": 0,
  "code_time_sync": 0
}

```

### Properties

| Name           | Type    | Required | Constraints | Name | Description |
|----------------|---------|----------|-------------|------|-------------|
| code_camera    | integer | true     | none        |      | none        |
| code_command   | integer | true     | none        |      | none        |
| code_fpga      | integer | true     | none        |      | none        |
| code_i2000     | integer | true     | none        |      | none        |
| code_imu       | integer | true     | none        |      | none        |
| code_lidar     | integer | true     | none        |      | none        |
| code_mcu       | integer | true     | none        |      | none        |
| code_raster    | integer | true     | none        |      | none        |
| code_time_sync | integer | true     | none        |      | none        |

<h2 id="tocS_SystemTime">SystemTime</h2>

<a id="schemasystemtime"></a>
<a id="schema_SystemTime"></a>
<a id="tocSsystemtime"></a>
<a id="tocssystemtime"></a>

```json
{
  "time": "string",
  "timestamp": 0,
  "timezone": "string",
  "offset": 0
}

```

### Properties

| Name      | Type    | Required | Constraints | Name | Description |
|-----------|---------|----------|-------------|------|-------------|
| time      | string  | true     | none        |      | none        |
| timestamp | integer | true     | none        |      | none        |
| timezone  | string  | true     | none        |      | none        |
| offset    | integer | true     | none        |      | none        |

<h2 id="tocS_TakeCareInfo">TakeCareInfo</h2>

<a id="schematakecareinfo"></a>
<a id="schema_TakeCareInfo"></a>
<a id="tocStakecareinfo"></a>
<a id="tocstakecareinfo"></a>

```json
{
  "rotateCount": 0,
  "workTime": 0,
  "currentWorkTime": 0
}

```

### Properties

| Name            | Type    | Required | Constraints | Name | Description |
|-----------------|---------|----------|-------------|------|-------------|
| rotateCount     | integer | true     | none        |      | none        |
| workTime        | integer | true     | none        |      | seconds     |
| currentWorkTime | integer | true     | none        |      | seconds     |

<h2 id="tocS_WifiConfig2">WifiConfig2</h2>

<a id="schemawificonfig2"></a>
<a id="schema_WifiConfig2"></a>
<a id="tocSwificonfig2"></a>
<a id="tocswificonfig2"></a>

```json
{
  "country": "string",
  "fre": 0
}

```

### Properties

| Name    | Type    | Required | Constraints | Name | Description    |
|---------|---------|----------|-------------|------|----------------|
| country | string  | true     | none        |      | none           |
| fre     | integer | true     | none        |      | 0: 2.4G; 1: 5G |

<h2 id="tocS_WorkStatus">WorkStatus</h2>

<a id="schemaworkstatus"></a>
<a id="schema_WorkStatus"></a>
<a id="tocSworkstatus"></a>
<a id="tocsworkstatus"></a>

```json
{
  "status": 0
}

```

### Properties

| Name   | Type    | Required | Constraints | Name | Description         |
|--------|---------|----------|-------------|------|---------------------|
| status | integer | true     | none        |      | 0:StandBy 1:Working |

<h2 id="tocS_NTripAccount">NTripAccount</h2>

<a id="schemantripaccount"></a>
<a id="schema_NTripAccount"></a>
<a id="tocSntripaccount"></a>
<a id="tocsntripaccount"></a>

```json
{
  "mount_point": "string",
  "username": "string",
  "password": "string"
}

```

### Properties

| Name        | Type   | Required | Constraints | Name | Description |
|-------------|--------|----------|-------------|------|-------------|
| mount_point | string | true     | none        |      | none        |
| username    | string | true     | none        |      | none        |
| password    | string | true     | none        |      | none        |

<h2 id="tocS_NTripConfig">NTripConfig</h2>

<a id="schemantripconfig"></a>
<a id="schema_NTripConfig"></a>
<a id="tocSntripconfig"></a>
<a id="tocsntripconfig"></a>

```json
{
  "host": "string",
  "mount_point": "string",
  "username": "string",
  "password": "string",
  "port": 0
}

```

### Properties

| Name        | Type    | Required | Constraints | Name | Description |
|-------------|---------|----------|-------------|------|-------------|
| host        | string  | true     | none        |      | none        |
| mount_point | string  | true     | none        |      | none        |
| username    | string  | true     | none        |      | none        |
| password    | string  | true     | none        |      | none        |
| port        | integer | true     | none        |      | none        |

<h2 id="tocS_MotorBoard">MotorBoard</h2>

<a id="schemamotorboard"></a>
<a id="schema_MotorBoard"></a>
<a id="tocSmotorboard"></a>
<a id="tocsmotorboard"></a>

```json
{
  "total_voltage": 0,
  "battery_voltage": 0,
  "lidar_voltage": 0,
  "mc_ph_current_1": 0,
  "mc_ph_current_2": 0,
  "mc_ph_current_3": 0,
  "rotate_speed": 0,
  "motor_state": 0,
  "raster_num": 0,
  "temp_rk": 0,
  "temp_fpga": 0,
  "pps_count": 0
}

```

### Properties

| Name            | Type   | Required | Constraints | Name | Description |
|-----------------|--------|----------|-------------|------|-------------|
| total_voltage   | number | true     | none        |      | none        |
| battery_voltage | number | true     | none        |      | none        |
| lidar_voltage   | number | true     | none        |      | none        |
| mc_ph_current_1 | number | true     | none        |      | none        |
| mc_ph_current_2 | number | true     | none        |      | none        |
| mc_ph_current_3 | number | true     | none        |      | none        |
| rotate_speed    | number | true     | none        |      | none        |
| motor_state     | number | true     | none        |      | none        |
| raster_num      | number | true     | none        |      | none        |
| temp_rk         | number | true     | none        |      | none        |
| temp_fpga       | number | true     | none        |      | none        |
| pps_count       | number | true     | none        |      | none        |

<h2 id="tocS_Camera2">Camera2</h2>

<a id="schemacamera2"></a>
<a id="schema_Camera2"></a>
<a id="tocScamera2"></a>
<a id="tocscamera2"></a>

```json
{
  "name": "string",
  "optCamState": 0,
  "optCamOpen": 0,
  "optCamRecMode": 0,
  "optCamEncShareMode": 0,
  "optCamYuvShareMode": 0,
  "optCamContShootMode": 0,
  "optCamExpos": 0,
  "optCamInter": 0,
  "corCamState": 0,
  "corCamOpen": 0,
  "corCamRecMode": 0,
  "corCamEncShareMode": 0,
  "corCamYuvShareMode": 0,
  "corCamContShootMode": 0,
  "corCamExpos": 0,
  "corCamInter": 0
}

```

### Properties

| Name                | Type    | Required | Constraints | Name | Description |
|---------------------|---------|----------|-------------|------|-------------|
| name                | string  | true     | none        |      | none        |
| optCamState         | integer | true     | none        |      | none        |
| optCamOpen          | integer | true     | none        |      | none        |
| optCamRecMode       | integer | true     | none        |      | none        |
| optCamEncShareMode  | integer | true     | none        |      | none        |
| optCamYuvShareMode  | integer | true     | none        |      | none        |
| optCamContShootMode | integer | true     | none        |      | none        |
| optCamExpos         | integer | true     | none        |      | none        |
| optCamInter         | integer | true     | none        |      | none        |
| corCamState         | integer | true     | none        |      | none        |
| corCamOpen          | integer | true     | none        |      | none        |
| corCamRecMode       | integer | true     | none        |      | none        |
| corCamEncShareMode  | integer | true     | none        |      | none        |
| corCamYuvShareMode  | integer | true     | none        |      | none        |
| corCamContShootMode | integer | true     | none        |      | none        |
| corCamExpos         | integer | true     | none        |      | none        |
| corCamInter         | integer | true     | none        |      | none        |

<h2 id="tocS_Storage">Storage</h2>

<a id="schemastorage"></a>
<a id="schema_Storage"></a>
<a id="tocSstorage"></a>
<a id="tocsstorage"></a>

```json
{
  "total_space": 0,
  "free_space": 0,
  "used_space": 0
}

```

MB

### Properties

| Name        | Type    | Required | Constraints | Name | Description |
|-------------|---------|----------|-------------|------|-------------|
| total_space | integer | true     | none        |      | MB          |
| free_space  | integer | true     | none        |      | MB          |
| used_space  | integer | true     | none        |      | MB          |

<h2 id="tocS_RunStatus">RunStatus</h2>

<a id="schemarunstatus"></a>
<a id="schema_RunStatus"></a>
<a id="tocSrunstatus"></a>
<a id="tocsrunstatus"></a>

```json
{
  "run_time": 0,
  "run_rote": 0,
  "cpu_use": 0,
  "mem_use": 0,
  "cpu_temp": 0,
  "active_sta": 0,
  "record_time": 0,
  "ssd_mount": 0
}

```

### Properties

| Name        | Type    | Required | Constraints | Description |
|-------------|---------|----------|-------------|-------------|
| run_time    | integer | true     | none        |             | Total work time(seconds) |
| run_rote    | integer | true     | none        |             | Rotate count             |
| cpu_use     | number  | true     | none        |             | none                     |
| mem_use     | number  | true     | none        |             | none                     |
| cpu_temp    | number  | true     | none        |             | none                     |
| active_sta  | integer | true     | none        |             | none                     |
| record_time | integer | true     | none        |             | Work time(seconds)       |
| ssd_mount   | integer | true     | none        |             | 0: Normally mounted; 1: Not mounted |

<h2 id="tocS_ProjectInfo">ProjectInfo</h2>

<a id="schemaprojectinfo"></a>
<a id="schema_ProjectInfo"></a>
<a id="tocSprojectinfo"></a>
<a id="tocsprojectinfo"></a>

```json
{
  "prj_name": "string",
  "prj_path": "string",
  "prj_time": "string",
  "prj_type": 0
}

```

### Properties

| Name     | Type    | Required | Constraints | Name | Description |
|----------|---------|----------|-------------|------|-------------|
| prj_name | string  | true     | none        |      | none        |
| prj_path | string  | true     | none        |      | none        |
| prj_time | string  | true     | none        |      | none        |
| prj_type | integer | true     | none        |      | none        |

