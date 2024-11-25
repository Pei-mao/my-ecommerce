<template>
  <header>
    <h1>飾品電商網站</h1>
    <div class="cart-info">
      購物車：{{ cartItemCount }} 項
    </div>
  </header>
</template>

<script>
export default {
  props: {
    cartItemCount: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style>
header {
  background-color: #f8f9fa;
  padding: 1rem;
  text-align: center;
  font-size: 24px;
  font-family: Arial, sans-serif;
  position: relative;
}

.cart-info {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 16px;
  font-weight: bold;
}
</style>
