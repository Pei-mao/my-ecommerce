<template>
  <div class="headwear">
    <h1>頭飾</h1>
    <p>探索我們的頭飾系列，發現最精緻的設計。</p>
    <div class="product-list">
      <div class="product" v-for="product in headwears" :key="product.id">
        <img :src="product.image" :alt="product.name" />
        <h3>{{ product.name }}</h3>
        <p>${{ product.price }}</p>
        <button @click="$emit('add-to-cart', product)">加入購物車</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headwears: [
        { id: 1, name: "珍珠髮箍", price: 299, image: "/images/headwear1.jpg" },
        { id: 2, name: "水晶皇冠", price: 599, image: "/images/headwear2.jpg" },
        { id: 3, name: "金色頭帶", price: 399, image: "/images/headwear3.jpg" },
      ],
    };
  },
};
</script>

<style scoped>
.headwear {
  text-align: center;
  padding: 20px;
}

.product-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

.product {
  border: 1px solid #ddd;
  padding: 10px;
  width: 200px;
  text-align: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.product img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

.product h3 {
  font-size: 1.2rem;
  margin: 10px 0;
}

.product p {
  color: #666;
  font-size: 1rem;
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
  background-color: #0056b3;
}
</style>
