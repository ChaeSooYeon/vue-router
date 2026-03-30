import { createRouter, createWebHistory } from 'vue-router';
import useAuthStore from './store/useAuthStore';

import Login from './components/Common/Auth/Login.vue';
import Join from './components/Common/Auth/Join.vue';
import UserHome from './components/User/UserHome.vue';

const routes = [
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
    path: '/sign-up',
    name: 'signUp',
    meta: {
      title: '회원가입',
    },
    component: Join,
  },
  // 로그인
  {
    path: '/login',
    name: 'signIn',
    meta: {
      title: '로그인',
    },
    component: Login,
  },
];

const router = createRouter({
  // HTML5 history 모드를 사용해 주소에서 # 없이 라우팅합니다.
  history: createWebHistory(),
  routes,
});

// 네비게이션 가드
router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  if (to.meta.requiresAuth && !authStore.isLogin) {
    return next({
      name: 'signIn',
      state: { redirect: to.fullPath },
    });
  }
  next();
});

export default router;
