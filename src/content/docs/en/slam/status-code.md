# Status Codes

| Device                                   | Status Code Version |
|------------------------------------------|---------------------|
| SLAM200 Series<br/>SLAM1000<br/>SLAM2000 | Version 2           |
| SLAM100                                  | Version 1           |

# Version 2

example(Dart Code):

``` Dart
  bool bitCheck(int bit) {
    return (code & bit) != 0;
  }
  
  void main() {
    int code = 0x01 << 0; // Example: WiFi disconnected
    if (bitCheck(WIFI_DISCONNECTED)) {
      print("WiFi disconnected");
    }
  }
 ```

## code_command

``` Dart
  int WIFI_DISCONNECTED        = 0x01 << 0;   // WiFi connection status: 0 connected, 1 disconnected
  int UUID_FAILED              = 0x01 << 1;   // UUID acquisition status: 0 success, 1 failed
  int INACTIVE                 = 0x01 << 2;   // Activation status: 0 activated, 1 inactive
  int RECORDING                = 0x01 << 3;   // Recording status: 0 not recording, 1 recording
  int SHUTDOWN                 = 0x01 << 4;   // Shutdown status
  int SSD_HEALTH_ERROR         = 0x01 << 5;   // SSD health status: 0 healthy, 1 abnormal
  int SSD_USB_MOUNT            = 0x01 << 6;   // SSD USB mount status
  int EMBED_ERROR              = 0x01 << 7;   // Mapping function status: 0 normal, 1 abnormal
  int SSD_SPACE_WARNING        = 0x01 << 8;   // SSD remaining space warning: <20GB, warning
  int SSD_SPACE_ERROR          = 0x01 << 9;   // SSD remaining space error: <10GB, cannot work
  int NETWORK_CONNECT_ERROR    = 0x01 << 10;  // Network connection error: 0 normal, 1 disconnected
  int RTK_OFFLINE              = 0x01 << 11;  // RTK online status: 0 online, 1 offline
  int RTK_UPGRADE              = 0x01 << 12;  // RTK upgrade status: 0 not upgrading, 1 upgrading
  int RTCM_TIMEOUT             = 0x01 << 13;  // Differential data timeout: 0 normal, 1 timeout
  int NTRIP_ERROR              = 0x01 << 14;  // Account password error status: 0 correct, 1 error
  int DATA_READY               = 0x01 << 15;  // Data ready status: 0 not ready, 1 ready
```

## code_mcu

``` Dart
  int OFF_LINE        = 0x01 << 0;  // MCU offline: 0 online, 1 offline
  int VER             = 0x01 << 1;  // MCU version: 0 normal, 1 abnormal
  int UUID_FAILED     = 0x01 << 2;  // UUID acquisition failed: 0 success, 1 failed
  int UPGRADE         = 0x01 << 3;  // MCU upgrade status: 1 upgrading
  int MX8_TEMP_LOW    = 0x01 << 8;  // MX8 low temperature warning: 1 low temperature
  int MX8_TEMP_HIGH   = 0x01 << 9;  // MX8 high temperature warning: 1 high temperature
  int FPGA_TEMP_LOW   = 0x01 << 10; // FPGA low temperature warning: 1 low temperature
  int FPGA_TEMP_HIGH  = 0x01 << 11; // FPGA high temperature warning: 1 high temperature
  int BAT_UPGRADE     = 0x01 << 16; // Battery upgrade: 1 upgrading
  int BAT_OFFLINE     = 0x01 << 17; // Battery offline information: 1 offline
  int INACTIVE        = 0x01 << 18; // Activation status: 1 inactive
  int LIDAR_OFF       = 0x01 << 19; // LiDAR power off: 1 off
```

## code_fpga

``` Dart
  int PROGRAM_FILE_FAILED = 0x01 << 0;  // FPGA program file read failed: 1 failed
  int PROGRAM_LOAD_ERROR  = 0x01 << 1;  // FPGA program load error: 1 error
  int OFFLINE             = 0x01 << 2;  // FPGA offline: 1 offline
  int VER                 = 0x01 << 3;  // FPGA version acquisition failed: 1 failed
  int UUID_FAILED         = 0x01 << 4;  // FPGA UUID: 1 failed
  int NOT_READY           = 0x01 << 5;  // FPGA ready status: 1 not ready
  int TIME_NOT_CAL        = 0x01 << 6;  // FPGA time not calibrated: 1 not calibrated
  int PPS_LOCK            = 0x01 << 7;  // FPGA external PPS input: 1 no external input
  int RTCM_TIMEOUT        = 0x01 << 8;  // FPGA RMC time reception timeout: 1 timeout
  int RTCM_ERROR          = 0x01 << 9;  // FPGA RMC time reception error: 1 error
  int RASTE_F             = 0x01 << 16; // Grating resolution error: 1 error
  int RASTE_S             = 0x01 << 17; // Grating signal error: 1 error
  int RASTE_A             = 0x01 << 18; // Grating A phase error: 1 error
  int RASTE_B             = 0x01 << 19; // Grating B phase error: 1 error
  int RASTE_Z             = 0x01 << 20; // Grating Z phase error: 1 error
  int IMU_C               = 0x01 << 21; // IMU configuration incomplete: 1 incomplete
  int RTC_C               = 0x01 << 22; // RTC configuration incomplete: 1 incomplete
  int RTC_E               = 0x01 << 23; // RTC power loss: 1 power loss
```

## code_i2000 (High-precision IMU)

