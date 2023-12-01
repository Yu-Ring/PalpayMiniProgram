App({
  globalData: {
    userId: null, // 初始时用户ID为空
    token: null, // 存放访问文心一言接口api的
  },
  todos: [
    { text: '失眠', completed: true },
    { text: '不快乐', completed: true },
    { text: '眼睛疼', completed: false },
    { text:'喉咙痛',completed:true}
  ],
  userInfo: null,

  getUserInfo() {
    return new Promise((resolve, reject) => {
      if (this.userInfo) resolve(this.userInfo);

      my.getAuthCode({
        scopes: ['auth_user'],
        success: authcode => {
          console.info(authcode);

          my.getAuthUserInfo({
            success: res => {
              this.userInfo = res;
              resolve(this.userInfo);
            },
            fail: () => {
              reject({});
            },
          });
        },
        fail: () => {
          reject({});
        },
      });
    });
  },
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch');
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
});
