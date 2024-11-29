<template>
  <div class="news-page">
    <!-- 左上角路徑 -->
    <nav class="breadcrumb">
      <router-link to="/">HOME</router-link> / 最新消息
    </nav>

    <!-- 標題 -->
    <header class="page-header">
      <h1>最新消息</h1>
    </header>

    <!-- 單條新聞 -->
    <div class="news-item">
      <img
        src="/images/news/news1.jpg"
        alt="愛無限 傳遞愛意成長曙光"
        class="news-image"
      />
      <h2 class="news-title">愛無限 傳遞愛意成長曙光</h2>
      <router-link to="/news-details/1" class="news-link">繼續閱讀</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.news-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
}

.breadcrumb {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.breadcrumb a {
  color: #007bff;
  text-decoration: none;
  margin-right: 5px;
}

.breadcrumb span {
  color: #333;
}

.page-header {
  text-align: center;
  margin-bottom: 30px;
}

.page-header h1 {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
}

.news-item {
  text-align: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

.news-image {
  max-width: 100%;
  border-radius: 8px;
  margin-bottom: 20px;
}

.news-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin: 20px 0;
}

.news-link {
  display: inline-block;
  margin-top: 10px;
  color: #007bff;
  text-decoration: none;
  font-size: 1rem;
}

.news-link:hover {
  text-decoration: underline;
}
</style>
