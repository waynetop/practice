<template>
  <div>
    <div class="chart"><canvas id="container" /></div>
  </div>
</template>

<script>
import F2 from '@antv/f2';
import _ from 'lodash';
export default {
  data() {
    return {
      // chart: null
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      const data = [{
        name: '9:00',
        score: 282,
        avgScore: 94
      }, {
        name: '9:10',
        score: 208,
        avgScore: 41.6
      }, {
        name: '9:20',
        score: 186,
        avgScore: 46.5
      }, {
        name: '9:30',
        score: 184,
        avgScore: 30.67
      }, {
        name: '9:40',
        score: 177,
        avgScore: 44.25
      }, {
        name: '9:50',
        score: 150,
        avgScore: 50
      }, {
        name: '10:00',
        score: 148,
        avgScore: 24.67
      }, {
        name: '10:10',
        score: 138,
        avgScore: 34.5
      }, {
        name: '10:20',
        score: 130,
        avgScore: 32.5
      }, {
        name: '10:30',
        score: 128,
        avgScore: 32
      }, {
        name: '10:40',
        score: 127,
        avgScore: 62.5
      }];

      const legendItems = [{
        name: '个人分数',
        // marker: 'square',
        fill: '#FACC14',
        checked: true
      }, {
        name: '平均分数',
        // marker: 'circle',
        marker: function marker(x, y, r, ctx) {
          ctx.lineWidth = 1;
          ctx.strokeStyle = ctx.fillStyle;
          ctx.moveTo(x - r - 3, y);
          ctx.lineTo(x + r + 3, y);
          ctx.stroke();
          ctx.arc(x, y, r, 0, Math.PI * 2, false);
          ctx.fill();
        },
        fill: '#1890FF',
        checked: true
      }];

      function findLegendItem(name) {
        let index;
        for (let i = 0; i < legendItems.length; i++) {
          if (legendItems[i].name === name) {
            index = i;
            break;
          }
        }
        return index;
      }
      // https://f2.antv.vision/zh/docs/tutorial/getting-started
      const chart = new F2.Chart({
        id: 'container',
        pixelRatio: window.devicePixelRatio,
        padding: ['auto', 'auto', 90, 'auto']
      });

      chart.source(data, {
        score: {
          tickInterval: 50, // 用于指定坐标轴各个标度点的间距，是原始数据之间的间距差值，tickCount 和 tickInterval 不可以同时声明。
          alias: '个人分数' // 别名。
        },
        avgScore: {
          ticks: [0, 17, 33, 50, 67, 83, 100], // 用于指定坐标轴上刻度点的文本信息，当用户设置了 ticks 就会按照 ticks 的个数和文本来显示。
          alias: '平均分数' // 别名。
        }
      });
      chart.axis('avgScore', {
        grid: null
      });
      chart.axis('name', {
        label: {
          // rotate: Math.PI / 3,
          // textAlign: 'start',
          textBaseline: 'middle'
        }
      });

      // 自定义图例内容以及交互行为 https://www.yuque.com/antv/f2/api-legend
      chart.legend({
        custom: true,
        items: legendItems,
        onClick: function onClick(ev) {
          const item = ev.clickedItem;
          const name = item.get('name');
          const checked = item.get('checked');
          const children = item.get('children');
          if (checked) {
            const markerFill = children[0].attr('fill');
            const textFill = children[1].attr('fill');
            children[0].set('_originColor', markerFill); // 缓存 marker 原来的颜色
            children[1].set('_originColor', textFill); // 缓存文本原来的颜色
          }
          const geoms = chart.get('geoms');
          for (let i = 0; i < geoms.length; i++) {
            const geom = geoms[i];

            if (geom.getYScale().alias === name) {
              if (!checked) {
                geom.show();
                children[0].attr('fill', children[0].get('_originColor'));
                children[1].attr('fill', children[1].get('_originColor'));
              } else {
                geom.hide();
                children[0].attr('fill', '#bfbfbf'); // marker 置灰
                children[1].attr('fill', '#bfbfbf'); // 文本置灰 置灰
              }
            }
            item.set('checked', !checked);
            legendItems[findLegendItem(name)].checked = !checked;
          }
        }
      });

      // tooltip 和图例的联动
      chart.tooltip({
        showCrosshairs: true,
        custom: true, // 自定义 tooltip 内容框
        onChange: function onChange(obj) {
          const legend = chart.get('legendController').legends.top[0];
          const tooltipItems = obj.items;
          const legendItems = legend.items;
          const map = {};
          legendItems.forEach(function(item) {
            map[item.name] = _.clone(item);
          });
          tooltipItems.forEach(function(item) {
            const name = item.name;
            const value = item.value;
            if (map[name]) {
              map[name].value = value;
            }
          });
          legend.setItems(_.values(map));
        },
        onHide: function onHide() {
          const legend = chart.get('legendController').legends.top[0];
          legend.setItems(legendItems);
        }
      });

      chart.line().position('name*score').color('#FACC14');
      chart.line().position('name*avgScore').color('#1890FF');
      chart.point().position('name*avgScore').size(3)
        .style({
          fill: '#1890FF',
          stroke: '#fff',
          lineWidth: 1
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
