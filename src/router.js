import { createRouter, createWebHistory } from 'vue-router';

import Home from './components/Home.vue';
import About from './components/About.vue';
import NotFound from './components/Common/NotFound.vue';
// User Components
import User from './components/User/User.vue';
import UserHome from './components/User/UserHome.vue';
import UserPosts from './components/User/UserPosts.vue';
import UserProfile from './components/User/UserProfile.vue';

const routes = [
  // 정적 라우트: 고정된 URL과 컴포넌트를 1:1로 연결합니다.
  { path: '/', component: Home },
  { path: '/about', component: About },
  // 동적 세그먼트는 콜론으로 시작
  {
    // 부모 라우트:
    // /users/:username 이 먼저 매칭되면 User 컴포넌트가 바깥 틀로 렌더링됩니다.
    //
    // 그림으로 보면:
    // /users/kim
    // User.vue
    // └─ <RouterView /> 안에 UserHome.vue
    //
    // /users/kim/profile
    // User.vue
    // └─ <RouterView /> 안에 UserProfile.vue
    path: '/users/:username',
    component: User,
    children: [
      // path: '' 는 "/users"를 만드는 것이 아니라,
      // 부모 경로 /users/:username 이 이미 맞았을 때 보여줄 기본 자식 화면입니다.
      // 그래서 최종 주소는 /users/:username 형태가 됩니다.
      { path: '', component: UserHome },
      // 최종 주소: /users/:username/profile
      { path: 'profile', component: UserProfile },
      // 최종 주소: /users/:username/posts
      { path: 'posts', component: UserPosts },
    ],
  },
  /* catch-all 라우트:
  위에서 정의한 어떤 경로와도 일치하지 않는 주소를 마지막에 전부 받습니다.
  
  `pathMatch`는 "매칭된 값을 저장하는 파라미터 이름"이고,
  실제로 모든 경로를 잡는 역할은 `(.*)*` 패턴이 합니다.
  
  예)
  /hello -> route.params.pathMatch === ['hello']
  /abc/123 -> route.params.pathMatch === ['abc', '123']
  
  즉, pathMatch와 catch-all은 같은 뜻이 아니라:
  - catch-all: 없는 경로를 전부 받는 방식
  - pathMatch: 그 값을 담아두는 변수 이름
  
  없는 페이지 처리는 보통 아래 한 줄처럼 catch-all 라우트로 처리합니다.
  */
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  // `/user-`로 시작하는 모든 것을 매칭하고 `route.params.afterUser`에 넣습니다
  // { path: '/user-:afterUser(.*)', component: UserGeneric },
];

const router = createRouter({
  // HTML5 history 모드를 사용해 주소에서 # 없이 라우팅합니다.
  history: createWebHistory(),
  routes,
});

export default router;
