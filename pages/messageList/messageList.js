Page({
  data: {
    messages: [
      {
        id: 1,
        avatar: '/images/Mimikyu.jpg',
        sender: '用户1',
        time: '昨天',
        preview: '这是消息内容的预览1...',
      },
      {
        id: 2,
        avatar: '/images/Mimikyu2.jpg',
        sender: '用户2',
        time: '今天',
        preview: '这是消息内容的预览2...',
      },
      // 更多消息...
    ]
  },

  onLoad: function () {
    // 页面加载时的逻辑，比如从后端获取消息列表
  },

  onMessageTap: function (event) {
    // 处理消息点击事件，比如导航到详细页面
    const messageId = event.currentTarget.dataset.id;
    console.log('Clicked message ID:', messageId);
    my.navigateTo({ url: '/pages/communication/communication?id=' + messageId });
  },

});
