<!--
 * @Author: wayne
 * @Date: 2022-08-05 11:06:48
 * @LastEditors: wayne
 * @LastEditTime: 2022-08-09 10:16:57
-->
<template>
  <div class="network">
    <h2>当前网络状态</h2>
    <h4>获取网络在线状态：{{ p1 }}</h4>
    <h4>获取网络具体状态：{{ p2 }}</h4>
    <h4>获取网络速度：{{ p3 }}</h4>
  </div>
</template>
<script>
export default {
  data() {
    return {
      p1: '',
      p2: '',
      p3: ''
    };
  },
  mounted() {
    this.getNetworkConnectionChange();
    this.getNetworkOnLineChange();
  },
  methods: {
    getNetworkConnectionChange() {
      // connection 的兼容性较低
      const connection =
        navigator.connection ||
        navigator.webkitConnection ||
        navigator.mozConnection;
      this.p2 = connection.effectiveType;
      this.p3 = connection.downlink + 'MB/S';
      // 对connection变更监听
      connection.addEventListener('change', () => {
        // connection.effectiveType返回的是具体的网络状态：4g/3g/2g
        this.p2 = connection.effectiveType;
        this.p3 = connection.downlink + 'MB/S';
      });
    },
    getNetworkOnLineChange() {
      this.p1 = window.navigator.onLine;

      // 对online网络在线变更监听
      window.addEventListener('online', function() {
        this.p1 = window.navigator.onLine;
      });

      // 对offline断网变更监听
      window.addEventListener('offline', function() {
        this.p1 = window.navigator.onLine;
      });
    }
  }
};
</script>
<style scoped>
.network {
  padding: 10px;
}

h1,
h2,
h3,
h4 {
  text-align: left;
  font-weight: normal;
}

h2 {
  font-size: 24px;
}

h4 {
  font-size: 20px;
  color: #666;
}
</style>
