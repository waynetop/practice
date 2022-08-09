<template>
  <div class="demo">
    <demo-block title="基础用法">
      <van-progress :percentage="50" />
    </demo-block>
    <demo-block title="线条粗细">
      <van-progress :percentage="50" stroke-width="8" />
    </demo-block>
    <demo-block title="置灰">
      <van-progress inactive :percentage="50" />
    </demo-block>
    <demo-block title="样式定制">
      <van-progress pivot-text="橙色" color="#f2826a" :percentage="25" />
      <br>
      <van-progress pivot-text="红色" color="#ee0a24" :percentage="50" />
      <br>
      <van-progress
        :percentage="75"
        pivot-text="紫色"
        pivot-color="#7232dd"
        color="linear-gradient(to right, #be99ff, #7232dd)"
      />
    </demo-block>
    <br>
    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
      环形进度条
    </van-divider>
    <demo-block title="基础用法">
      <van-circle v-model="currentRate" :rate="30" :speed="100" :text="text" />
    </demo-block>
    <demo-block title="颜色定制">
      <van-circle
        v-model="currentRate"
        :rate="rate"
        layer-color="#ebedf0"
        text="颜色定制"
      />
    </demo-block>
    <demo-block title="渐变色">
      <van-circle
        v-model="currentRate"
        :rate="rate"
        :color="gradientColor"
        text="渐变色"
      />
    </demo-block>
  </div>
</template>

<script>
import { Progress, Circle, Divider } from 'vant';
import demoBlock from './_components/demoBlock.vue';
export default {
  components: {
    demoBlock,
    [Progress.name]: Progress,
    [Circle.name]: Circle,
    [Divider.name]: Divider
  },
  data() {
    return {
      currentRate: 0,
      gradientColor: {
        '0%': '#3fecff',
        '100%': '#6149f6'
      }
    };
  },
  computed: {
    text() {
      return this.currentRate.toFixed(0) + '%';
    }
  }
};
</script>
<style lang="less" scoped>
.demo {
  margin: 0 20px;
  .van-loading {
    display: inline-block;
    margin: 5px 0 5px 20px;

    &--vertical {
      display: inline-flex;
    }
  }
}
</style>
