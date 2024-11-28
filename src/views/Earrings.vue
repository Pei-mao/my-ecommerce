<template>
  <div class="earrings">
    <h1>耳飾</h1>
    <p>探索我們的耳飾系列，發現最精美的設計。</p>
    <div class="product-list">
      <div class="product" v-for="product in earrings" :key="product.id">
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
      earrings: [
        { id: 1, name: "珍珠耳環", price: 199, image: "/images/earring1.jpg" },
        { id: 2, name: "水晶耳墜", price: 399, image: "/images/earring2.jpg" },
        { id: 3, name: "金色圈環", price: 299, image: "/images/earring3.jpg" },
      ],
    };
  },
};
</script>

<style scoped>
.earrings {
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
