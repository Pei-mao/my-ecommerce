<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Khieng Couture</h1>
      <p>Discover elegance and style in every piece.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
};
</script>

<style scoped>
.hero {
  height: 100vh;
  width: 100%; /* 確保覆蓋整個視窗寬度 */
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), 
              url('/background7.jpg') no-repeat center center;
  background-size: cover; /* 避免拉伸圖片 */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}

.hero-content {
  animation: fadeIn 2s ease-in-out;
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 20px;
}

.hero p {
  font-size: 1.5rem;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
