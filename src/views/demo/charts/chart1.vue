<template>
  <div>
    <div class="chart"><canvas id="container" /></div>
  </div>
</template>

<script>
import F2 from '@antv/f2';
import _ from 'lodash';
import data from './_components/data.json';
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
      const chart = new F2.Chart({
        id: 'container',
        pixelRatio: window.devicePixelRatio,
        padding: [45, 'auto', 'auto']
      });

      chart.source(data);
      chart.scale('date', {
        type: 'timeCat',
        tickCount: 3
      });
      chart.scale('value', {
        tickCount: 5
      });
      chart.axis('date', {
        label: function label(text, index, total) {
        // 只显示每一年的第一天
          const textCfg = {};
          if (index === 0) {
            textCfg.textAlign = 'left';
          } else if (index === total - 1) {
            textCfg.textAlign = 'right';
          }
          return textCfg;
        }
      });
      chart.guide().html({
        position: ['min', 'max'],
        html: `<div id="tooltipWrapper" style="height: 30px;background-color:#E9F1FF;line-height: 30px;">
      <div id="tooltipName" style="float:left;font-size:12px;color:#2E2E2E;"></div>
      <div id="tooltipValue" style="float:right;font-size:12px;color:#2E2E2E;"></div>
    </div>`,
        offsetY: -22.5
      });
      chart.tooltip({
        custom: true, // 自定义 tooltip 内容框
        onChange: function onChange(obj) {
          const legend = chart.get('legendController').legends.top[0];
          const tooltipItems = obj.items;
          const legendItems = legend.items;
          const originData = tooltipItems[0].origin;
          const date = originData.date;
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
          $('#tooltipWrapper').width($('#container').width());
          $('#tooltipWrapper').css('left', 0);
          $('#tooltipName').css('margin-left', 15);
          $('#tooltipValue').css('margin-right', 15);
          $('#tooltipName').text(date);
          $('#tooltipValue').html(tooltipItems[0].origin.type + '：<span style="margin-right:10px">' + tooltipItems[0].value + '</span>' + tooltipItems[1].origin.type + '：<span style="margin-right:10px">' + tooltipItems[1].value + '</span>' + tooltipItems[2].origin.type + '：<span style="margin-right:10px">' + tooltipItems[2].value + '</span>');
          $('#tooltipWrapper').show();
        },
        onHide: function onHide() {
          $('#tooltipWrapper').hide();
          const legend = chart.get('legendController').legends.top[0];
          legend.setItems(chart.getLegendItems().country);
        }
      });
      chart.line().position('date*value').color('type');
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
