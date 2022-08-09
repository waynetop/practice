<template>
  <div>
    <demo-block title="基础用法">
      <van-swipe
        class="my-swipe-one"
        :autoplay="3000"
        :show-indicators="false"
      >
        <van-swipe-item>
          <van-image
            height="90"
            :src="require('./../../assets/banner1.png')"
          />
        </van-swipe-item>
        <van-swipe-item>
          <van-image
            height="90"
            :src="require('./../../assets/banner2.png')"
          />
        </van-swipe-item>
      </van-swipe>
    </demo-block>
    <demo-block title="自定义滑块大小">
      <van-swipe
        class="my-swipe-two"
        :loop="false"
        :width="300"
        :show-indicators="false"
      >
        <van-swipe-item>
          <van-image
            height="90"
            :src="require('./../../assets/banner1.png')"
          />
        </van-swipe-item>
        <van-swipe-item>
          <van-image
            height="90"
            :src="require('./../../assets/banner2.png')"
          />
        </van-swipe-item>
        <van-swipe-item>
          <van-image
            height="90"
            :src="require('./../../assets/banner1.png')"
          />
        </van-swipe-item>
      </van-swipe>
    </demo-block>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Image } from 'vant';
import demoBlock from './_components/demoBlock.vue';
export default {
  components: {
    demoBlock,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Image.name]: Image
  },
  created() {
  }
};
</script>
<style>
.my-swipe-one {
  margin: 0 15px;
  height: 90px;
}
.my-swipe-two {
  height: 90px;
}
</style>
