<template>
  <div id="app">
    <Navbar />
    <main>
      <ProductList />
    </main>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import ProductList from './components/ProductList.vue';

export default {
  components: {
    Navbar,
    ProductList,
  },
};
</script>

<style>
/* 基本樣式 */
main {
  padding: 20px;
  font-family: Arial, sans-serif;
}
</style>
