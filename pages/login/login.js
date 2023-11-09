Page({
  data: {},
  onLoad() {},
  longin(){
    my.switchTab({ url: '../index/index' });
  },
  register(){
    my.navigateTo({url:'../register_collect_sympotom/register_collect_sympotom'});
  }
});
