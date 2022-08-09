<template>
  <div class="demo">
    <demo-block title="基础用法">
      <van-count-down :time="time" />
    </demo-block>
    <demo-block title="自定义格式">
      <van-count-down :time="time" format="DD 天 HH 时 mm 分 ss 秒" />
    </demo-block>
    <demo-block title="毫秒级渲染">
      <van-count-down millisecond :time="time" format="HH:mm:ss:SS" />
    </demo-block>
    <demo-block title="手动控制">
      <van-count-down
        ref="countDown"
        millisecond
        :time="3000"
        :auto-start="false"
        format="ss:SSS"
        @finish="finish"
      />
      <van-grid clickable :column-num="3">
        <van-grid-item text="开始" icon="play-circle-o" @click="start" />
        <van-grid-item text="暂停" icon="pause-circle-o" @click="pause" />
        <van-grid-item text="重置" icon="replay" @click="reset" />
      </van-grid>
    </demo-block>
  </div>
</template>
<script>
import { CountDown, Toast, Grid, GridItem } from 'vant';
import demoBlock from './_components/demoBlock.vue';
export default {
  components: {
    demoBlock,
    [CountDown.name]: CountDown,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem
  },
  data() {
    return {
      time: 30 * 60 * 60 * 1000
    };
  },
  created() {
  },
  methods: {
    start() {
      this.$refs.countDown.start();
    },
    pause() {
      this.$refs.countDown.pause();
    },
    reset() {
      this.$refs.countDown.reset();
    },
    finish() {
      Toast('倒计时结束');
    }
  }
};
</script>
<style lang="less" scoped>
@import '../../styles/var.less';

.demo {
  background-color: @white;

  .van-count-down {
    margin-left: @padding-md;
  }

  .colon {
    display: inline-block;
    margin: 0 4px;
    color: @red;
  }

  .block {
    display: inline-block;
    width: 22px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background-color: @red;
    border-radius: 4px;
  }

  .van-grid {
    margin-top: 10px;
  }
}
</style>
