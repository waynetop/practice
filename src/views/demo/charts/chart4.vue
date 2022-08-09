<template>
  <div>
    <div class="chart"><canvas id="container" /></div>
    <div class="van-hairline--top" />
    <div class="chart"><canvas id="container1" /></div>
    <div class="van-hairline--top" />
    <div class="chart"><canvas id="container2" /></div>
  </div>
</template>

<script>
import F2 from '@antv/f2';
import PieLabel from '@antv/f2/lib/plugin/pie-label';
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
    this.initChart2();
  },
  methods: {
    initChart() {
      const map = {
        芳华: '40%',
        妖猫传: '20%',
        机器之血: '18%',
        心理罪: '15%',
        寻梦环游记: '5%',
        其他: '2%'
      };
      const data = [{
        name: '芳华',
        percent: 0.4,
        a: '1'
      }, {
        name: '妖猫传',
        percent: 0.2,
        a: '1'
      }, {
        name: '机器之血',
        percent: 0.18,
        a: '1'
      }, {
        name: '心理罪',
        percent: 0.15,
        a: '1'
      }, {
        name: '寻梦环游记',
        percent: 0.05,
        a: '1'
      }, {
        name: '其他',
        percent: 0.02,
        a: '1'
      }];
      const chart = new F2.Chart({
        id: 'container',
        pixelRatio: window.devicePixelRatio
      });
      chart.source(data, {
        percent: {
          formatter: function formatter(val) {
            return val * 100 + '%';
          }
        }
      });
      chart.legend({
        position: 'right',
        itemFormatter: function itemFormatter(val) {
          return val + '  ' + map[val];
        }
      });
      chart.tooltip(false);
      chart.coord('polar', {
        transposed: true,
        radius: 0.85
      });
      chart.axis(false);
      chart.interval()
        .position('a*percent')
        .color('name', ['#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864', '#8543E0'])
        .adjust('stack')
        .style({
          lineWidth: 1,
          stroke: '#fff',
          lineJoin: 'round',
          lineCap: 'round'
        })
        .animate({
          appear: {
            duration: 1200,
            easing: 'bounceOut'
          }
        });

      chart.render();
    },
    initChart1() {
      const data = [{
        name: '其他消费',
        y: 6371664,
        const: 'const'
      }, {
        name: '生活用品',
        y: 7216301,
        const: 'const'
      }, {
        name: '通讯物流',
        y: 1500621,
        const: 'const'
      }, {
        name: '交通出行',
        y: 586622,
        const: 'const'
      }, {
        name: '饮食',
        y: 900000,
        const: 'const'
      }];

      const chart = new F2.Chart({
        id: 'container1',
        plugins: PieLabel,
        pixelRatio: window.devicePixelRatio
      });

      chart.source(data);
      chart.coord('polar', {
        transposed: true,
        radius: 0.75
      });
      chart.legend(false);
      chart.axis(false);
      chart.tooltip(false);

      // 添加饼图文本
      chart.pieLabel({
        sidePadding: 40,
        label1: function label1(data, color) {
          return {
            text: data.name,
            fill: color
          };
        },
        label2: function label2(data) {
          return {
            text: '￥' + String(Math.floor(data.y * 100) / 100).replace(/\B(?=(\d{3})+(?!\d))/g, ','),
            fill: '#808080',
            fontWeight: 'bold'
          };
        }
      });

      chart.interval()
        .position('const*y')
        .color('name', ['#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864'])
        .adjust('stack');
      chart.render();
    },
    initChart2() {
      const data = [{
        const: 'const',
        type: '交通出行',
        money: 51.39
      }, {
        const: 'const',
        type: '饮食',
        money: 356.68
      }, {
        const: 'const',
        type: '生活日用',
        money: 20.00
      }, {
        const: 'const',
        type: '住房缴费',
        money: 116.53
      }];
      const chart = new F2.Chart({
        id: 'container2',
        plugins: PieLabel,
        pixelRatio: window.devicePixelRatio
      });
      chart.source(data);
      chart.coord('polar', {
        transposed: true,
        radius: 0.9,
        innerRadius: 0.5
      });
      chart.axis(false);
      chart.legend(false);
      chart.tooltip(false);
      chart.guide()
        .html({
          position: ['50%', '50%'],
          html: '<div style="text-align: center;width:150px;height: 50px;">\n      <p style="font-size: 12px;color: #999;margin: 0" id="title"></p>\n      <p style="font-size: 18px;color: #343434;margin: 0;font-weight: bold;" id="money"></p>\n      </div>'
        });
      chart.interval()
        .position('const*money')
        .adjust('stack')
        .color('type', ['#1890FF', '#13C2C2', '#2FC25B', '#FACC14']);
      chart.pieLabel({
        sidePadding: 30,
        activeShape: true,
        label1: function label1(data) {
          return {
            text: '￥' + data.money,
            fill: '#343434',
            fontWeight: 'bold'
          };
        },
        label2: function label2(data) {
          return {
            text: data.type,
            fill: '#999'
          };
        },
        onClick: function onClick(ev) {
          const data = ev.data;
          if (data) {
            $('#title').text(data.type);
            $('#money').text(data.money);
          }
        }
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
