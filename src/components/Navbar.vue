<template>
  <header :class="['navbar', { 'scrolled': isScrolled }]">
    <!-- 使用 router-link 包裹 logo -->
    <router-link to="/" class="logo">
      <img src="/logo.png" alt="Logo" />
      <span>Khieng Couture</span>
    </router-link>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/products">所有商品</router-link></li>
        <li><router-link to="/news">最新消息</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
    <div class="actions">
      <button class="search">
	<i class="fas fa-search"></i>
      </button>
      <button class="login">
        <i class="fas fa-user"></i> Login
      </button>
      <button class="cart">
        <i class="fas fa-shopping-cart"></i> {{ cartItemCount }}
      </button>
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
  data() {
    return {
      isScrolled: false, // 控制滾動狀態
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll); // 監聽滾動
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll); // 移除監聽
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 100; // 判斷滾動超過 50px
    },
  },
};
</script>

<style scoped>
.navbar {
  line-height: 1.5;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  z-index: 1000;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.navbar.scrolled {
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar:not(.scrolled) {
  color: white; /* 滾動前的文字顏色 */
  background-color: transparent; /* 初始透明 */
}

.logo {
  text-decoration: none; /* 移除底線 */
  display: flex;
  align-items: center;
  margin-right: 35px; /* 與其他區塊保持距離 */
}

.logo img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.logo span {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
}

.navbar.scrolled .logo span {
  color: black;
}

nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav ul li {
  margin: 0 30px;
}

nav ul li a {
  color: white; /* 設定連結為白色 */
  text-decoration: none; /* 移除下劃線 */
  transition: color 0.3s ease;
}

nav ul li a:visited {
  color: white; /* 設定訪問過的連結為白色 */
}

nav ul li a:hover {
  color: #ffcc00; /* 滑鼠懸停時的顏色 */
}

.navbar.scrolled nav ul li a {
  color: black;
}

.actions {
  display: flex;
  align-items: center;
  margin-left: auto; /* 將 actions 推到最右側 */
  padding-right: 30px; /* 增加右側間距，避免圖示被切掉 */
}

.actions button {
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  margin-left: 10px;
  color: white;
}

.navbar.scrolled .actions button {
  color: black;
}
</style>
