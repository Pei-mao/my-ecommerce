<template>
  <div class="home">
    <h1>歡迎來到飾品電商網站！</h1>
    <p>探索我們的產品，享受購物樂趣。</p>
    <div class="animation">
      <img src="/hero-image.png" alt="Hero Image" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.home {
  text-align: center;
  padding: 50px;
}

.home h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.home p {
  font-size: 1.2rem;
  margin-bottom: 40px;
}

.home .animation img {
  max-width: 100%;
  height: auto;
  animation: fadeIn 2s ease-in-out;
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
