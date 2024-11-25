<template>
  <div class="product-list">
    <div v-for="product in products" :key="product.id" class="product">
      <img :src="product.image" :alt="product.name" />
      <h3>{{ product.name }}</h3>
      <p>${{ product.price }}</p>
      <button @click="$emit('add-to-cart', product)">加入購物車</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
.product-list {
  display: flex;
  flex-wrap: wrap; /* 支持多行排列 */
  gap: 20px; /* 間距 */
  justify-content: center; /* 水平居中 */
  padding: 20px;
}

.product {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
  width: 200px; /* 固定寬度 */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 添加陰影 */
  border-radius: 8px; /* 圓角邊框 */
  background-color: #fff; /* 背景色 */
}

.product img {
  width: 100%; /* 圖片自適應寬度 */
  height: auto;
  border-radius: 4px; /* 圓角圖片 */
}

.product button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
}

.product button:hover {
  background-color: #0056b3; /* 懸停效果 */
}
</style>