``` Dart
  int DATA_ERROR            = 0x01 << 0;  // Data error
  int DATA_READ_NOT_UPDATE  = 0x01 << 1;  // Data read not updating
  int SYNC                  = 0x01 << 2;  // Time synchronization
  int DATA_WRITE            = 0x01 << 3;  // Data write not updating
  int UPGRADE               = 0x01 << 4;  // Upgrading
  int OFFLINE               = 0x01 << 5;  // I2000 online
  int ACC                   = 0x01 << 8;  // Accelerometer sensor online status
  int GRY                   = 0x01 << 9;  // Gyroscope sensor online status
  int PRE                   = 0x01 << 10; // Barometer sensor online status
  int MAG                   = 0x01 << 11; // Magnetometer sensor online status
```

## code_imu

``` Dart
  int DATA_ERROR            = 0x01 << 0;  // Data error
  int DATA_READ_NOT_UPDATE  = 0x01 << 1;  // Data read not updating
  int DATA_WRITE_NOT_UPDATE = 0x01 << 2;  // Data write not updating
  int ONLINE                = 0x01 << 3;  // Data online status
```

## code_raster

``` Dart
  int DATA_ERROR            = 0x01 << 0;  // Data error
  int DATA_READ_NOT_UPDATE  = 0x01 << 1;  // Data read not updating
  int DATA_WRITE_NOT_UPDATE = 0x01 << 2;  // Data write not updating
```

## code_time_sync

``` Dart
  int TIME_SYNC_COMPLETE    = 0x01 << 0;  // Time synchronization complete
  int SYSTEM_SYNC_CORRECT   = 0x01 << 1;  // Time synchronization correct
  int TIME_PPS_NOT_UPDATE   = 0x01 << 2;  // PPS not updating
  int TIME_RMC_MISSING      = 0x01 << 3;  // Missing time synchronization information
```

## code_lidar

``` Dart
  bool get disconnect         => bitCheck(0x01);         // 1: LiDAR not connected, 0: LiDAR connected
  bool get noData             => bitCheck(0x01 << 1);    // 1: no data; 0: has data
  bool get dataError          => bitCheck(0x01 << 2);    // 1: data has error; 0: data has no error
  bool get dataWriteError     => bitCheck(0x01 << 3);    // 1: data write error; 0: data write normal
  bool get dataWriteSlow      => bitCheck(0x1 << 4);     // 1: data write slow; 0: data write normal
  bool get timeSyncError      => bitCheck(0x01 << 5);    // 1: time sync abnormal; 0: time sync OK
  bool get isRecording        => bitCheck(0x01 << 6);    // 1: recording data; 0: not recording data
  bool get isSendData         => bitCheck(0x01 << 7);    // TBD
  bool get realTimeData       => bitCheck(0x01 << 8);    // TBD

  bool get interTempAbn       => bitCheck(0x01 << 9);    // Device internal component temperature abnormal
  bool get envTempHigh        => bitCheck(0x01 << 10);   // Device operating environment temperature high
  bool get envTempError       => bitCheck(0x01 << 11);   // Device operating environment temperature exceeds tolerance limit, device has stopped working
  bool get equVoltError       => bitCheck(0x01 << 12);   // Device external voltage abnormal
  bool get equParamError      => bitCheck(0x01 << 13);   // Device parameter abnormal
  bool get scanModAbnRecover  => bitCheck(0x01 << 14);   // Scanning module abnormal, attempting self-recovery
  bool get scanModuleError    => bitCheck(0x01 << 15);   // Scanning module abnormal

  // Upgrade status getter
  bool get isUpgrading        => bitCheck(0x01 << 16);   // 00: normal; 01: upgrading; 02: upgrade complete
  bool get isUpgraded         => bitCheck(0x02 << 16);   // 00: normal; 01: upgrading; 02: upgrade complete

  bool get gpsError           => bitCheck(0x01 << 18);   // LiDAR GPS signal abnormal
  bool get ppsError           => bitCheck(0x01 << 19);   // LiDAR PPS signal abnormal
```

## code_camera

``` Dart
  bool get opticalCamPipeline  => bitCheck(0x01);        // Optical camera on: 1 abnormal, 0 normal
  bool get opticalCamRecord    => bitCheck(0x02);        // Optical camera recording data: 1 abnormal, 0 normal
  bool get opticalCamEncShare  => bitCheck(0x04);        // Optical camera sharing ENC data: 1 abnormal, 0 normal
  bool get opticalCamYuvShare  => bitCheck(0x08);        // Optical camera sharing YUV data: 1 abnormal, 0 normal
  bool get opticalCamSnap      => bitCheck(0x10);        // Optical camera snapshot: 1 abnormal, 0 normal
  bool get opticalCamContinues => bitCheck(0x20);        // Optical camera continuous shooting: 1 abnormal, 0 normal
  // Reserved bit 10
  bool get colorCamPipeline    => bitCheck(0x01 << 16);  // Color camera on: 1 abnormal, 0 normal
  bool get colorCamRecord      => bitCheck(0x01 << 17);  // Color camera recording data: 1 abnormal, 0 normal
  bool get colorCamEncShare    => bitCheck(0x01 << 18);  // Color camera recording data: 1 abnormal, 0 normal
  bool get colorCamYuvShare    => bitCheck(0x01 << 19);  // Color camera sharing YUV data: 1 abnormal, 0 normal
  bool get colorCamSnap        => bitCheck(0x01 << 20);  // Color camera snapshot: 1 abnormal, 0 normal
  bool get colorCamContinues   => bitCheck(0x01 << 21);  // Color camera continuous shooting: 1 abnormal, 0 normal
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

LiDAR code

## devStatus
