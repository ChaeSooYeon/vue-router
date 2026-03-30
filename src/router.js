import { createRouter, createWebHistory } from 'vue-router';

import Home from './components/Home.vue';
import About from './components/About.vue';
import NotFound from './components/Common/NotFound.vue';
// User Components
import User from './components/User/User.vue';
import UserHome from './components/User/UserHome.vue';
import UserPosts from './components/User/UserPosts.vue';

//Auth
import useAuthStore from './store/useAuthStore';
import Login from './components/Common/Auth/Login.vue';
import Join from './components/User/Join.vue';

const routes = [
  // 정적 라우트: 고정된 URL과 컴포넌트를 1:1로 연결합니다.
  { path: '/', name: 'main', component: Home },
  { path: '/about', component: About },
  // 동적 세그먼트는 콜론으로 시작
  {
    path: '/users/:username',
    component: User,
    children: [
      // path: '' 는 "/users"를 만드는 것이 아니라,
      // 부모 경로 /users/:username 이 이미 맞았을 때 보여줄 기본 자식 화면입니다.
      // 그래서 최종 주소는 /users/:username 형태가 됩니다.
      { path: '', component: UserHome },
      // 최종 주소: /users/:username/posts
      { path: 'posts', component: UserPosts },
    ],
  },
  // 마이페이지
  {
    path: '/my-page',
    name: 'myPage',
    meta: {
      title: '마이페이지',
      requiresAuth: true,
    },
    component: UserHome,
    children: [
      {
        path: 'user-info',
        name: 'userInfo',
        meta: {
          title: '회원정보',
          icon: 'user-info',
        },
        // component: () => import('@/pages/myPage/UserInfo.vue'),
      },
    ],
  },
  // 회원가입
  {
    path: '/join',
    name: 'join',
    meta: {
      title: '회원가입',
    },
    component: Join,
  },
  // 로그인
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '로그인',
    },
    component: Login,
  },
  /* catch-all 라우트*/
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
  // HTML5 history 모드를 사용해 주소에서 # 없이 라우팅합니다.
  history: createWebHistory(),
  routes,
});

// 네비게이션 가드
router.beforeEach(async (to, from, next) => {
  const { isLogin } = useAuthStore();
  if (to.meta.requiresAuth && !isLogin) {
    return next({
      name: 'login',
      state: { redirect: to.fullPath },
    });
  }
  next();
});

export default router;
