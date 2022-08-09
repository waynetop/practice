<template>
  <div>
    <div class="chart"><canvas id="container" /></div>
  </div>
</template>

<script>
import F2 from '@antv/f2';
// import _ from 'lodash';
import data from './_components/data1.json';
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
        tickCount: 5
      });
      chart.legend({
        custom: true,
        position: 'top',
        align: 'center',
        items: [
          { name: '涨幅', marker: 'square', fill: '#ff4000' }
        ]
      });
      chart.axis('date', {
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
      chart.guide().html({
        position: ['min', 'max'],
        html: `<div id="tooltipWrapper" style="height: 30px;background-color:#f9eae5;line-height: 30px;">
      <div id="tooltipDate" style="float:left;font-size:12px;color:#2E2E2E;"></div>
      <div id="tooltipValue" style="float:right;font-size:12px;color:#2E2E2E;"></div>
    </div>`,
        offsetY: -22.5
      });
      chart.tooltip({
        custom: true, // 自定义 tooltip 内容框
        showXTip: true,
        showYTip: true,
        snap: true,
        crosshairsType: 'xy',
        crosshairsStyle: {
          lineDash: [2]
        },
        xTip: {
          fill: '#ffffff',
          fontSize: 11
        },
        yTip: {
          fill: '#ffffff',
          fontSize: 11
        },
        xTipBackground: {
          fill: '#ff4000'
        },
        yTipBackground: {
          fill: '#ff4000'
        },
        onChange: function onChange(obj) {
          $('#tooltipWrapper').width($('#container').width());
          $('#tooltipWrapper').css('left', 0);
          $('#tooltipDate').css('margin-left', 15);
          $('#tooltipValue').css('margin-right', 15);
          $('#tooltipDate').text(obj.items[0].origin.date);
          $('#tooltipValue').html('<span style="color:#999;">估值：</span><span style="margin-right:10px; color:#ff4000;">' + obj.items[0].origin.value + '</span><span style="color:#999;">涨幅：</span><span style="margin-right:10px; color:#ff4000;">' + obj.items[0].origin.score + '</span>');
          $('#tooltipWrapper').show();
        },
        onHide: function onHide() {
          $('#tooltipWrapper').hide();
          const legend = chart.get('legendController').legends.top[0];
          legend.setItems(chart.getLegendItems().country);
        }
      });
      chart.line().position('date*score').color('#ff4000');
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
