<template>
  <div>
    <div class="chart"><canvas id="container" /></div>
    <div class="van-hairline--top" />
    <div class="chart"><canvas id="container1" /></div>
  </div>
</template>

<script>
const F2 = require('@antv/f2/lib/index'); // 引入 F2
require('@antv/f2/lib/interaction/pie-select'); // 引入饼图选中交互
// import _ from 'lodash';
export default {
  data() {
    return {
      // chart: null
    };
  },
  mounted() {
    this.initChart();
    this.initChart1();
  },
  methods: {
    initChart() {
      const data = [{
        name: '股票类',
        percent: 83.59,
        a: '1'
      }, {
        name: '债券类',
        percent: 2.17,
        a: '1'
      }, {
        name: '现金类',
        percent: 14.24,
        a: '1'
      }];

      const map = {};
      data.forEach(function(obj) {
        map[obj.name] = obj.percent + '%';
      });

      const chart = new F2.Chart({
        id: 'container',
        pixelRatio: window.devicePixelRatio,
        padding: [20, 'auto']
      });
      chart.source(data, {
        percent: {
          formatter: function formatter(val) {
            return val + '%';
          }
        }
      });
      chart.tooltip(false);
      chart.legend({
        position: 'right',
        itemFormatter: function itemFormatter(val) {
          return val + '    ' + map[val];
        }
      });
      chart.coord('polar', {
        transposed: true,
        innerRadius: 0.7,
        radius: 0.85
      });
      chart.axis(false);
      chart.interval()
        .position('a*percent')
        .color('name', ['#FE5D4D', '#3BA4FF', '#737DDE'])
        .adjust('stack');

      chart.guide().html({
        position: ['50%', '45%'],
        html: `<div style="width: 250px;height: 40px;text-align: center;">
      <div style="font-size: 16px">总资产</div>
      <div style="font-size: 24px">133.08 亿</div>
    </div>`
      });
      chart.render();
    },
    initChart1() {
      const data = [
        { name: '芳华', percent: 0.4, type: '1' },
        { name: '妖猫传', percent: 0.2, type: '1' },
        { name: '机器之血', percent: 0.18, type: '1' },
        { name: '心理罪', percent: 0.15, type: '1' },
        { name: '寻梦环游记', percent: 0.05, type: '1' },
        { name: '其他', percent: 0.12, type: '1' },
        { name: '芳华', percent: 0.4, type: '2' },
        { name: '妖猫传', percent: 0.2, type: '2' },
        { name: '机器之血', percent: 0.18, type: '2' },
        { name: '心理罪', percent: 0.15, type: '2' },
        { name: '寻梦环游记', percent: 0.05, type: '2' },
        { name: '其他', percent: 0.12, type: '2' }
      ];

      const chart = new F2.Chart({
        id: 'container1',
        pixelRatio: window.devicePixelRatio
      });
      chart.source(data);
      chart.legend({
        position: 'right'
      });
      chart.tooltip(false);
      chart.coord('polar', {
        transposed: true,
        radius: 0.8,
        inner: 0.5
      });
      chart.axis(false);
      chart.interval()
        .position('type*percent')
        .color('name', [
          '#1890FF',
          '#13C2C2',
          '#2FC25B',
          '#FACC14',
          '#F04864',
          '#8543E0'
        ])
        .adjust('stack');

      chart.interaction('pie-select', {
        startEvent: 'tap',
        animate: {
          duration: 300,
          easing: 'backOut'
        },
        cancelable: true
      });

      chart.render();
    }
  }
};
</script>
<style lang="less" scoped>
.chart {
  margin: 30px 0;
  width: 100%;
  height: 300px;
  canvas {
    width: 100%;
    height: 100%;
  }
}
</style>
