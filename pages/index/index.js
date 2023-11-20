Page({
  data: {
    //定义轮播图数据列表
    swiperList: [
      "https://pic-bed-e5v.pages.dev/img/%E7%A5%9E%E5%B7%9E%E6%8A%98%E5%89%9107.JPG",
      "https://pic-bed-e5v.pages.dev/img/%E7%A5%9E%E5%B7%9E%E6%8A%98%E5%89%9104.JPG",
      "/images/Mimikyu.jpg",
      "/images/Mimikyu2.jpg"
    ], 
    //九宫格数据列表
    featureList: [
      // 功能栏数据
      { id: '1', icon: '/images/Mimikyu.jpg', text: 'AI咨询' },
      { id: '2', icon: '/images/Mimikyu.jpg', text: '营养师咨询' },
      { id: '3', icon: '/images/Mimikyu.jpg', text: '交流广场' },
      { id: '4', icon: '/images/Mimikyu.jpg', text: '周期方案' },
      { id: '5', icon: '/images/Mimikyu.jpg', text: '消息栏' },
      // ...
    ]
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
