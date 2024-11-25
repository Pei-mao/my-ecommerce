<template>
  <div class="cart">
    <h2>購物車</h2>
    <ul>
      <li v-for="(item, index) in cart" :key="index">
        <span>{{ item.name }} - ${{ item.price }}</span>
        <button @click="$emit('remove-from-cart', index)">移除</button>
      </li>
    </ul>
    <p v-if="cart.length === 0">購物車是空的</p>
    <p v-else>總金額： ${{ total }}</p>
  </div>
</template>

<script>
export default {
  props: {
    cart: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    total() {
      return this.cart.reduce((sum, item) => sum + item.price, 0);
    },
  },
};
</script>

<style>
.cart {
  font-family: Arial, sans-serif;
}

.cart h2 {
  margin-bottom: 20px;
  font-size: 18px;
  text-align: left;
}

.cart ul {
  list-style: none;
  padding: 0;
}

.cart li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.cart button {
  background-color: #ff4d4f;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
}

.cart button:hover {
  background-color: #ff7875;
}

.cart p {
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
  text-align: right;
}
</style>
