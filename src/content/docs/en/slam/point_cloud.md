# Real-time Point Cloud Data

## Data transmission
SLAM devices transmit point cloud data over TCP. Currently, there are two versions available.

The real-time point cloud data version depends on the firmware version of the device. If you prefer not to check the
firmware-to-data-version mapping, you can directly attempt connecting to Version 2 on port 19805. A successful
connection will confirm that the device is using Version 2.

The timestamp unit defined in all structures is seconds of the week (i.e., the number of seconds elapsed in the current week)

### Version 2

Point cloud data and pose data are combined for transmission, and colored point clouds are supported.

**Ports**

- TCP combined data transmission
  19805

#### Data Format

The combined data structure consists of TPackageInfo+TFrame, with the byte array `[35, 70, 69, 73, 77, 65, 35]`(#FEIMA#)
as the end character for data separation.

```cpp
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

**example:**
Processing ComposeData using PCL

```cpp
bool ParserComposeData(unsigned char* data, int dataLenth, TPose& pose, std::shared_ptr<pcl::PointCloud<pcl::PointXYZRGB> > pCloud)
{
    if (dataLenth < sizeof(TPackageInfo) + sizeof(TDPose) + sizeof(TPointCloudHeader))
        return false;

    // parse pose data
    TDPose dpose;
    memcpy(&dpose, data + sizeof(TPackageInfo), sizeof(TDPose));
    pose.id = dpose.id;
    pose.timestamp = dpose.timestamp;
    pose.ptX = dpose.posX;
    pose.ptY = dpose.posY;
    pose.ptZ = dpose.posZ;
    pose.qW = dpose.qW;
    pose.qX = dpose.qX;
    pose.qY = dpose.qY;
    pose.qZ = dpose.qZ;
    
    // parse raw point cloud data
    TPointCloudHeader header;
    memcpy(&header, data + sizeof(TPackageInfo) + sizeof(TDPose), sizeof(TPointCloudHeader));
    if ((header.payloadLen + sizeof(TPackageInfo) + sizeof(TDPose) + sizeof(TPointCloudHeader)) != dataLenth)
        return false;

    int size = header.payloadLen / sizeof(TPointRGBI);
    pCloud->reserve(size);
    std::vector<TPointRGBI> vecSrcPts;
    vecSrcPts.resize(size);
    memcpy(vecSrcPts.data(), data + sizeof(TPackageInfo) + sizeof(TDPose) + sizeof(TPointCloudHeader), header.payloadLen);
    for (int i = 0; i < size; i++)
    {
        pcl::PointXYZRGB pt;
        pt.x = vecSrcPts[i].x;
        pt.y = vecSrcPts[i].y;
        pt.z = vecSrcPts[i].z;
        pt.r = vecSrcPts[i].rgb[0];
        pt.g = vecSrcPts[i].rgb[1];
        pt.b = vecSrcPts[i].rgb[2];
        pt.a = vecSrcPts[i].intensity;
        pCloud->push_back(pt);
    }

    return true;
}

bool PushComposeData(uint8_t* pData, int iLen)
{
    TPose pose;
    std::shared_ptr<pcl::PointCloud<pcl::PointXYZRGB> > pCloud(new pcl::PointCloud<pcl::PointXYZRGB>);
    bool ret = ParserComposeData(pData, iLen, pose, pCloud);
    if (ret)
    {
        // process pose and pCloud
    }
    else
    {
        PrintStrings("Decode compose data fail, please check the soruce data");
    }
    return ret;
}
```

### Version 1

Point cloud data and pose data are transmitted separately, colored point clouds are not supported. Version 2 will
gradually replace Version 1.

**Ports**

- TCP point cloud transmission
  19800
- TCP pose transmission
  19801

#### Point Cloud Data Format

Single frame point cloud data is sent with the byte array `[35, 70, 69, 73, 77, 65, 35]`(#FEIMA#) as the end character
for data separation.

```cpp
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

**example:**

Process point cloud data

```cpp
bool ParsePointCloudData(unsigned char* data, int dataLenth, std::shared_ptr<pcl::PointCloud<pcl::PointXYZRGB> > pCloud)
{
    if ((dataLenth - sizeof(TPointCloudHeader)) % sizeof(TPoint) == 0)	//Make sure it's a complete package
    {
        int pointsSize = (dataLenth - sizeof(TPointCloudHeader)) / sizeof(TPoint);
        unsigned char* pData = data + sizeof(TPointCloudHeader);
        pCloud->reserve(pointsSize);
        for (int i = 0; i < pointsSize; i++)
        {
            TPoint point;
            memcpy(&point, pData, sizeof(TPoint));
            pcl::PointXYZRGB pt(std::move(point.x), std::move(point.y), std::move(point.z));
            CalculatePointColor(pt);
            pCloud->push_back(pt);
            pData += sizeof(TPoint);
        }
        if (pCloud->size() > 0)
            return true;
    }
    return false;
}

bool PushCloudData(uint8_t* pData, int iLen)
{
    std::shared_ptr<pcl::PointCloud<pcl::PointXYZRGB> > pCloud(new pcl::PointCloud<pcl::PointXYZRGB>);
    bool ret = ParsePointCloudData(pData, iLen, pCloud);
    if (ret)
    {
        RecvCloudDataCb(pCloud);
    }
    else
    {
        PrintStrings("Decode cloud data fail, please check the soruce data");
    }
    return ret;
}
```

#### Pose Data Format

Pose data is sent with the fixed string #FEIMA# as the end character for data separation.

```cpp
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

**example:**

Process pose data

```cpp
bool ParsePosData(unsigned char* data, int dataLenth, std::vector<TPose>& poseList)
{
    if (dataLenth % sizeof(TPose) == 0)
    {
        unsigned char* pData = data;
        int posSize = dataLenth / sizeof(TPose);
        for (int i = 0; i < posSize; i++)
        {
            TPose pos;
            memcpy(&pos, pData, sizeof(TPose));
            poseList.push_back(pos);
            pData += sizeof(TPose);
        }
        if (poseList.size() > 0)
            return true;
    }
    return false;
}

bool PushPoseData(uint8_t* pData, int iLen)
{    std::vector<TPose> poseList;
    bool ret = ParsePosData(pData, iLen, poseList);
    if (ret)
    {
        RecvPoseDataCb(poseList[poseList.size() - 1]);
    }
    else
    {
        PrintStrings("Decode pose data fail, please check the soruce data");
    }
    return ret;
}
```
