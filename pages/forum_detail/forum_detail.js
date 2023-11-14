Page({
  data: {
    article: {}, // 文章详情
    comments: [], // 评论数据
    newComment: '' // 新评论输入
  },
  onLoad(options) {
    const articleId = options.articleId;
    // 这里应该根据传递的文章ID加载文章数据
    // 示例中直接使用静态数据
    this.setData({
      article: {
        id: articleId,
        title: '文章标题',
        author: '作者',
        time: '2021-01-01',
        imageUrl: '/images/Mimikyu.jpg',
        content: '这里是文章内容...，后面还需要进行修改。首先得先确认数据库模型，然后根据数据库模型编写api接口文档，后端根据api接口文档进行开发并部署，前端直接调用已完成的api接口进行调试。目前模型都不知道长啥样，也没数据流图，模型需要什么数据输入，模型有什么数据输出都不清楚，数据变量名没有统一，就必须先交付一个能看的前端。后端除了基本的增删改查还要做令牌登录，aop事务管理。websocket只是目前还没成型，无法实现流畅的实时交流，ai对话功能完成无望。项目可实现可能性太低，没有完整的可实现流程，立项光顾着找人了。后端得抛掉工作去干前端，然后回来干全栈，付出同样得寄希望于未可知的模型，关键是组长天天都在摸鱼啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊.'
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

    // 示例：加载评论列表（实际情况中应从后端获取）
    this.setData({
      comments: [
        // 示例评论数据
        { 
          id: '1', 
          user: '张三', 
          content: '怎么这里也要做评论啊' 
        },
        // 更多评论...
      ]
    });
  },
  onCommentInput(event) {
    this.setData({ newComment: event.detail.value });
  },
  submitComment() {
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
