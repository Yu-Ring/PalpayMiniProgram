Page({
  data: {},
  onLoad() {},

  // 折线图
  onInitChart(F2, config) { 
    const chart = new F2.Chart(config);
    const data = [    
      { value: 63.4, personality: '你的体重', date: '2023-12-01' },    
      { value: 62.7, personality: '期望体重', date: '2023-12-01' },
      { value: 72.2, personality: '正常体重', date: '2023-12-01' },   
      { value: 58, personality: '你的体重', date: '2023-12-02' },     
      { value: 59.9, personality: '期望体重', date: '2023-12-02' },     
      { value: 67.7, personality: '正常体重', date: '2023-12-02' },    
      { value: 53.3, personality: '你的体重', date: '2023-12-03' },  
      { value: 59.1, personality: '期望体重', date: '2023-12-03' },  
      { value: 69.4, personality: '正常体重', date: '2023-12-03' },   
    ]; 
    chart.source(data, {   
      date: {     
        range: [0, 1],   
        type: 'timeCat',      
        mask: 'MM-DD'   
      },    
      value: {  
        max: 300,    
        tickCount: 4   
      } 
    });    
    chart.area().position('date*value').color('personality').adjust('stack');  
    chart.line().position('date*value').color('personality').adjust('stack');  
    chart.render();   // 注意：需要把chart return 出来   
    return chart; 
  },

  // 条形图
  onInitChart2(F2, config) {
    const chart2 = new F2.Chart(config);
    const data = [
      { value: 63.4, nutrition: '脂肪' },
      { value: 62.7, nutrition: '水' },
      { value: 72.2, nutrition: '蛋白质' },
      { value: 90, nutrition:'维生素'}
    ];
  
    chart2.source(data);
  
    // 设置坐标系为默认的笛卡尔坐标系，用于竖直条形图
    // 无需设置 transposed: true
  
    // 显示图例和坐标轴
    chart2.legend(true);
    chart2.axis('nutrition', {
      label: function label(text, index, total) {
        const textCfg = {};
        if (index === 0) {
          textCfg.textAlign = 'left';
        } else if (index === total - 1) {
          textCfg.textAlign = 'right';
        }
        return textCfg;
      }
    });
    chart2.axis('value', {
      grid: {
        stroke: '#d9d9d9',
        lineWidth: 1,
        lineDash: [2, 2]
      }
    });
  
    // 绘制条形图
    chart2.interval()
      .position('nutrition*value')
      .color('nutrition');
  
    chart2.render();
    return chart2;
  },
  //绘制饼状图 画不出来 没有报错 明天试试
  /* 
  // 扇形图
  onInitChart3(F2, config) {
    const chart2 = new F2.Chart(config);
    const data = [
      { value: 63.4, nutrition: '脂肪' },
      { value: 62.7, nutrition: '水' },
      { value: 72.2, nutrition: '蛋白质' },
    ];
  
    chart2.source(data);
  
    chart2.coord('polar', {
      transposed: true,
      radius: 0.85,
    });
    chart2.legend(false);
    chart2.axis(false);
    chart2.interval()
      .position('1*value')
      .style('nutrition', {
        fill: ['#FF6B6B', '#FFD700', '#87CEEB'],
      })
      .adjust('stack');
    chart2.render();
    return chart2;
  }*/
  //画环形图也不行 操
 /* onInitChart3(F2, config) {
    const chart2 = new F2.Chart(config);
    const data = [
      { value: 63.4, nutrition: '脂肪' },
      { value: 62.7, nutrition: '水' },
      { value: 72.2, nutrition: '蛋白质' },
    ];
  
    chart2.source(data);
  
    // 配置环形图
    chart2.coord('polar', {
      innerRadius: 0.6 // 设置内半径，形成环形
    });
  
    chart2.legend(false);
  
    // 调整饼图的形状
    chart2.interval()
      .position('value')
      .color('nutrition')
      .adjust('stack');
  
    chart2.render();
    return chart2;
  }*/

  // 雷达图
  onInitChart4(F2, config) {
    config.width = 300;  // 调整为所需宽度
    config.height = 180; // 调整为所需高度
    const chart = new F2.Chart(config);
    const data = [
      { item: '脂肪', score:50, group: 'A组' },
      { item: '水', score: 62.7, group: 'A组' },
      { item: '蛋白质', score: 150, group: 'A组' },
      { item: '维生素', score: 90, group: 'A组' },
      { item: '脂肪', score: 30, group: 'B组' },
      { item: '水', score: 80, group: 'B组' },
      { item: '蛋白质', score: 100, group: 'B组' },
      { item: '维生素', score: 190, group: 'B组' }
    ];
  
    chart.source(data, {
      score: {
        min: 0,
        max: 200
      }
    });
  
    chart.coord('polar');
    chart.tooltip({
      offsetY: -20, // 将 tooltip 向上偏移 20 像素
      showTitle: false, // 不显示默认标题
    });
  
    chart.axis('item', {
      line: null, // 不显示轴线
      grid: {
        lineDash: null,
        type: 'polygon' // 使用多边形网格线
      }
    });
  
    chart.axis('score', {
      line: null,
      grid: {
        lineDash: null,
        type: 'circle' // 使用圆形网格线
      }
    });
  
    chart.line().position('item*score').color('group');
    chart.point().position('item*score').color('group').style({
      stroke: '#fff',
      lineWidth: 1
    });
  
    chart.area().position('item*score').color('group');
  
    chart.render();
    return chart;
  }
  
   
  
});
