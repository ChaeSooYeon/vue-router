# 라우터 시작하기

- `main.js`에서 `app.use(router)`로 라우터를 앱 전역에 등록했다.
- `router.js`에서 `createRouter`, `createWebHistory`를 사용해 SPA 라우팅 환경을 만들었다.
- `App.vue`에서는 `<RouterView />`로 현재 URL에 맞는 페이지 컴포넌트를 렌더링했다.
- `Nav.vue`에서는 `<RouterLink>`를 사용해 새로고침 없는 페이지 이동을 구현했다.
- `$route.fullPath`를 출력해 현재 라우트 정보가 반응형으로 바뀌는 것도 확인할 수 있다.

## 학습 포인트

- Vue Router는 URL과 컴포넌트를 연결하는 역할을 한다.
- `RouterLink`는 일반 `<a>` 태그와 달리 브라우저 전체 새로고침 없이 이동한다.
- `RouterView`는 현재 선택된 라우트 컴포넌트가 들어오는 자리다.

## 비교

- `createWebHistory()`는 주소가 깔끔하지만 서버 설정이 필요할 수 있다.
- `createWebHashHistory()`를 쓰면 `/#/about` 형태가 되며 서버 설정 부담은 줄지만 URL이 덜 깔끔하다.
- 페이지 이동은 `<RouterLink>` 같은 선언형 방식과 `router.push()` 같은 프로그래밍 방식으로 나눠서 생각할 수 있다.

## 이번 과정에서 함께 익힌 Vue 기본 개념

- `script setup` 문법으로 컴포넌트 코드를 더 간결하게 작성했다.
- `ref()`로 입력값 상태를 반응형으로 관리했다.
- `useRouter()`, `useRoute()` 같은 컴포저블을 통해 Composition API 방식으로 라우터 기능을 사용했다.
- `computed()`로 라우트 파라미터를 가공한 값을 반응형으로 만들었다.
- 상위 레이아웃 `App.vue` 안에 내비게이션, 본문, 푸터를 배치해 공통 UI와 페이지 영역을 분리했다.
