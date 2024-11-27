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
        <li class="dropdown">
	  <span>所有商品</span>
	  <ul class="dropdown-menu">
	    <li><router-link to="/products?category=頭飾">頭飾</router-link></li>
	    <li><router-link to="/products?category=耳飾">耳飾</router-link></li>
	    <li><router-link to="/products?category=頸飾">頸飾</router-link></li>
	    <li><router-link to="/products?category=手部飾品">手部飾品</router-link></li>
	    <li><router-link to="/products?category=戒指">戒指</router-link></li>
	    <li><router-link to="/products?category=腳飾">腳飾</router-link></li>
	    <li><router-link to="/products?category=胸飾">胸飾</router-link></li>
	    <li><router-link to="/products?category=腰飾">腰飾</router-link></li>
    	    <li><router-link to="/products?category=身體裝飾">身體裝飾</router-link></li>
	  </ul>
	</li>
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
.dropdown {
  position: relative;
}

.dropdown-menu {
  color: black; /* 未點擊和已點擊時的顏色一致 */
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: rgba(255, 255, 255, 0.7); /* 添加透明背景 */
  border: 1px solid #ddd; /* 邊框 */
  border-radius: 8px; /* 圓角邊框 */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 10px 0;
  z-index: 1000;
  min-width: 150px;
  transition: opacity 0.3s ease, visibility 0.3s ease; /* 淡入淡出效果 */
}

.dropdown-menu li {
  margin: 0;
}

.dropdown-menu li a {
  color: black;
  text-decoration: none;
  padding: 10px 15px;
  display: block;
  transition: background-color 0.3s ease;
}

.dropdown-menu li a:hover {
  background-color: #f5f5f5;
  color: #007bff; /* 滑鼠懸停時文字顏色 */
}

.dropdown:hover .dropdown-menu {
  opacity: 1; /* 滑鼠懸停時顯示 */
  display: block;
}
.dropdown-menu li a:visited {
  color: black; /* 確保已訪問的顏色不變 */
}

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
