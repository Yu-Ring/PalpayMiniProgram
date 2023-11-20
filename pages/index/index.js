Page({
  data: {
    //定义轮播图数据列表
    swiperList: ["/images/琉璃龙.jpg","/images/铁道-列车.png","/images/Mimikyu.jpg","/images/Mimikyu2.jpg"], 
    //九宫格数据列表
    gridList: [{id: 1, name :"图1", icon:"/images/彩色少女0.jpg"},{id: 2, name :"图2", icon:"/images/彩色少女1.jpg"},{id: 3, name :"图3", icon:"/images/彩色短发少女.jpg"},{id: 4, name :"图4", icon:"/images/代办问诊.png"},{id: 5, name :"图5", icon:"/images/代办问诊 (1).png"},{id: 6, name :"图6", icon:"/images/代办买药.png"},{id: 7, name :"图7", icon:"/images/代办买药 (1).png"},{id: 8, name :"图8", icon:"/images/全程陪诊.png"},{id: 9, name :"图9", icon:"/images/全程陪诊 (1).png"}] //同理也可通过get获取data
  },
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
  navigateToMessageList: function(e){
    my.navigateTo({ 
      url: '/pages/messageList/messageList'
    });
  },
});
