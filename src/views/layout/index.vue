<template>
  <div class="container">
    <navbar :title="title" />
    <router-view :key="key" />
    <!-- <tabbar /> -->
  </div>
</template>

<script>
import navbar from './_components/navbar';
// import tabbar from './_components/tabbar';
export default {
  name: 'Layout',
  components: {
    // tabbar,
    navbar
  },
  computed: {
    key() {
      return this.$route.path;
    },
    title() {
      return this.$route.meta.title;
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  padding-bottom: 34px;
}
</style>
