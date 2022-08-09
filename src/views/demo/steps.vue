<template>
  <div>
    <demo-block title="基础用法">
      <div class="steps">
        <van-steps :active="active">
          <van-step>买家下单</van-step>
          <van-step>商家接单
            <span class="tip">预计一分钟</span>
          </van-step>
          <van-step>交易完成</van-step>
        </van-steps>
      </div>
    </demo-block>
    <demo-block title="自定义样式">
      <van-steps :active="active" active-icon="success" active-color="#38f">
        <van-step>买家下单</van-step>
        <van-step>商家接单</van-step>
        <van-step>买家提货</van-step>
        <van-step>交易完成</van-step>
      </van-steps>
    </demo-block>
  </div>
</template>
<script>
import { Badge, Step, Steps } from 'vant';
import demoBlock from './_components/demoBlock.vue';
export default {
  components: {
    demoBlock,
    [Badge.name]: Badge,
    [Step.name]: Step,
    [Steps.name]: Steps
  },
  data() {
    return {
    };
  },
  created() {
  },
  methods: {
  }
};
</script>
<style lang="less">
.steps {
  .van-step--horizontal .van-step__title {
    position: relative;
    span.tip {
      border: 1px solid red;
      font-size: 12px;
      position: absolute;
      top: -7px;
      right: -65px;
    }
  }
}
</style>
