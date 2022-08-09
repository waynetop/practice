<template>
  <div>
    <van-tabbar
      v-model="active"
      active-color="#4E31C0"
      inactive-color="#BCBCBC"
      @change="handlechange"
    >
      <van-tabbar-item v-for="(item, index) in navLists" :key="index">
        <span>{{ item.text }}</span>
        <template #icon="props">
          <img :src="props.active ? item.inactive : item.active">
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data() {
    return {
      active: 0,
      navLists: [
        {
          active: require('@/assets/sy-1.png'),
          inactive: require('@/assets/sy-2.png'),
          text: '首页',
          path: '/'
        },
        {
          active: require('@/assets/hb-1.png'),
          inactive: require('@/assets/hb-2.png'),
          text: '贷款',
          path: '/b'
        },
        {
          active: require('@/assets/qdz-1.png'),
          inactive: require('@/assets/qdz-2.png'),
          text: '理财',
          path: '/c'
        },
        {
          active: require('@/assets/me-1.png'),
          inactive: require('@/assets/me-2.png'),
          text: '我的',
          path: '/d'
        }
      ]
    };
  },
  methods: {
    handlechange(active) {
      this.$router.push({ path: this.navLists[active].path });
    }
  }
};
</script>

<style lang="less" scoped></style>
