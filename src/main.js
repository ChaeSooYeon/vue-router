import { createApp } from 'vue';
import router from './router';
import App from './App.vue';

const app = createApp(App);
// router를 플러그인으로 등록해야 RouterView, RouterLink, $route, $router를 사용할 수 있습니다.
app.use(router);
app.mount('#app');

// use(router) : router 플러그인 등록.
// 이 플러그인이 하는 일
// 1. RouterView와 RouterLink 컴포넌트를 전역 등록.
// 2. 전역 $router와 $route 속성을 추가.
// 3. useRouter()와 useRoute() 컴포저블을 사용할 수 있게 함.
// 4. 라우터가 초기 라우트를 해석하도록 트리거.
