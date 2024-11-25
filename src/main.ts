import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 引入你的 router 配置

const app = createApp(App);

app.use(router); // 將 router 加到 Vue 應用中
app.mount('#app');
