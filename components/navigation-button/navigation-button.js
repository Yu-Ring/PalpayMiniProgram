Component({
  mixins: [],
  data: {},
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    // 点击按钮时触发跳转事件
    handleTap() {
      // 确保传入了跳转路径
      if (this.props.navigateTo) {
        my.navigateTo({
          url: this.props.navigateTo
        });
      }
    }
  },
});
