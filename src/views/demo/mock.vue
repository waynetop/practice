<template>
  <div>
    <h3 class="testWord">字体大小控制</h3>
    <ul>
      <li
        v-for="(item, i) in list2"
        :key="i"
        style="font-size:12px;"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>
<script>
import { List } from 'vant';
import { fetchList } from '@/api/article';
import { login } from '@/api/login';
export default {
  components: {
    [List.name]: List
  },
  data() {
    return {
      list1: [],
      list2: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      const data = {
        userName: 'admin',
        passWord: '123456'
      };
      login(data).then((response) => {
        console.log(response);
      });
      fetchList()
        .then((response) => {
          console.log(response);
          this.list1 = response.data.items.splice(0, 5);
          this.list2 = response.data.items;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
};
</script>
<style lang="less" scoped>
.testWord {
  font-size: 20px;
}
</style>
