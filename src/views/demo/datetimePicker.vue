<template>
  <div class="demo">
    <demo-block title="选择时间">
      <van-datetime-picker
        v-model="currentTime"
        type="time"
        title="选择时间"
        :min-hour="10"
        :max-hour="20"
      />
    </demo-block>
    <br>
    <br>
    <demo-block title="选择完整时间">
      <van-datetime-picker
        v-model="currentDate"
        type="datetime"
        title="选择完整时间"
        :min-date="minDate"
        :max-date="maxDate"
      />
    </demo-block>
    <br>
    <br>
    <demo-block title="选项过滤器">
      <van-datetime-picker
        v-model="currentTime"
        type="time"
        title="选项过滤器"
        :filter="filter"
      />
    </demo-block>
  </div>
</template>

<script>
import { DatetimePicker, Divider, Cell } from 'vant';
import demoBlock from './_components/demoBlock.vue';
export default {
  components: {
    demoBlock,
    [DatetimePicker.name]: DatetimePicker,
    [Cell.name]: Cell,
    [Divider.name]: Divider
  },
  data() {
    return {
      currentTime: '12:00',
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date()
    };
  },
  methods: {
    filter(type, options) {
      if (type === 'minute') {
        return options.filter((option) => option % 5 === 0);
      }
      return options;
    }
  }
};
</script>
