Page({
  data: {
    messages: [], // 聊天消息列表
    inputValue: '', // 输入框的内容
    yourAvatar: '/images/Mimikyu.jpg', // 您的头像路径
    otherAvatar: '/images/Mimikyu2.jpg' // 对方的头像路径
  },

  // 页面加载时的逻辑
  onLoad: function (options) {
    // 示例：加载聊天数据 向后端获取记录
    this.setData({
      messages: [
        { id: 1, role: 'assistant', content: '你好我是你的ai健康小助手'},
        
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
      id: this.data.messages.length+1,
      role: 'user',
      content: this.data.inputValue,
    };
    // 更新消息列表
    this.setData({
      messages: [...this.data.messages, newMessage],
      inputValue: '' // 清空输入框
    });

    my.request({
      url: 'http://localhost:8081/api/aiChat', // 本地用
      // url: 'http://124.221.161.48:8081/api/aiChat', // 部署用
      method: 'POST',
      data: this.data.messages,
      success: (res) => {
        console.log('消息发送成功:', res);
        this.setData({
          messages: res.data.data,
        });
        console.log('给我更新！！！:', messages);

      },
      fail: function (err) {
        console.error('消息发送失败:', err);
        // 错误处理，如提示用户
      }
    });
  },

  // 
  updateAIMessage: function (updatedMessage) {
    let messages = this.data.messages;
    let messageIndex = messages.findIndex(msg => msg.id === updatedMessage.id);
    if (messageIndex !== -1) {
      messages[messageIndex] = updatedMessage;
      this.setData({ messages });
    }
  }

  // 其他必要的函数...
});
