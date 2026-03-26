<script setup>
import Footer from './components/Layout/Footer.vue';
import Nav from './components/Layout/Nav.vue';
</script>
<template>
  <h1>Hello App!</h1>
  <!-- $route는 현재 URL 정보가 반응형으로 담긴 객체입니다. -->
  <p><strong>현재 라우트 경로:</strong> {{ $route?.fullPath }}</p>
  <Nav />
  <main>
    <!-- 현재 라우트와 연결된 페이지 컴포넌트가 여기서 교체 렌더링됩니다. -->
    <RouterView />
  </main>
  <Footer />
</template>
<style scoped></style>
