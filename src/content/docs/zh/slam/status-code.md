# 状态码

| 设备                                       | 状态码版本     |
|------------------------------------------|-----------|
| SLAM200 Series<br/>SLAM1000<br/>SLAM2000 | Version 2 |
| SLAM100                                  | Version 1 |

# Version 2

## code_command

``` Dart
  int WIFI_DISCONNECTED        = 0x01 << 0;   // wifi连接状态 0连接 1未连接
  int UUID_FAILED              = 0x01 << 1;   // 获取UUID状态 0成功 1失败
  int INACTIVE                 = 0x01 << 2;   // 未激活 0激活 1未激活
  int RECORDING                = 0x01 << 3;   // 记录状态 0没有记录 1正在记录
  int SHUTDOWN                 = 0x01 << 4;   // 关机状态
  int SSD_HEALTH_ERROR         = 0x01 << 5;   // SSD健康状态 0健康 1异常
  int SSD_USB_MOUNT            = 0x01 << 6;   // SSD USB挂载状态
  int EMBED_ERROR              = 0x01 << 7;   // 建图功能状态 0正常 1异常
  int SSD_SPACE_WARNING        = 0x01 << 8;   // SSD剩余空间警告 小于20G,警告
  int SSD_SPACE_ERROR          = 0x01 << 9;   // SSD剩余空间错误 小于10G,不能工作
  int NETWORK_CONNECT_ERROR    = 0x01 << 10;  // 网络连接错误 0正常 1未连接
  int RTK_OFFLINE              = 0x01 << 11;  // RTK在线状态 0在线 1离线
  int RTK_UPGRADE              = 0x01 << 12;  // RTK升级状态 0未升级 1升级中
  int RTCM_TIMEOUT             = 0x01 << 13;  // 差分数据超时 0正常 1超时
  int NTRIP_ERROR              = 0x01 << 14;  // 账号密码错误状态 0正确 1错误
  int DATA_READY               = 0x01 << 15;  // 数据准备状态 0未准备好 1准备好
```

## code_mcu

``` Dart
  int OFF_LINE        = 0x01 << 0;  // MCU不在线 0在线 1不在线
  int VER             = 0x01 << 1;  // MCU版本 0正常 1异常
  int UUID_FAILED     = 0x01 << 2;  // UUID获取失败 0成功 1失败
  int UPGRADE         = 0x01 << 3;  // MCU升级状态 1升级中
  int MX8_TEMP_LOW    = 0x01 << 8;  // MX8低温警告  1低温
  int MX8_TEMP_HIGH   = 0x01 << 9;  // MX8高温警告  1高温
  int FPGA_TEMP_LOW   = 0x01 << 10; // FPGA低温警告  1低温
  int FPGA_TEMP_HIGH  = 0x01 << 11; // FPGA高温警告  1高温
  int BAT_UPGRADE     = 0x01 << 16; // 电池升级 1升级
  int BAT_OFFLINE     = 0x01 << 17; // 电池不在线信息 1不在线
  int INACTIVE        = 0x01 << 18; // 激活状态 1未激活
  int LIDAR_OFF       = 0x01 << 19; // Lidar电源关闭 1关闭
```

## code_fpga

``` Dart
  int PROGRAM_FILE_FAILED = 0x01 << 0;  // fpga加载文件读取失败 1失败
  int PROGRAM_LOAD_ERROR  = 0x01 << 1;  // fpga程序加载错误 1错误
  int OFFLINE             = 0x01 << 2;  // fpga不在线 1不在线
  int VER                 = 0x01 << 3;  // fpga版本获取失败 1失败
  int UUID_FAILED         = 0x01 << 4;  // fpgaUUID 1失败
  int NOT_READY           = 0x01 << 5;  // fpga准备状态 1未准备
  int TIME_NOT_CAL        = 0x01 << 6;  // fpga时间未校准 1未校准
  int PPS_LOCK            = 0x01 << 7;  // fpga外部pps输入 1外部无输入
  int RTCM_TIMEOUT        = 0x01 << 8;  // fpga RMC时间接收超时 1超时
  int RTCM_ERROR          = 0x01 << 9;  // fpga接收RMC时间错误 1错误
  int RASTE_F             = 0x01 << 16; // 光栅分辨率错误 1错误
  int RASTE_S             = 0x01 << 17; // 光栅信号错误 1错误
  int RASTE_A             = 0x01 << 18; // 光栅A相错误 1错误
  int RASTE_B             = 0x01 << 19; // 光栅B相错误 1错误
  int RASTE_Z             = 0x01 << 20; // 光栅Z相错误 1错误
  int IMU_C               = 0x01 << 21; // imu配置未完成 1未完成
  int RTC_C               = 0x01 << 22; // RTC配置未完成 1未完成
  int RTC_E               = 0x01 << 23; // RTC掉过电 1掉过电
```

## code_i2000 (高精度IMU)

``` Dart
  int DATA_ERROR            = 0x01 << 0;  // 数据错误
  int DATA_READ_NOT_UPDATE  = 0x01 << 1;  // 数据读取不更新
  int SYNC                  = 0x01 << 2;  // 时间同步
  int DATA_WRITE            = 0x01 << 3;  // 数据写入不更新
  int UPGRADE               = 0x01 << 4;  // 正在升级
  int OFFLINE               = 0x01 << 5;  // I2000在线
  int ACC                   = 0x01 << 8;  // 加速度传感器在线状态
  int GRY                   = 0x01 << 9;  // 陀螺仪传感器在线状态
  int PRE                   = 0x01 << 10; // 气压计传感器在线状态
  int MAG                   = 0x01 << 11; // 磁力计传感器在线状态
```

