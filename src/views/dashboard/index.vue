<!--
 * @Author: wayne
 * @Date: 2022-08-09 10:03:56
 * @LastEditors: wayne
 * @LastEditTime: 2022-08-09 10:18:35
-->
<template>
  <van-cell-group>
    <van-cell
      v-for="item in componentList"
      :key="item.name"
      :title="item.meta.title"
      is-link
      :to="'/demo/' + item.path"
    />
    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
      下面是图表组件
    </van-divider>
    <van-cell v-for="item in chartList" :key="item.name" :title="item.meta.title" is-link :to="'/demo/' + item.path" />
  </van-cell-group>
</template>
<script>
import { Cell, CellGroup, Collapse, CollapseItem, Divider } from 'vant';
import { constantRoutes } from '@/router/index';
export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem,
    [Divider.name]: Divider
  },
  data() {
    return {
      componentList: [],
      chartList: []
    };
  },
  created() {
    let arrList = [];
    constantRoutes.forEach(item => {
      if (item.name === 'Demo') {
        arrList = item.children;
      }
    });
    this.componentList = arrList.filter(item => {
      return item.name.indexOf('Chart') < 0;
    });
    this.chartList = arrList.filter(item => {
      return item.name.indexOf('Chart') >= 0;
    });
  },
  methods: {}
};
</script>
<style lang="less" scoped>
</style>
