Page({
  data: {
    // 示例数据 -- 具体请根据 数据字典填写
    articles: [
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
      // ... 更多文章
    ]
  },
  onLoad() {
    // 从后端获取文章数据
    // my.request({
    //   url: '后端接口URL',
    //   method: 'GET',
    //   dataType: 'json',
    //   success: (res) => {
    //     this.setData({ articles: res.data });
    //   },
    //   fail: (err) => {
    //     console.error('请求失败:', err);
    //   }
    // });
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
  navigateToMessageList: function(e){
    my.navigateTo({ 
      url: '/pages/messageList/messageList'
    });
  },
});
