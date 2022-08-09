<template>
  <div>
    <van-nav-bar
      :title="title"
      :left-arrow="isShow"
      @click-left="onClickLeft"
    />
  </div>
</template>
<script>
import { NavBar } from 'vant';
export default {
  components: {
    [NavBar.name]: NavBar
  },
  props: {
    title: { type: String, default: '' }
  },
  data() {
    return {};
  },
  computed: {
    isShow() {
      return this.title !== '组件列表';
    }
  },
  methods: {
    onClickLeft() {
      this.$router.push('/');
    }
  }
};
</script>
