<template>
  <div id="app">
    <Navbar :cartItemCount="cart.length" />
    <main>
      <section class="products-section">
        <ProductList :products="products" @add-to-cart="addToCart" />
      </section>
      <section class="cart-section">
        <Cart :cart="cart" @remove-from-cart="removeFromCart" />
      </section>
    </main>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import ProductList from './components/ProductList.vue';
import Cart from './components/Cart.vue';

export default {
  components: {
    Navbar,
    ProductList,
    Cart,
  },
  data() {
    return {
      products: [
        { id: 1, name: '項鍊', price: 500, image: 'https://via.placeholder.com/150' },
        { id: 2, name: '耳環', price: 300, image: 'https://via.placeholder.com/150' },
        { id: 3, name: '手鍊', price: 400, image: 'https://via.placeholder.com/150' },
      ],
      cart: [],
    };
  },
  methods: {
    addToCart(product) {
      this.cart.push(product);
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
    },
  },
};
</script>

<style>
/* 主容器 */
main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  gap: 20px;
  background-color: #f9f9f9;
}

/* 商品列表區域 */
.products-section {
  flex: 3;
}

/* 購物車區域 */
.cart-section {
  flex: 1;
  border: 1px solid #ddd;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.cart-section h2 {
  margin-bottom: 20px;
  font-size: 20px;
  text-align: left;
}

.cart-section p {
  font-size: 16px;
  color: #555;
  text-align: left;
}

@media (max-width: 768px) {
  main {
    flex-direction: column;
  }

  .cart-section {
    margin-top: 20px;
  }
}
</style>
