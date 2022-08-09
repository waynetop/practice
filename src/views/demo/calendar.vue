<template>
  <div class="demo">
    <demo-block title="基础用法">
      <van-cell is-link title="选择单个日期" :value="date" @click="show = true" />
      <van-calendar v-model="show" @confirm="onConfirm" />
      <van-cell is-link title="选择多个日期" :value="text" @click="show1 = true" />
      <van-calendar v-model="show1" type="multiple" @confirm="onConfirm1" />
      <van-cell is-link title="选择日期区间" :value="date2" @click="show2 = true" />
      <van-calendar v-model="show2" type="range" @confirm="onConfirm2" />
    </demo-block>
    <demo-block title="快捷选择">
      <van-cell is-link title="选择单个日期" :value="date3" @click="show3 = true" />
      <van-calendar v-model="show3" :show-confirm="false" @confirm="onConfirm3" />
      <van-cell is-link title="选择日期区间" :value="date4" @click="show4 = true" />
      <van-calendar v-model="show4" :show-confirm="false" type="range" @confirm="onConfirm4" />
    </demo-block>
  </div>
</template>

<script>
import { Calendar, Cell } from 'vant';
import demoBlock from './_components/demoBlock.vue';
export default {
  components: {
    demoBlock,
    [Calendar.name]: Calendar,
    [Cell.name]: Cell
  },
  data() {
    return {
      text: '',
      date: '',
      date2: '',
      date3: '',
      date4: '',
      show: false,
      show1: false,
      show2: false,
      show3: false,
      show4: false
    };
  },
  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },
    onConfirm1(date) {
      this.show1 = false;
      this.text = `选择了 ${date.length} 个日期`;
    },
    onConfirm2(date) {
      const [start, end] = date;
      this.show2 = false;
      this.date2 = `${this.formatDate(start)} - ${this.formatDate(end)}`;
    },
    onConfirm3(date) {
      this.show3 = false;
      this.date3 = this.formatDate(date);
    },
    onConfirm4(date) {
      const [start, end] = date;
      this.show4 = false;
      this.date4 = `${this.formatDate(start)} - ${this.formatDate(end)}`;
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
