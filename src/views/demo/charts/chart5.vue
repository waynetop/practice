<template>
  <div>
    <div class="chart"><canvas id="container" /></div>
    <div class="van-hairline--top" />
    <div class="chart"><canvas id="container1" /></div>
  </div>
</template>

<script>
import F2 from '@antv/f2';
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
        year: '1951 年',
        sales: 38
      }, {
        year: '1952 年',
        sales: 52
      }, {
        year: '1956 年',
        sales: 61
      }, {
        year: '1957 年',
        sales: 145
      }, {
        year: '1958 年',
        sales: 48
      }, {
        year: '1959 年',
        sales: 38
      }, {
        year: '1960 年',
        sales: 38
      }, {
        year: '1962 年',
        sales: 38
      }];
      const chart = new F2.Chart({
        id: 'container',
        pixelRatio: window.devicePixelRatio
      });

      chart.source(data, {
        sales: {
          tickCount: 5
        }
      });
      chart.tooltip({
        showItemMarker: false,
        onShow: function onShow(ev) {
          const items = ev.items;
          items[0].name = null;
          items[0].name = items[0].title;
          items[0].value = '¥ ' + items[0].value;
        }
      });
      chart.interval().position('year*sales');
      chart.render();
    },
    initChart1() {
      const data = [
        { genre: 'Sports', sold: 275 },
        { genre: 'Strategy', sold: 115 },
        { genre: 'Action', sold: 120 },
        { genre: 'Shooter', sold: 350 },
        { genre: 'Other', sold: 150 }
      ];

      const chart = new F2.Chart({
        id: 'container1',
        pixelRatio: window.devicePixelRatio,
        aria: true, // 开启无障碍描述生成
        title: '销量' // 图表标题，可被无障碍识别
      });

      chart.source(data);

      chart.interval()
        .position('genre*sold')
        .color('genre');

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
