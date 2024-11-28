<template>
  <div>
    <h1>所有商品</h1>
    <!-- 根據查詢參數動態渲染對應的分類 -->
    <component :is="components[category]" :key="category" v-if="components[category]" />
    <div v-else>
      <p>該分類不存在，請選擇有效的商品分類。</p>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'; // 用於響應式數據
import { useRoute } from 'vue-router'; // 獲取路由的查詢參數
import Headwear from './Headwear.vue'; // 引入頭飾組件
import Earrings from './Earrings.vue'; // 引入耳飾組件

export default {
  components: {
    Headwear,
    Earrings,
  },
  setup() {
    const route = useRoute(); // 獲取當前路由
    const category = ref(route.query.category); // 查詢參數的分類值

    // 監聽路由查詢參數變化
    watch(() => route.query.category, (newCategory) => {
      category.value = newCategory; // 更新分類值
    });

    // 定義分類對應的組件
    const components = {
      頭飾: Headwear,
      耳飾: Earrings,
    };

    return {
      category, // 暴露分類值給模板
      components, // 暴露分類對應組件的對象
    };
  },
};
</script>

<style scoped>
/* 可根據需求添加樣式 */
</style>
