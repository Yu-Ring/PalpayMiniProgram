Page({
  data: {
    messages: [], // 聊天消息列表
    inputValue: '', // 输入框的内容
    yourAvatar: '/images/Mimikyu.jpg', // 您的头像路径
    otherAvatar: '/images/Mimikyu2.jpg' // 对方的头像路径
  },

  // 页面加载时的逻辑
  onLoad: function (options) {
    // 示例：加载聊天数据
    // 实际应用中，您可能需要从服务器获取数据
    this.setData({
      messages: [
        { id: 1, sender: 'self', content: '你好！', time: '08:45', avatar: '/images/Mimikyu.jpg' },
        { id: 2, sender: 'zhangsan', content: '嗨，你好！', time: '08:46', avatar: '/images/Mimikyu2.jpg' },
        // ...更多消息
      ]
    });
  },

  // 监听输入框内容变化
  onInput: function (e) {
    this.setData({ inputValue: e.detail.value });
  },

  // 发送消息
  sendMessage: function () {
    if (!this.data.inputValue) {
      // 如果输入为空，不执行发送操作
      return;
    }

    // 创建新消息对象
    const newMessage = {
      id: new Date().getTime(), // 使用时间戳作为唯一ID
      sender: 'self',
      content: this.data.inputValue,
      time: new Date().toTimeString().substr(0, 5) // 获取当前时间
    };

    // 更新消息列表
    this.setData({
      messages: [...this.data.messages, newMessage],
      inputValue: '' // 清空输入框
    });

    // TODO: 将消息发送到服务器
  },

  // 其他必要的函数...
});
