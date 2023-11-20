Page({
  data: {
    article: {}, // 文章详情
    comments: [], // 评论数据
    newComment: '', // 新评论输入
  },
  onLoad(options) {
    const articleId = options.articleId;
    // 这里应该根据传递的文章ID加载文章article数据
    // 示例中直接使用静态数据
    this.setData({
      article: {
        id: articleId,
        title: '文章标题',
        author: '作者',
        time: '2021-01-01',
        imageUrl: '/images/Mimikyu.jpg',
        content: '这里是文章内容...，后面还需要进行修改。你说的对，但是《AI营养师》是由上理某不知名小组自主研发的一款不知道能不能做完的支付宝小程序。故事发生在一个被废案的互连网+项目中，在这里，被忽悠进来的人将被授予「大怨种」，导引形而上的力量。你将扮演一位名为「后端程序员」的仌角色，在项目中邂逅没人做的前端，从一次次翻阅支付宝小程序文档的旅程中，找回做微信小程序的痛苦经历——同时，逐步发掘「全栈工程师」的真相。'
      }
    });

    // 根据 articleId 从后端加载文章详情
    // my.request({
    //   url: `后端接口URL/${articleId}`,
    //   method: 'GET',
    //   dataType: 'json',
    //   success: (res) => {
    //     this.setData({ article: res.data });
    //   },
    //   fail: (err) => {
    //     console.error('请求失败:', err);
    //   }
    // });

    // 示例：加载评论列表（实际情况中应从后端获取comments列表）
    this.setData({
      comments: [
        // 示例评论数据
        { 
          id: '1', 
          user: '张三', 
          content: '艹，绷不住了' 
        },
        // 更多评论...
      ]
    });
  },

  // comment 读取输入的评论 当输入框内容变化时，更新 newComment 数据
  onCommentInput(event) {
    console.log("当前输入框内容：", event.detail.value); // 调试信息
    this.setData({ newComment: event.detail.value });
  },

  // 将读取的输入评论添加到评论列表以及传递到后端
  submitComment() {
    console.log("输入的评论内容：", this.data.newComment); // 调试信息
    if (this.data.newComment.trim() === '') {
      my.showToast({
        content: '评论内容不能为空',
        type: 'fail'
      });
      return;
    }
    // 示例：添加新评论到列表（实际情况中应发送到后端）
    const newComment = {
      user: '当前用户', // 实际应用中应替换为当前用户名称
      content: this.data.newComment
    };
    this.setData({
      comments: [...this.data.comments, newComment],
      newComment: '' // 清空输入框
    });
    // 实际应用中还需将评论发送到后端保存
  }


});
