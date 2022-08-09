<template>
  <div class="demo">
    <demo-block title="基础用法">
      <van-sticky>
        <van-button type="primary">基础用法</van-button>
      </van-sticky>
    </demo-block>
    <demo-block title="吸顶距离">
      <van-sticky :offset-top="50">
        <van-button style="margin-left: 115px" type="info">吸顶距离</van-button>
      </van-sticky>
    </demo-block>
    <demo-block title="指定容器">
      <div ref="container" style="height: 150px; background-color: #f1f1f1">
        <van-sticky :container="container">
          <van-button style="margin-left: 215px" type="warning">指定容器</van-button>
        </van-sticky>
      </div>
    </demo-block>
  </div>
</template>

<script>
// 注：使用rem适配时，按钮的自动获取高度会由原来的44px增加到57px
import { Sticky, Button } from 'vant';
import demoBlock from './_components/demoBlock.vue';
export default {
  components: {
    demoBlock,
    [Button.name]: Button,
    [Sticky.name]: Sticky
  },
  data() {
    return {
      container: null
    };
  },
  mounted() {
    this.container = this.$refs.container;
  }
};
</script>
<style lang="less" scoped>
@import '../../styles/var.less';

.demo {
  height: 200vh;

  .van-button {
    margin-left: @padding-md;
  }
}
</style>
