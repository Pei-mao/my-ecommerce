<template>
  <div class="necklaces-page">
    <!-- 左側分類表 -->
    <aside class="category-menu">
      <h2>SHOP NOW</h2>
      <ul>
        <li v-for="category in categories" :key="category.id">
          <a
            :href="'/products?category=' + category.name"
            :class="{ active: category.name === currentCategory }"
          >
            {{ category.name }}
          </a>
        </li>
      </ul>
    </aside>

    <!-- 右側商品展示 -->
    <main class="product-gallery">
      <h1>頸飾</h1>
      <p>探索我們的頸飾系列，發現最耀眼的珠寶設計。</p>
      <div class="product-list">
        <div class="product" v-for="product in necklaces" :key="product.id">
          <img :src="product.image" :alt="product.name" />
          <h3>{{ product.name }}</h3>
          <p>NT.{{ product.price }}</p>
          <button @click="$emit('add-to-cart', product)">加入購物車</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const currentCategory = ref(route.query.category || "頸飾"); // 當前分類
    const categories = [
      { id: 1, name: "頭飾" },
      { id: 2, name: "耳飾" },
      { id: 3, name: "頸飾" },
      { id: 4, name: "手部飾品" },
      { id: 5, name: "戒指" },
      { id: 6, name: "腳飾" },
      { id: 7, name: "胸飾" },
      { id: 8, name: "腰飾" },
      { id: 9, name: "身體裝飾" },
    ];

    const necklaces = computed(() => [
      { id: 1, name: "鑽石項鍊", price: 4999, image: "/images/necklaces/鑽石項鍊.jpg" },
      { id: 2, name: "珍珠項鍊", price: 2999, image: "/images/necklaces/珍珠項鍊.jpg" },
      { id: 3, name: "水晶吊墜", price: 1999, image: "/images/necklaces/necklace3.jpg" },
      { id: 4, name: "純手工吊墜", price: 2199, image: "/images/necklaces/necklace4.jpg" },
      { id: 5, name: "環保材質吊墜", price: 1199, image: "/images/necklaces/necklace5.jpg" },
      { id: 6, name: "特殊材質吊墜", price: 3099, image: "/images/necklaces/necklace6.jpg" },
      { id: 7, name: "火山灰吊墜", price: 5999, image: "/images/necklaces/珍珠項鍊.jpg" },
    ]);

    return {
      currentCategory,
      categories,
      necklaces,
    };
  },
};
</script>

<style scoped>
.necklaces-page {
  display: flex;
  gap: 20px;
  max-width: 1600px; /* 設定最大寬度 */
  margin: 0 100px; /* 自動居中頁面 */
  padding: 20px;
}

.category-menu {
  width: 200px;
  border-right: 1px solid #ddd;
  padding-right: 0px;
  padding-left: 0px; /* 適度的左邊內距 */
}

.category-menu h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.category-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.category-menu li {
  margin-bottom: 10px;
}

.category-menu a {
  text-decoration: none;
  color: #333;
  font-size: 1rem;
}

.category-menu a.active {
  font-weight: bold;
  color: #007bff;
}

.product-gallery {
  flex: 1;
  padding-left: 10px; /* 避免商品緊貼分類區域 */
}

.product-gallery h1 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.product-gallery p {
  color: #666;
  margin-bottom: 20px;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.product {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.product img {
  width: 100%; /* 確保圖片自適應卡片寬度 */
  max-width: 200px; /* 限制圖片最大寬度 */
  height: 200px; /* 固定高度，避免不規則圖片影響佈局 */
  object-fit: cover; /* 裁切圖片以適應容器大小 */
  margin: 0 auto; /* 置中圖片 */
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
