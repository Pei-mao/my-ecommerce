<template>
  <div id="app">
    <Navbar :cartItemCount="cart.length" />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      cart: [], // 購物車數據
    };
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: 'Poppins', Arial, sans-serif; /* 使用現代代碼字體 */
  color: #333;
  background-color: #f5f5f5;
}

#app {
  min-height: 100vh; /* 確保應用程序容器至少滿足視窗高度 */
}
</style>
