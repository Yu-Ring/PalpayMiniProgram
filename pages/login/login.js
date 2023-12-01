Page({
  data: {
    account: '', // 用户账号
    password: '' // 用户密码
  },
  onLoad() {},

  // 更新账号输入
  onInputAccount(e) {
    this.setData({ account: e.detail.value });
  },

  // 更新密码输入
  onInputPassword(e) {
    this.setData({ password: e.detail.value });
  },

  // 处理登录
  login() {
    // 验证输入
    if (!this.data.account || !this.data.password) {
      my.showToast({
        content: '请输入账号和密码',
        type: 'fail'
      });
      return;
    }

    // 发送登录请求
    my.request({
      url: 'https://localhost:8080/api/login', // 替换为您的登录接口 URL
      method: 'POST',
      data: {
        account: this.data.account,
        password: this.data.password
      },
      success: (res) => {
        if (res.data.success) {
          // 登录成功，跳转到主页
          my.switchTab({ url: '../index/index' });
        } else {
          // 登录失败，提示错误
          my.showToast({
            content: res.data.message || '登录失败',
            type: 'fail'
          });
        }
      },
      fail: (err) => {
        // 请求失败处理
        my.showToast({
          content: '网络错误',
          type: 'fail'
        });
      }
    });
  },

  // 跳转到注册页面
  register() {
    my.navigateTo({url:'../register_collect_sympotom/register_collect_sympotom'});
  }
});
