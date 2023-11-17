const app = getApp()
Page({

  data: {
    titleValue:'', // 文章标题
    inputValue:'', // 文章内容
    typeNameList: ['类型1', '类型2', '类型3'], // 动态类型选项
    chooseTypeName: '', // 已选择的动态类型
    cloudImgList:[], // 上传的图片列表
    videoUrl: '', // 视频URL
    addresssInfo:{}
  },

  // 生命周期函数
  onLoad: function (options) {

  },

  // 获取标题输入
  getTitleValue(event){
    console.log(event.detail.value)
    this.setData({
        title:event.detail.value
    })
  },

  // 获取文章内容输入
  getValue(e){
    console.log(e.detail.value)
    this.setData({
      inputValue: e.detail.value
    })
  },
 
  // 选择类型
  bindPickerChange(e) {
    console.log(e)
    this.setData({
      chooseTypeName: this.data.typeNameList[e.detail.value],
    })
  },

  // 选择图片
  chooseImage(){
    console.log('111')
    var that = this;
    my.chooseImage({
      count: 9 - that.data.cloudImgList.length,
      sizeType: ['original','compressed'],
      sourceType: ['album','camera'],
      success(res){
        console.log(res)
        console.log(res.tempFilePaths) //图片的 本地临时文件 路径列表。Array<String>
        //上传图片
        that.data.tempImgList = res.tempFilePaths
        that.uploadImages()
      }
    })
  },

  // 上传图片
  uploadImages(){
    var that = this;
    for(var i = 0 ; i < this.data.tempImgList.length; i++){
      my.uploadFile({
        url: 'localhost:8080/....',
        filePath: this.data.tempImgList[i],
        fileName: 'file', // 根据服务器接口要求设置
        success: uploadRes => {
          // 解析上传后的结果，获取服务器返回的图片地址
          const uploadedImageUrl = JSON.parse(uploadRes.data).url;

          // 更新页面数据，显示新上传的图片
          this.setData({
            cloudImgList: [...this.data.cloudImgList, uploadedImageUrl]
          });
        },
        fail: uploadErr => {
          console.error('上传失败:', uploadErr);
        }
      })
    }
  },

  // 删除图片
  deleteImg(e){
    console.log(e.currentTarget.dataset.index)
    this.data.cloudImgList.splice(e.currentTarget.dataset.index,1)
    this.setData({
      cloudImgList: this.data.cloudImgList
    })
  },

  // 选择视频
  chooseVideo(e){
    var that = this;
    my.chooseVideo({
      sourceType: ['album','camera'],
      maxDuration: 60,// 最大拍摄时长
      compressed: false,// 视频压缩
      camera: 'back',
      success(res) {
        console.log(res)
        console.log(res.tempFilePath.match(/\.(\w+)$/)[1])
        my.showLoading({
          title: '上传中',
        })
        my.uploadFile({
          url: 'localhost:8080/....',
          filePath: res.tempFilePath,
          fileName: 'file', // 根据服务器接口要求设置
          success: uploadRes => {
            // 解析上传后的结果，获取服务器返回的视频地址
            const uploadedVideoUrl = JSON.parse(uploadRes.data).url;
  
            // 更新页面数据，显示新上传的视频
            this.setData({
              videoUrl: uploadedVideoUrl
            });
          },
          fail: uploadErr => {
            console.error('上传失败:', uploadErr);
          }
        })
      }
    })
  },

  // 选择地址
  chooseAddress() {
    var that = this;
    my.chooseLocation({
      success: (res) => {
        // res 包含选择的位置的详细信息
        console.log('选择的位置信息：', res);
        that.setData({
          addressInfo: {
            name: res.name, // 地点名称
            address: res.address, // 地址的详细描述
            latitude: res.latitude, // 纬度
            longitude: res.longitude // 经度
          }
        });
      },
      fail: (err) => {
        console.error('选择位置失败:', err);
        // 可以根据需要处理错误情况
      }
    });
  },
  

  // 提交文章数据
  submitData() {
    // 验证数据的完整性
    if (!this.data.titleValue || !this.data.inputValue || !this.data.chooseTypeName) {
      my.showToast({
        content: '请填写完整的文章信息',
        type: 'fail'
      });
      return;
    }
  
    // 如果有视频，则不检查图片列表
    if (!this.data.videoUrl && this.data.cloudImgList.length === 0) {
      my.showToast({
        content: '请上传至少一张图片或一个视频',
        type: 'fail'
      });
      return;
    }
  
    // 构建要提交的数据对象
    const postData = {
      title: this.data.titleValue,
      content: this.data.inputValue,
      type: this.data.chooseTypeName,
      images: this.data.cloudImgList,
      video: this.data.videoUrl,
      // 其他需要提交的数据
    };
  
    // 显示加载提示
    my.showLoading({
      title: '发布中...'
    });
  
    // 发送数据到服务器
    my.request({
      url: '您的文章发布接口URL', // 替换为您的后端接口URL
      method: 'POST',
      data: postData,
      success: (res) => {
        my.hideLoading();
        if (res.statusCode === 200) {
          // 发布成功处理
          my.showToast({
            content: '发布成功'
          });
          // 可以选择重置表单或跳转到其他页面
        } else {
          // 处理错误情况
          my.showToast({
            content: '发布失败，请稍后重试',
            type: 'fail'
          });
        }
      },
      fail: (err) => {
        my.hideLoading();
        console.error('发布失败:', err);
        my.showToast({
          content: '发布失败，请检查网络',
          type: 'fail'
        });
      }
    });
  }

  
  

})