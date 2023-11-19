Page({
  data: {
    swiperList:["/images/cat.jpg","/images/dog.jpg","/images/rabbit.jpg","/images/sheep.jpg"]
  },
  onLoad() {},
  datePicker() {
    my.datePicker({
      currentDate: '2016-10-10',
      startDate: '2016-10-9',
      endDate: '2017-10-9',
      success: (res) => {
        my.alert({
          content: '您选择的日期为: ' + res.date
        });
      },
    });
  },
});
