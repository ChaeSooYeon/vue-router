<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

// 현재 라우트 정보를 가져옵니다.
// 이 컴포넌트는 router.js의 catch-all 라우트와 연결되어 있으므로
// router.js
//     { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
// 잘못 들어온 경로가 route.params.pathMatch 에 들어올 수 있습니다.
const route = useRoute();

// pathMatch는 보통 배열 형태로 들어오므로 화면에 보기 좋게 다시 문자열 경로로 합칩니다.
// 예)
// ['abc', '123'] -> /abc/123
const wrongPath = computed(() => {
  // useRoute()가 반환한 route 객체가 바뀌면 computed 결과도 함께 다시 계산됩니다.
  const pathMatch = route.params.pathMatch;

  if (Array.isArray(pathMatch)) {
    return '/' + pathMatch.join('/');
  }

  return '/' + (pathMatch || '');
});
</script>

<template>
  <section class="view-box">
    <p class="box-label">NotFound.vue</p>
    <h2>404 Not Found</h2>
    <p>존재하지 않는 페이지입니다.</p>
    <p>잘못된 경로: {{ wrongPath }}</p>
  </section>
</template>
<style scoped>
.view-box {
  border: 2px solid #dc2626;
  border-radius: 10px;
  padding: 20px;
  background: #fef2f2;
}

.box-label {
  display: inline-block;
  margin: 0 0 12px;
  padding: 4px 8px;
  border: 1px solid #dc2626;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  background: #ffffff;
}

h2 {
  margin: 0 0 8px;
}

p {
  margin: 0 0 8px;
}

p:last-child {
  margin-bottom: 0;
}
</style>
