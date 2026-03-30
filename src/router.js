import { createRouter, createWebHistory } from 'vue-router';

import Home from './components/Home.vue';
import About from './components/About.vue';
import NotFound from './components/Common/NotFound.vue';
import Join from './components/Common/Auth/Join.vue';
import Login from './components/Common/Auth/Login.vue';
// User Components
import MyPage from './components/User/MyPage.vue';
import MyPageUserInfo from './components/User/MyPageUserInfo.vue';
import User from './components/User/User.vue';
import UserHome from './components/User/UserHome.vue';
import UserPosts from './components/User/UserPosts.vue';
import UserProfile from './components/User/UserProfile.vue';
import useAuthStore from './store/useAuthStore';

const publicRoutes = [
  { path: '/', name: 'main', component: Home },
  { path: '/about', name: 'about', component: About },
];

const userRoutes = [
  {
    path: '/users/:username',
    component: User,
    children: [
      { path: '', name: 'userHome', component: UserHome },
      { path: 'profile', name: 'userProfile', component: UserProfile },
      { path: 'posts', name: 'userPosts', component: UserPosts },
    ],
  },
];

const myPageRoutes = [
  {
    path: '/my-page',
    component: MyPage,
    meta: {
      title: '마이페이지',
      requiresAuth: true,
    },
    children: [
      {
        path: '',
        name: 'myPage',
        component: MyPageUserInfo,
      },
      {
        path: 'user-info',
        name: 'userInfo',
        meta: {
          title: '회원정보',
          icon: 'user-info',
        },
        component: MyPageUserInfo,
      },
    ],
  },
];

const authRoutes = [
  {
    path: '/join',
    name: 'join',
    meta: {
      title: '회원가입',
    },
    component: Join,
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '로그인',
    },
    component: Login,
  },
];

const routes = [
  ...publicRoutes,
  ...userRoutes,
  ...myPageRoutes,
  ...authRoutes,
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
  // HTML5 history 모드를 사용해 주소에서 # 없이 라우팅합니다.
  history: createWebHistory(),
  routes,
});

// 네비게이션 가드
router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  const isLogin = await authStore.getLoginStatus();

  if (to.meta.requiresAuth && !isLogin) {
    return next({
      name: 'login',
      query: { redirect: to.fullPath, reason: 'auth' },
    });
  }
  next();
});

export default router;
