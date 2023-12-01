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
      { id: '1', icon: '/images/ai.png', text: 'AI咨询' },
      { id: '2', icon: '/images/dietitian.png', text: '营养师咨询' },
      { id: '3', icon: '/images/square.png', text: '交流广场' },
      { id: '4', icon: '/images/scheme.png', text: '健康方案' },
      { id: '5', icon: '/images/clock.png', text: '周期打卡' },
      // ...
    ],
    // 食谱数据
    recipeList: [
      { id: 1, imageUrl: '/images/dog.jpg', name: '生狗肉' },
      { id: 2, imageUrl: '/images/cat.jpg', name: '生猫肉' },
      { id: 3, imageUrl: '/images/rabbit.jpg', name: '生兔肉' },
      { id: 4, imageUrl: '/images/sheep.jpg', name: '生羊肉' },
      { id: 5, imageUrl: '/images/cat.jpg', name: '生猫肉' },
      { id: 6, imageUrl: '/images/cat.jpg', name: '生猫肉' },
      { id: 7, imageUrl: '/images/cat.jpg', name: '生猫肉' },
    ],
    briefArticles: [
      {
        id: '1',
        title: '文章标题1',
        summary: '这里是文章摘要1...',
        imageUrl: 'https://pic-bed-e5v.pages.dev/img/%E7%A5%9E%E5%B7%9E%E6%8A%98%E5%89%9104.JPG',
        author: '作者1',
        time: '2021-01-01'
      },
      {
        id: '2',
        title: '文章标题2',
        summary: '这里是文章摘要2...',
        imageUrl: 'https://pic-bed-e5v.pages.dev/img/%E7%A5%9E%E5%B7%9E%E6%8A%98%E5%89%9107.JPG',
        author: '作者2',
        time: '2021-02-01'
      },
      {
        id: '3',
        title: '文章标题3',
        summary: '这里是文章摘要3...',
        imageUrl: '/images/Mimikyu.jpg',
        author: '作者1',
        time: '2021-01-01'
      },
      // ...更多文章
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
  onRecipeTap(e) {
    // const recipeId = e.currentTarget.dataset.id;
    // console.log('食谱被点击，ID:', recipeId);
    my.navigateTo({ url: `/pages/recipe_detail/recipe_detail` });
  },
  goToDetailPage(event) {
    // 获取被点击的文章ID
    const articleId = event.currentTarget.dataset.id;
    // 这里实现跳转逻辑
    // 例如，跳转到文章详情页，并传递文章ID
    my.navigateTo({
      url: `/pages/forum_detail/forum_detail?articleId=${articleId}`
    });
  },
   onInitChart(F2, config) { 
    const chart = new F2.Chart(config);
    const data = [    
      { value: 63.4, personality: '你的体重', date: '2023-12-01' },    
      { value: 62.7, personality: '期望体重', date: '2023-12-01' },
      { value: 72.2, personality: '正常体重', date: '2023-12-01' },   
      { value: 58, personality: '你的体重', date: '2023-12-02' },     
      { value: 59.9, personality: '期望体重', date: '2023-12-02' },     
      { value: 67.7, personality: '正常体重', date: '2023-12-02' },    
      { value: 53.3, personality: '你的体重', date: '2023-12-03' },  
      { value: 59.1, personality: '期望体重', date: '2023-12-03' },  
      { value: 69.4, personality: '正常体重', date: '2023-12-03' },   
    ]; 
    chart.source(data, {   
      date: {     
        range: [0, 1],   
        type: 'timeCat',      
        mask: 'MM-DD'   
      },    
      value: {  
        max: 300,    
        tickCount: 4   
      } 
    });    
    chart.area().position('date*value').color('personality').adjust('stack');  
    chart.line().position('date*value').color('personality').adjust('stack');  
    chart.render();   // 注意：需要把chart return 出来   
    return chart; 
  },
  goToDetailPage(){
    my.navigateTo({url:'/pages/chart_detail/chart_detail'});
  }
});
