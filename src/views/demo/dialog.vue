<template>
  <div class="demo">
    <demo-block title="基础用法">
      <van-cell is-link title="提示弹窗" @click="onClickAlert" />
      <van-cell is-link title="提示弹窗（无标题）" @click="onClickAlert2" />
      <van-cell is-link title="确认弹窗" @click="onClickConfirm" />
    </demo-block>
    <demo-block title="圆角按钮样式">
      <van-cell is-link title="提示弹窗" @click="onClickRound" />
    </demo-block>
    <demo-block title="异步关闭">
      <van-cell is-link title="异步关闭" @click="onClickBeforeClose" />
    </demo-block>
  </div>
</template>

<script>
import { Dialog, Cell } from 'vant';
import demoBlock from './_components/demoBlock.vue';
export default {
  components: {
    demoBlock,
    [Dialog.name]: Dialog,
    [Cell.name]: Cell
  },
  created() {
  },
  methods: {
    onClickAlert() {
      Dialog.alert({
        title: '标题',
        message: '弹窗内容'
      });
    },
    onClickAlert2() {
      Dialog.alert({
        message: '弹窗内容'
      });
    },
    onClickConfirm() {
      Dialog.confirm({
        title: '标题',
        message: '弹窗内容'
      });
    },
    onClickRound() {
      Dialog.alert({
        theme: 'round-button',
        title: '标题',
        message: '弹窗内容'
      });
    },
    onClickBeforeClose() {
      const beforeClose = function(action, done) {
        if (action === 'confirm') {
          setTimeout(done, 1000);
        } else {
          done();
        }
      };
      Dialog.confirm({
        title: '标题',
        message: '弹窗内容',
        beforeClose
      });
    }
  }
};
</script>
<style lang="less" scoped>
.demo {
  // margin: 0 20px;
  .van-loading {
    display: inline-block;
    margin: 5px 0 5px 20px;

    &--vertical {
      display: inline-flex;
    }
  }
}
</style>
