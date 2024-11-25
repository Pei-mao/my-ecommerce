<template>
  <div id="app">
    <Navbar :cartItemCount="cart.length" />
    <Hero />
    <router-view></router-view>
    <!-- 滾動內容區域 -->
    <div class="scrollable-content">
      <section>
        <h2>Our Story</h2>
        <p>
          Khieng Couture represents the finest quality of design and craftsmanship. Explore the elegance in every detail.
        </p>
      </section>
      <section>
        <h2>Our Products</h2>
        <p>Experience the sophistication and beauty of our exclusive collection.</p>
      </section>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';

export default {
  components: {
    Navbar,
    Hero,
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

.scrollable-content section {
  padding: 50px;
  background-color: #ffffff;
  margin-bottom: 10px;
}

.scrollable-content section h2 {
  font-size: 2rem;
  color: #333;
}

.scrollable-content section p {
  font-size: 1.2rem;
  color: #666;
}
</style>