## code_imu

``` Dart
  int DATA_ERROR            = 0x01 << 0;  // 数据错误
  int DATA_READ_NOT_UPDATE  = 0x01 << 1;  // 数据读取不更新
  int DATA_WRITE_NOT_UPDATE = 0x01 << 2;  // 数据写入不更新
  int ONLINE                = 0x01 << 3;  // 数据在线状态
```

## code_raster

``` Dart
  int DATA_ERROR            = 0x01 << 0;  // 数据错误
  int DATA_READ_NOT_UPDATE  = 0x01 << 1;  // 数据读取不更新
  int DATA_WRITE_NOT_UPDATE = 0x01 << 2;  // 数据写入不更新
```

## code_time_sync

``` Dart
  int TIME_SYNC_COMPLETE    = 0x01 << 0;  // 时间同步完成
  int SYSTEM_SYNC_CORRECT   = 0x01 << 1;  // 时间同步正确
  int TIME_PPS_NOT_UPDATE   = 0x01 << 2;  // PPS 不更新
  int TIME_RMC_MISSING      = 0x01 << 3;  // 缺少时间同步信息
```

## code_lidar

``` Dart
  bool get disconnect         => bitCheck(0x01);         // 1: lidar没连接，0：lidar连接
  bool get noData             => bitCheck(0x01 << 1);    // 1：无数据；0：有数据
  bool get dataError          => bitCheck(0x01 << 2);    // 1：数据有错误；0：数据无错误
  bool get dataWriteError     => bitCheck(0x01 << 3);    // 1：数据写入错误；0：数据写入正常
  bool get dataWriteSlow      => bitCheck(0x1 << 4);     // 1：数据写入缓慢；0：数据写入正常
  bool get timeSyncError      => bitCheck(0x01 << 5);    // 1：时间同步异常；0：时间同步OK
  bool get isRecording        => bitCheck(0x01 << 6);    // 1：正在记录数据；0：不在记录数据
  bool get isSendData         => bitCheck(0x01 << 7);    // 暂无
  bool get realTimeData       => bitCheck(0x01 << 8);    // 暂无

  bool get interTempAbn       => bitCheck(0x01 << 9);    // 设备内部器件温度异常
  bool get envTempHigh        => bitCheck(0x01 << 10);   // 设备运行环境温度高
  bool get envTempError       => bitCheck(0x01 << 11);   // 设备运行环境温度超过承受极限，设备已停止工作
  bool get equVoltError       => bitCheck(0x01 << 12);   // 设备外部电压异常
  bool get equParamError      => bitCheck(0x01 << 13);   // 设备参数异常
  bool get scanModAbnRecover  => bitCheck(0x01 << 14);   // 扫描模块异常，正在尝试自恢复中
  bool get scanModuleError    => bitCheck(0x01 << 15);   // 扫描模块异常

  // 升级状态的 getter
  bool get isUpgrading        => bitCheck(0x01 << 16);   // 00:正常; 01:正在升级; 02:升级完成
  bool get isUpgraded         => bitCheck(0x02 << 16);   // 00:正常; 01:正在升级; 02:升级完成

  bool get gpsError           => bitCheck(0x01 << 18);   // lidar GPS信号异常
  bool get ppsError           => bitCheck(0x01 << 19);   // lidar pps信号异常
```

## code_camera

``` Dart
  bool get opticalCamPipeline  => bitCheck(0x01);        // 光学相机开启 1:异常，0：正常
  bool get opticalCamRecord    => bitCheck(0x02);        // 光学相机录制数据 1:异常，0：正常
  bool get opticalCamEncShare  => bitCheck(0x04);        // 光学相机分享ENC数据 1:异常，0：正常
  bool get opticalCamYuvShare  => bitCheck(0x08);        // 光学相机分享YUV数据 1:异常，0：正常
  bool get opticalCamSnap      => bitCheck(0x10);        // 光学相机抓拍       1:异常，0：正常
  bool get opticalCamContinues => bitCheck(0x20);        // 光学相机连拍 1:异常，0：正常
  // 保留位10 
  bool get colorCamPipeline    => bitCheck(0x01 << 16);  // 赋色相机开启 1:异常，0：正常
  bool get colorCamRecord      => bitCheck(0x01 << 17);  // 赋色相机录制数据 1:异常，0：正常
  bool get colorCamEncShare    => bitCheck(0x01 << 18);  // 赋色相机录制数据 1:异常，0：正常
  bool get colorCamYuvShare    => bitCheck(0x01 << 19);  // 赋色相机分享YUV数据 1:异常，0：正常
  bool get colorCamSnap        => bitCheck(0x01 << 20);  // 赋色相机抓拍       1:异常，0：正常
  bool get colorCamContinues   => bitCheck(0x01 << 21);  // 赋色相机连拍 1:异常，0：正常
```

# Version 1

## statusCode1

MCU code

## statusCod2

Camera code

## statusCode3

FPGA code

## statusCode4

X8 code

## statusCode5

Lidar code

## devStatus
