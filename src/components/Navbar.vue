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
      <div class="search-container">
        <input type="text" class="search-input" placeholder="Search" />
        <i class="fas fa-search search-icon"></i>
      </div>
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
  color: black;
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 100%;
  left: 0;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 10px 0;
  z-index: 1000;
  min-width: 120px;
  display: flex; /* 使用 Flexbox */
  flex-direction: column; /* 垂直排列 */

  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.dropdown:hover .dropdown-menu {
  visibility: visible;
  opacity: 1;
}

.dropdown-menu li {
  width: 100%; /* 確保每項佔據整行 */
  margin: 5px 10px; /* 在上下增加 5px 的間距 */
}

.dropdown-menu li a {
  color: black;
  text-decoration: none;
  padding: 8px 10px;
  transition: background-color 0.3s ease;
}

.dropdown-menu li a:hover {
  
  color: #ffcc00;
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
  color: black;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar:not(.scrolled) {
  background-color: transparent;
  color: white;
}

.logo {
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-right: 35px;
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
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

nav ul li a:hover {
  color: #ffcc00;
}

.navbar.scrolled nav ul li a {
  color: black;
}

.navbar.scrolled nav ul li a:hover {
  color: #ffcc00;
}
.actions {
  display: flex;
  align-items: center;
  margin-left: auto;
  padding-right: 30px;
}

.actions button {
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  margin-left: 10px;
  color: white;
  transition: color 0.3s ease; /* 添加過渡效果 */
}

.actions button:hover {
  color: #ffcc00; /* 滑鼠懸停時變為黃色 */
}


.actions .search:hover i,
.actions .login:hover i,
.actions .cart:hover i {
  color: #ffcc00; /* 確保圖標文字也會變色 */
}

.navbar.scrolled .actions button {
  color: black;
}

/* 搜尋容器樣式 */
.search-container {
  background: white;
  position: relative;
  display: inline-block;
  width: 40px; /* 初始寬度，只顯示圖標 */
  transition: width 0.4s ease; /* 寬度動畫 */
  overflow: hidden; /* 隱藏溢出的部分 */
  border: 1px solid transparent; /* 初始無邊框 */
  border-radius: 20px;
}

/* 滑鼠懸停時展開 */
.search-container:hover {
  width: 200px; /* 滑鼠懸停時展開為搜尋框寬度 */
  border-color: #ddd; /* 增加邊框顏色 */
}

/* 搜尋輸入框 */
.search-input {
  width: 100%; /* 讓寬度填滿容器 */
  padding: 5px 10px;
  border: none;
  outline: none;
  font-size: 0.9rem;
  color: #555;
  background-color: transparent;
  transition: opacity 0.3s ease; /* 增加漸變效果 */
  opacity: 0; /* 初始不可見 */
}

/* 當容器擴展時，顯示輸入框 */
.search-container:hover .search-input {
  opacity: 1; /* 輸入框變可見 */
}

/* 搜尋圖標 */
.search-icon {
  position: absolute;
  right: 12.5px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1rem;
  color: #aaa;
  cursor: pointer;
  transition: color 0.3s ease;
}

/* 滑鼠懸停圖標變色 */
.search-container:hover .search-icon {
  color: #ffcc00; /* 懸停時變為黃色 */
}
</style>
