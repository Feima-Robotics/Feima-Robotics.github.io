---
layout: page
title: SLAM HTTP API
---

Base URLs:

* <a href="http://{{DeviceIP}}:19700">http://{{DeviceIP}}:19700</a>

## GET 获取版本信息

GET /slam/get_version

> 返回示例

> 200 Response

```json
{
  "status": 0,
  "message": null,
  "data": {}
}
```

### 返回结果

| 状态码 | 状态码含义                                                   | 说明   | 数据模型   |
|-----|---------------------------------------------------------|------|--------|
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none | Inline |

### 返回数据结构

状态码 **200**

| 名称        | 类型      | 必选   | 约束   | 中文名 | 说明                  |
|-----------|---------|------|------|-----|---------------------|
| » status  | integer | true | none |     | 0 success, 1 failed |
| » message | null    | true | none |     | error message       |
| » data    | object  | true | none |     | none                |



## GET 同步设备时间

GET /slam/sync_time

### 请求参数

| 名称        | 位置    | 类型     | 必选 | 说明      |
|-----------|-------|--------|----|---------|
| timestamp | query | string | 是  | UTC 时间戳 |
| timezone  | query | string | 否  | 时区      |

> 返回示例

> 200 Response

```json
{
  "status": 0,
  "message": null
}
```

### 返回结果

