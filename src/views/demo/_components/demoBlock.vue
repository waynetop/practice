<template>
  <div>
    <h2 class="title"><van-icon size="13px" name="bag" /> {{ title }}</h2>
    <slot />
  </div>
</template>
<script>
import { Icon } from 'vant';
export default {
  components: {
    [Icon.name]: Icon
  },
  props: {
    'title': {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="less" scoped>
h2.title {
  margin: 0;
  padding: 20px 16px 16px;
  color: rgba(69, 90, 100, 0.6);
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
}
</style>