| 状态码 | 状态码含义                                                   | 说明   | 数据模型                            |
|-----|---------------------------------------------------------|------|---------------------------------|
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none | [BaseResult](#schemabaseresult) |

## GET 获取设备时间

GET /slam/get_sys_time

> 返回示例

> 200 Response

```json
{
  "time": "string",
  "timestamp": 0,
  "timezone": "string",
  "offset": 0
}
```

### 返回结果

| 状态码 | 状态码含义                                                   | 说明   | 数据模型                            |
|-----|---------------------------------------------------------|------|---------------------------------|
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none | [SystemTime](#schemasystemtime) |

## GET 是否存在时区

GET /slam/exists_timezone

### 请求参数

| 名称       | 位置    | 类型     | 必选 | 说明    |
|----------|-------|--------|----|-------|
| timezone | query | string | 是  | 时区城市名 |

> 返回示例

> 200 Response

```json
{
  "status": 0,
  "message": null,
  "data": true
}
```

### 返回结果

| 状态码 | 状态码含义                                                   | 说明   | 数据模型   |
|-----|---------------------------------------------------------|------|--------|
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none | Inline |

### 返回数据结构

状态码 **200**

| 名称        | 类型      | 必选   | 约束   | 中文名 | 说明                  |
|-----------|---------|------|------|-----|---------------------|
| » status  | integer | true | none |     | 0 success, 1 failed |
| » message | null    | true | none |     | error message       |
| » data    | boolean | true | none |     | none                |

## GET 获取Wi-Fi配置

GET /slam/get_wifi_status

> 返回示例

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

### 返回结果

| 状态码 | 状态码含义                                                   | 说明   | 数据模型   |
|-----|---------------------------------------------------------|------|--------|
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none | Inline |

### 返回数据结构

状态码 **200**

| 名称         | 类型                                | 必选   | 约束   | 中文名 | 说明                  |
|------------|-----------------------------------|------|------|-----|---------------------|
| » status   | integer                           | true | none |     | 0 success, 1 failed |
| » message  | null                              | true | none |     | error message       |
| » data     | [WifiConfig2](#schemawificonfig2) | true | none |     | none                |
| »» country | string                            | true | none |     | none                |
| »» fre     | integer                           | true | none |     | 0: 2.4G;  1: 5G     |

## GET 试拍

GET /slam/capture

拍照，照片存放在 `/mnt/udisk/snap/`

### 请求参数

| 名称     | 位置    | 类型     | 必选 | 说明                        |
|--------|-------|--------|----|---------------------------|
| camera | query | string | 否  | opt, color,不填或者未指定都默认为all |

> 返回示例

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

### 返回结果

| 状态码 | 状态码含义                                                   | 说明   | 数据模型                                |
|-----|---------------------------------------------------------|------|-------------------------------------|
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none | [CommonResult](#schemacommonresult) |

## GET 开始工作

GET /slam/start_work

> 返回示例

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

### 返回结果

| 状态码 | 状态码含义                                                   | 说明   | 数据模型                                |
|-----|---------------------------------------------------------|------|-------------------------------------|
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none | [CommonResult](#schemacommonresult) |

## GET 重启设备

GET /slam/restart

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

| 状态码 | 状态码含义                                                   | 说明   | 数据模型   |
|-----|---------------------------------------------------------|------|--------|
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none | Inline |

### 返回数据结构

## GET 结束工作

GET /slam/end_work

> 返回示例

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

### 返回结果

| 状态码 | 状态码含义                                                   | 说明   | 数据模型                                |
|-----|---------------------------------------------------------|------|-------------------------------------|
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none | [CommonResult](#schemacommonresult) |

## GET 设置转速

GET /slam2000/set_motor_speed

### 请求参数

| 名称    | 位置    | 类型              | 必选 | 说明   |
|-------|-------|-----------------|----|------|
| speed | query | number(float32) | 是  | none |

> 返回示例

> 200 Response

```json
{
  "status": 0,
  "message": null
}
```

### 返回结果

| 状态码 | 状态码含义                                                   | 说明   | 数据模型   |
|-----|---------------------------------------------------------|------|--------|
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none | Inline |

### 返回数据结构

状态码 **200**

| 名称        | 类型      | 必选   | 约束   | 中文名 | 说明                  |
|-----------|---------|------|------|-----|---------------------|
| » status  | integer | true | none |     | 0 success, 1 failed |
| » message | null    | true | none |     | error message       |

## GET 设置相机状态

GET /slam2000/set_camera_configs

### 请求参数

| 名称          | 位置    | 类型      | 必选 | 说明                               |
|-------------|-------|---------|----|----------------------------------|
| controlType | query | integer | 是  | 1:赋色镜头；2，光学镜头                    |
| camType     | query | integer | 是  | camSet                    params |
| param       | query | integer | 否  | camSet                    params |

#### 详细说明

**camType**: camSet params
1，开启/关闭摄像头； 0:关闭；1：开启
2，抓拍； 无
3，开启/关闭录像模式； 0:关闭；1：开启
4，开启/关闭共享数据； 0:关闭；1：开启
5，开启/关闭共享YUV数据； 0:关闭；1：开启
6，开启/关闭连拍模式； 0:关闭；1：开启
7，设置曝光参数 0：关闭; 1：50hz; 2：60hz
8，拍照间隔 1秒多少张照片

**param**: camSet params
1，开启/关闭摄像头； 0:关闭；1：开启
2，抓拍； 无
3，开启/关闭录像模式； 0:关闭；1：开启
4，开启/关闭共享数据； 0:关闭；1：开启
5，开启/关闭共享YUV数据； 0:关闭；1：开启
6，开启/关闭连拍模式； 0:关闭；1：开启
7，设置曝光参数 0：关闭; 1：50hz; 2：60hz
8，拍照间隔 1秒多少张照片

> 返回示例

> 200 Response

```json
{
  "status": 0,
  "message": null
}
```

### 返回结果

| 状态码 | 状态码含义                                                   | 说明   | 数据模型                            |
|-----|---------------------------------------------------------|------|---------------------------------|
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none | [BaseResult](#schemabaseresult) |

## GET 格式化SSD

GET /slam2000/format_storage

> 返回示例

> 200 Response

```json
{
  "status": 0,
  "message": null,
  "data": 0
}
```

### 返回结果

| 状态码 | 状态码含义                                                   | 说明   | 数据模型   |
|-----|---------------------------------------------------------|------|--------|
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none | Inline |

### 返回数据结构

状态码 **200**

| 名称        | 类型      | 必选   | 约束   | 中文名 | 说明                  |
|-----------|---------|------|------|-----|---------------------|
| » status  | integer | true | none |     | 0 success, 1 failed |
| » message | null    | true | none |     | error message       |
| » data    | integer | true | none |     | none                |

## GET 设置运行模式

GET /slam2000/set_run_mode

### 请求参数

| 名称   | 位置    | 类型     | 必选 | 说明         |
|------|-------|--------|----|------------|
| mode | query | number | 否  | 1 站式  0 背式 |

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

| 状态码 | 状态码含义                                                   | 说明   | 数据模型   |
|-----|---------------------------------------------------------|------|--------|
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none | Inline |

### 返回数据结构

## GET 除MCU，重启设备电源

GET /slam2000/control_by_type?action_type=25&param=10

### 请求参数

| 名称          | 位置    | 类型     | 必选 | 说明                    |
|-------------|-------|--------|----|-----------------------|
| action_type | query | string | 是  | msg_id=30, 协议中控制的操作类型 |
| param       | query | string | 是  | msg_id=30, 协议中控制的操作参数 |

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

| 状态码 | 状态码含义                                                   | 说明   | 数据模型   |
|-----|---------------------------------------------------------|------|--------|
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none | Inline |

### 返回数据结构

## GET 配置Wi-Fi

GET /slam2000/set_wifi_country_mode

### 请求参数

| 名称          | 位置    | 类型     | 必选 | 说明 |
|-------------|-------|--------|----|----|
| countryCode | query | string | 是  | -  |
| freq        | query | string | 是  | -  |

> 返回示例

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

### 返回结果

| 状态码 | 状态码含义                                                   | 说明   | 数据模型   |
|-----|---------------------------------------------------------|------|--------|
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none | Inline |

### 返回数据结构

状态码 **200**

| 名称         | 类型      | 必选   | 约束   | 中文名 | 说明                  |
|------------|---------|------|------|-----|---------------------|
| » status   | integer | true | none |     | 0 success, 1 failed |
| » message  | null    | true | none |     | error message       |
| » data     | object  | true | none |     | none                |
| »» country | string  | true | none |     | none                |
| »» fre     | integer | true | none |     | 0: 2.4G;  1: 5G     |
| »» setWifi | integer | true | none |     | 0: 失败；1: 成功         |

## GET 获取SN号

GET /slam/get_serial_number

> 返回示例

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

### 返回结果

| 状态码 | 状态码含义                                                   | 说明   | 数据模型   |
|-----|---------------------------------------------------------|------|--------|
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none | Inline |

### 返回数据结构

状态码 **200**

| 名称          | 类型              | 必选   | 约束   | 中文名 | 说明                  |
|-------------|-----------------|------|------|-----|---------------------|
| » status    | integer         | true | none |     | 0 success, 1 failed |
| » message   | null            | true | none |     | error message       |
| » data      | [SN](#schemasn) | true | none |     | none                |
| »» serialNo | string          | true | none |     | none                |

## GET 获取工作状态

GET /slam/get_work_status

> 返回示例

> 200 Response

```json
{
  "status": 0,
  "message": null
}
```

### 返回结果

| 状态码 | 状态码含义                                                   | 说明   | 数据模型                            |
|-----|---------------------------------------------------------|------|---------------------------------|
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none | [BaseResult](#schemabaseresult) |

## GET 获取错误状态

GET /slam/get_error_status

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

| 状态码 | 状态码含义                                                   | 说明   | 数据模型   |
|-----|---------------------------------------------------------|------|--------|
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none | Inline |

### 返回数据结构

## GET 获取实时建图状态

GET /slam/get_mapping_info

> 返回示例

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

### 返回结果

| 状态码 | 状态码含义                                                   | 说明   | 数据模型   |
|-----|---------------------------------------------------------|------|--------|
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none | Inline |

### 返回数据结构

状态码 **200**

| 名称            | 类型                                          | 必选   | 约束   | 中文名 | 说明                                                                                                                                                                                                              |
|---------------|---------------------------------------------|------|------|-----|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| » status      | integer                                     | true | none |     | 0 success, 1 failed                                                                                                                                                                                             |
| » message     | null                                        | true | none |     | error message                                                                                                                                                                                                   |
| » data        | [RealMappingState](#schemarealmappingstate) | true | none |     | none                                                                                                                                                                                                            |
| »» id         | integer                                     | true | none |     | none                                                                                                                                                                                                            |
| »» mission_id | integer                                     | true | none |     | none                                                                                                                                                                                                            |
| »» state      | integer                                     | true | none |     | RealStateUnknown = 0;<br />RealStateIdle = 1;<br />RealStateInit = 2;<br />RealStateMapping = 3;<br />RealStateOptimizing = 4;<br />RealStateSaving = 5;<br />RealStateFinished = 6;<br />RealStateError = 100; |
| »» timestamp  | number                                      | true | none |     | none                                                                                                                                                                                                            |
| »» progress   | number                                      | true | none |     | none                                                                                                                                                                                                            |

#### 枚举值

| 属性    | 值   |
|-------|-----|
| state | 1   |
| state | 2   |
| state | 3   |
| state | 4   |
| state | 5   |
| state | 100 |

## GET 版本信息

GET /slam2000/get_main_board_info

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

| 状态码 | 状态码含义                                                   | 说明   | 数据模型   |
|-----|---------------------------------------------------------|------|--------|
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none | Inline |

### 返回数据结构

## GET 电机板状态

GET /slam2000/get_motor_board_state

> 返回示例

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

### 返回结果

| 状态码 | 状态码含义                                                   | 说明   | 数据模型   |
|-----|---------------------------------------------------------|------|--------|
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none | Inline |

### 返回数据结构

状态码 **200**

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

## GET 运行信息

GET /slam2000/get_run_state

> 返回示例

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

### 返回结果

| 状态码 | 状态码含义                                                   | 说明   | 数据模型   |
|-----|---------------------------------------------------------|------|--------|
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none | Inline |

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

## GET 项目信息

GET /slam2000/get_proj_state

> 返回示例

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

### 返回结果

| 状态码 | 状态码含义                                                   | 说明   | 数据模型   |
|-----|---------------------------------------------------------|------|--------|
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none | Inline |

### 返回数据结构

状态码 **200**

| 名称          | 类型                                | 必选   | 约束   | 中文名 | 说明                  |
|-------------|-----------------------------------|------|------|-----|---------------------|
| » status    | integer                           | true | none |     | 0 success, 1 failed |
| » message   | null                              | true | none |     | error message       |
| » data      | [ProjectInfo](#schemaprojectinfo) | true | none |     | none                |
| »» prj_name | string                            | true | none |     | none                |
| »» prj_path | string                            | true | none |     | none                |
| »» prj_time | string                            | true | none |     | none                |
| »» prj_type | integer                           | true | none |     | none                |

## GET 设置项目

GET /slam2000/set_proj_state

### 请求参数

| 名称   | 位置    | 类型     | 必选 | 说明   |
|------|-------|--------|----|------|
| name | query | string | 否  | 项目名称 |
| path | query | string | 否  | 项目路径 |

> 返回示例

> 200 Response

```json
{
  "status": 0,
  "message": null
}
```

### 返回结果

| 状态码 | 状态码含义                                                   | 说明   | 数据模型                            |
|-----|---------------------------------------------------------|------|---------------------------------|
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none | [BaseResult](#schemabaseresult) |

## GET 电池信息

GET /slam2000/get_battery_state

> 返回示例

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

### 返回结果

| 状态码 | 状态码含义                                                   | 说明   | 数据模型   |
|-----|---------------------------------------------------------|------|--------|
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none | Inline |

### 返回数据结构

状态码 **200**

| 名称                      | 类型                                | 必选   | 约束   | 中文名 | 说明                  |
|-------------------------|-----------------------------------|------|------|-----|---------------------|
| » status                | integer                           | true | none |     | 0 success, 1 failed |
| » message               | null                              | true | none |     | error message       |
| » data                  | [BatteryInfo](#schemabatteryinfo) | true | none |     | none                |
| »» app_version          | number                            | true | none |     | none                |
| »» sn                   | number                            | true | none |     | none                |
| »» cycle_count          | number                            | true | none |     | none                |
| »» temperature          | number                            | true | none |     | none                |
| »» voltage              | number                            | true | none |     | none                |
| »» battery_vol_1        | number                            | true | none |     | none                |
| »» battery_vol_2        | number                            | true | none |     | none                |
| »» battery_vol_3        | number                            | true | none |     | none                |
| »» current              | number                            | true | none |     | none                |
| »» rsoc                 | number                            | true | none |     | none                |
| »» remain_capacity      | number                            | true | none |     | none                |
| »» full_charge_capacity | number                            | true | none |     | none                |
| »» safety_status        | number                            | true | none |     | none                |
| »» other_status         | number                            | true | none |     | none                |
| »» power_status         | number                            | true | none |     | none                |

## GET 相机状态

GET /slam2000/get_camera_info

> 返回示例

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

### 返回结果

| 状态码 | 状态码含义                                                   | 说明   | 数据模型                      |
|-----|---------------------------------------------------------|------|---------------------------|
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none | [Camera2](#schemacamera2) |

## GET SSD状态

GET /slam2000/get_ssd_info

> 返回示例

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

### 返回结果

| 状态码 | 状态码含义                                                   | 说明   | 数据模型   |
|-----|---------------------------------------------------------|------|--------|
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none | Inline |

### 返回数据结构

状态码 **200**

| 名称             | 类型                        | 必选   | 约束   | 中文名 | 说明                  |
|----------------|---------------------------|------|------|-----|---------------------|
| » status       | integer                   | true | none |     | 0 success, 1 failed |
| » message      | null                      | true | none |     | error message       |
| » data         | [Storage](#schemastorage) | true | none |     | MB                  |
| »» total_space | integer                   | true | none |     | MB                  |
| »» free_space  | integer                   | true | none |     | MB                  |
| »» used_space  | integer                   | true | none |     | MB                  |

## GET 删除控制点

GET /slam/remove_record_point

### 请求参数

| 名称    | 位置    | 类型     | 必选 | 说明 |
|-------|-------|--------|----|----|
| index | query | string | 是  | -  |

> 返回示例

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

### 返回结果

| 状态码 | 状态码含义                                                   | 说明   | 数据模型                                |
|-----|---------------------------------------------------------|------|-------------------------------------|
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none | [CommonResult](#schemacommonresult) |

## GET 获取控制点列表

GET /slam/get_record_point_list

> 返回示例

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

### 返回结果

| 状态码 | 状态码含义                                                   | 说明   | 数据模型   |
|-----|---------------------------------------------------------|------|--------|
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none | Inline |

### 返回数据结构

状态码 **200**

| 名称        | 类型                                    | 必选   | 约束   | 中文名 | 说明                  |
|-----------|---------------------------------------|------|------|-----|---------------------|
| » status  | integer                               | true | none |     | 0 success, 1 failed |
| » message | null                                  | true | none |     | error message       |
| » result  | [[RecordPoint2](#schemarecordpoint2)] | true | none |     | none                |
| »» index  | integer                               | true | none |     | none                |
| »» time   | number                                | true | none |     | none                |
| »» name   | string                                | true | none |     | none                |
| »» type   | integer                               | true | none |     | none                |

## GET 修改控制点名称

GET /slam/set_record_point_name

### 请求参数

| 名称    | 位置    | 类型     | 必选 | 说明             |
|-------|-------|--------|----|----------------|
| index | query | string | 是  | 控制点索引          |
| name  | query | string | 是  | 32字符以内，支持英文和数字 |

> 返回示例

> 200 Response

```json
{
  "status": 0,
  "message": null
}
```

### 返回结果

| 状态码 | 状态码含义                                                   | 说明   | 数据模型                            |
|-----|---------------------------------------------------------|------|---------------------------------|
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none | [BaseResult](#schemabaseresult) |

## GET 添加控制点

GET /slam/record_point_with_name

### 请求参数

| 名称   | 位置    | 类型     | 必选 | 说明                                |
|------|-------|--------|----|-----------------------------------|
| name | query | string | 是  | 32字符以内                            |
| type | query | string | 否  | 1 默认打点 2 静态点  3 特征点（slam100会拍照3张） |

> 返回示例

> 200 Response

```json
{
  "status": 0,
  "message": null,
  "data": {}
}
```

### 返回结果

| 状态码 | 状态码含义                                                   | 说明   | 数据模型   |
|-----|---------------------------------------------------------|------|--------|
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none | Inline |

### 返回数据结构

状态码 **200**

| 名称        | 类型      | 必选   | 约束   | 中文名 | 说明                  |
|-----------|---------|------|------|-----|---------------------|
| » status  | integer | true | none |     | 0 success, 1 failed |
| » message | null    | true | none |     | error message       |
| » data    | object  | true | none |     | none                |

## GET 记录控制点

GET /slam2000/record_point

### 请求参数

| 名称   | 位置    | 类型     | 必选 | 说明               |
|------|-------|--------|----|------------------|
| name | query | string | 否  | 控制点信息，32位以内英文下划线 |

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

| 状态码 | 状态码含义                                                   | 说明   | 数据模型   |
|-----|---------------------------------------------------------|------|--------|
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none | Inline |

### 返回数据结构

## GET 设置NTrip服务器

GET /rtk/set_ntrip_server

### 请求参数

| 名称   | 位置    | 类型     | 必选 | 说明   |
|------|-------|--------|----|------|
| host | query | string | 否  | none |
| port | query | string | 否  | none |

> 返回示例

> 200 Response

```json
{
  "status": 0,
  "message": null
}
```

### 返回结果

| 状态码 | 状态码含义                                                   | 说明   | 数据模型                            |
|-----|---------------------------------------------------------|------|---------------------------------|
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none | [BaseResult](#schemabaseresult) |

## GET 设置NTrip账号

GET /rtk/set_ntrip_mes

### 请求参数

| 名称   | 位置    | 类型     | 必选 | 说明   |
|------|-------|--------|----|------|
| user | query | string | 否  | none |
| pwd  | query | string | 否  | none |
| mntp | query | string | 否  | none |

> 返回示例

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

### 返回结果

| 状态码 | 状态码含义                                                   | 说明   | 数据模型   |
|-----|---------------------------------------------------------|------|--------|
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none | Inline |

### 返回数据结构

状态码 **200**

| 名称             | 类型                                  | 必选   | 约束   | 中文名 | 说明                  |
|----------------|-------------------------------------|------|------|-----|---------------------|
| » status       | integer                             | true | none |     | 0 success, 1 failed |
| » message      | null                                | true | none |     | error message       |
| » data         | [NTripAccount](#schemantripaccount) | true | none |     | none                |
| »» mount_point | string                              | true | none |     | none                |
| »» username    | string                              | true | none |     | none                |
| »» password    | string                              | true | none |     | none                |

## GET 获取NTrip设置

GET /rtk/get_ntrip_settings

> 返回示例

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

| 状态码 | 状态码含义                                                   | 说明   | 数据模型   |
|-----|---------------------------------------------------------|------|--------|
| 200 | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none | Inline |

### 返回数据结构

状态码 **200**

| 名称             | 类型                                | 必选   | 约束   | 中文名 | 说明                  |
|----------------|-----------------------------------|------|------|-----|---------------------|
| » status       | integer                           | true | none |     | 0 success, 1 failed |
| » message      | null                              | true | none |     | error message       |
| » data         | [NTripConfig](#schemantripconfig) | true | none |     | none                |
| »» host        | string                            | true | none |     | none                |
| »» mount_point | string                            | true | none |     | none                |
| »» username    | string                            | true | none |     | none                |
| »» password    | string                            | true | none |     | none                |
| »» port        | integer                           | true | none |     | none                |

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

### 属性

| 名称      | 类型      | 必选   | 约束   | 中文名 | 说明                  |
|---------|---------|------|------|-----|---------------------|
| status  | integer | true | none |     | 0 success, 1 failed |
| message | null    | true | none |     | error message       |

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

### 属性

| 名称     | 类型      | 必选   | 约束   | 中文名 | 说明                 |
|--------|---------|------|------|-----|--------------------|
| status | integer | true | none | 状态  | 0 failed，1 success |

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

### 属性

| 名称      | 类型                      | 必选   | 约束   | 中文名 | 说明                  |
|---------|-------------------------|------|------|-----|---------------------|
| status  | integer                 | true | none |     | 0 success, 1 failed |
| message | null                    | true | none |     | error message       |
| data    | [Status](#schemastatus) | true | none |     | result data         |

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

### 属性

| 名称      | 类型      | 必选   | 约束   | 中文名 | 说明                  |
|---------|---------|------|------|-----|---------------------|
| status  | integer | true | none |     | 0 success, 1 failed |
| message | string  | true | none |     | error message       |
| data    | null    | true | none |     | result data         |

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

### 属性

| 名称     | 类型      | 必选   | 约束   | 中文名 | 说明                                             |
|--------|---------|------|------|-----|------------------------------------------------|
| status | integer | true | none | 状态  | 0 unactivated，1 activated，2 temporaryActivated |

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

### 属性

| 名称                   | 类型     | 必选   | 约束   | 中文名 | 说明   |
|----------------------|--------|------|------|-----|------|
| app_version          | number | true | none |     | none |
| sn                   | number | true | none |     | none |
| cycle_count          | number | true | none |     | none |
| temperature          | number | true | none |     | none |
| voltage              | number | true | none |     | none |
| battery_vol_1        | number | true | none |     | none |
| battery_vol_2        | number | true | none |     | none |
| battery_vol_3        | number | true | none |     | none |
| current              | number | true | none |     | none |
| rsoc                 | number | true | none |     | none |
| remain_capacity      | number | true | none |     | none |
| full_charge_capacity | number | true | none |     | none |
| safety_status        | number | true | none |     | none |
| other_status         | number | true | none |     | none |
| power_status         | number | true | none |     | none |

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

### 属性

| 名称         | 类型      | 必选   | 约束   | 中文名 | 说明                                                                                                                                                                                                              |
|------------|---------|------|------|-----|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id         | integer | true | none |     | none                                                                                                                                                                                                            |
| mission_id | integer | true | none |     | none                                                                                                                                                                                                            |
| state      | integer | true | none |     | RealStateUnknown = 0;<br />RealStateIdle = 1;<br />RealStateInit = 2;<br />RealStateMapping = 3;<br />RealStateOptimizing = 4;<br />RealStateSaving = 5;<br />RealStateFinished = 6;<br />RealStateError = 100; |
| timestamp  | number  | true | none |     | none                                                                                                                                                                                                            |
| progress   | number  | true | none |     | none                                                                                                                                                                                                            |

#### 枚举值

| 属性    | 值   |
|-------|-----|
| state | 1   |
| state | 2   |
| state | 3   |
| state | 4   |
| state | 5   |
| state | 100 |

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

### 属性

| 名称    | 类型      | 必选   | 约束   | 中文名 | 说明   |
|-------|---------|------|------|-----|------|
| index | integer | true | none |     | none |
| time  | number  | true | none |     | none |
| name  | string  | true | none |     | none |
| type  | integer | true | none |     | none |

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

### 属性

| 名称       | 类型     | 必选   | 约束   | 中文名 | 说明   |
|----------|--------|------|------|-----|------|
| serialNo | string | true | none |     | none |

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

### 属性

| 名称             | 类型      | 必选   | 约束   | 中文名 | 说明   |
|----------------|---------|------|------|-----|------|
| code_camera    | integer | true | none |     | none |
| code_command   | integer | true | none |     | none |
| code_fpga      | integer | true | none |     | none |
| code_i2000     | integer | true | none |     | none |
| code_imu       | integer | true | none |     | none |
| code_lidar     | integer | true | none |     | none |
| code_mcu       | integer | true | none |     | none |
| code_raster    | integer | true | none |     | none |
| code_time_sync | integer | true | none |     | none |

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

### 属性

| 名称        | 类型      | 必选   | 约束   | 中文名 | 说明   |
|-----------|---------|------|------|-----|------|
| time      | string  | true | none |     | none |
| timestamp | integer | true | none |     | none |
| timezone  | string  | true | none |     | none |
| offset    | integer | true | none |     | none |

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

### 属性

| 名称              | 类型      | 必选   | 约束   | 中文名 | 说明      |
|-----------------|---------|------|------|-----|---------|
| rotateCount     | integer | true | none |     | none    |
| workTime        | integer | true | none |     | seconds |
| currentWorkTime | integer | true | none |     | seconds |

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

### 属性

| 名称      | 类型      | 必选   | 约束   | 中文名 | 说明              |
|---------|---------|------|------|-----|-----------------|
| country | string  | true | none |     | none            |
| fre     | integer | true | none |     | 0: 2.4G;  1: 5G |

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

### 属性

| 名称     | 类型      | 必选   | 约束   | 中文名 | 说明                  |
|--------|---------|------|------|-----|---------------------|
| status | integer | true | none | 状态  | 0:StandBy 1:Working |

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

### 属性

| 名称          | 类型     | 必选   | 约束   | 中文名 | 说明   |
|-------------|--------|------|------|-----|------|
| mount_point | string | true | none |     | none |
| username    | string | true | none |     | none |
| password    | string | true | none |     | none |

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

### 属性

| 名称          | 类型      | 必选   | 约束   | 中文名 | 说明   |
|-------------|---------|------|------|-----|------|
| host        | string  | true | none |     | none |
| mount_point | string  | true | none |     | none |
| username    | string  | true | none |     | none |
| password    | string  | true | none |     | none |
| port        | integer | true | none |     | none |

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

### 属性

| 名称              | 类型     | 必选   | 约束   | 中文名 | 说明   |
|-----------------|--------|------|------|-----|------|
| total_voltage   | number | true | none |     | none |
| battery_voltage | number | true | none |     | none |
| lidar_voltage   | number | true | none |     | none |
| mc_ph_current_1 | number | true | none |     | none |
| mc_ph_current_2 | number | true | none |     | none |
| mc_ph_current_3 | number | true | none |     | none |
| rotate_speed    | number | true | none |     | none |
| motor_state     | number | true | none |     | none |
| raster_num      | number | true | none |     | none |
| temp_rk         | number | true | none |     | none |
| temp_fpga       | number | true | none |     | none |
| pps_count       | number | true | none |     | none |

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

### 属性

| 名称                  | 类型      | 必选   | 约束   | 中文名 | 说明   |
|---------------------|---------|------|------|-----|------|
| name                | string  | true | none |     | none |
| optCamState         | integer | true | none |     | none |
| optCamOpen          | integer | true | none |     | none |
| optCamRecMode       | integer | true | none |     | none |
| optCamEncShareMode  | integer | true | none |     | none |
| optCamYuvShareMode  | integer | true | none |     | none |
| optCamContShootMode | integer | true | none |     | none |
| optCamExpos         | integer | true | none |     | none |
| optCamInter         | integer | true | none |     | none |
| corCamState         | integer | true | none |     | none |
| corCamOpen          | integer | true | none |     | none |
| corCamRecMode       | integer | true | none |     | none |
| corCamEncShareMode  | integer | true | none |     | none |
| corCamYuvShareMode  | integer | true | none |     | none |
| corCamContShootMode | integer | true | none |     | none |
| corCamExpos         | integer | true | none |     | none |
| corCamInter         | integer | true | none |     | none |

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

### 属性

| 名称          | 类型      | 必选   | 约束   | 中文名 | 说明 |
|-------------|---------|------|------|-----|----|
| total_space | integer | true | none |     | MB |
| free_space  | integer | true | none |     | MB |
| used_space  | integer | true | none |     | MB |

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

### 属性

| 名称          | 类型      | 必选   | 约束   | 中文名 | 说明                       |
|-------------|---------|------|------|-----|--------------------------|
| run_time    | integer | true | none |     | Total work time(seconds) |
| run_rote    | integer | true | none |     | Rotate count             |
| cpu_use     | number  | true | none |     | none                     |
| mem_use     | number  | true | none |     | none                     |
| cpu_temp    | number  | true | none |     | none                     |
| active_sta  | integer | true | none |     | none                     |
| record_time | integer | true | none |     | Work time(seconds)       |
| ssd_mount   | integer | true | none |     | 0: 正常挂载；1: 没有挂载          |

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

### 属性

| 名称       | 类型      | 必选   | 约束   | 中文名 | 说明   |
|----------|---------|------|------|-----|------|
| prj_name | string  | true | none |     | none |
| prj_path | string  | true | none |     | none |
| prj_time | string  | true | none |     | none |
| prj_type | integer | true | none |     | none |

