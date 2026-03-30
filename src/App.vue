<script setup>
import Footer from './components/Common/Footer.vue';
import Nav from './components/Common/Nav.vue';
</script>
<template>
  <div class="app-shell">
    <header class="shell-box">
      <p class="box-label">App.vue</p>
      <h1>Vue Router Practice</h1>
      <!-- $route는 현재 URL 정보가 반응형으로 담긴 객체입니다. -->
      <p class="route-path">현재 라우트 경로: {{ $route?.fullPath }}</p>
    </header>

    <Nav />

    <main class="shell-box">
      <p class="box-label">RouterView Area</p>
      <br />
      <!-- 현재 라우트와 연결된 페이지 컴포넌트가 여기서 교체 렌더링됩니다. -->
      <RouterView />
    </main>

    <!-- <Footer /> -->
  </div>
</template>
<style scoped>
.app-shell {
  max-width: 860px;
  margin: 0 auto;
  padding: 24px 16px 40px;
  color: #111827;
  font-family: Arial, sans-serif;
}

.shell-box {
  border: 2px solid #111827;
  border-radius: 10px;
  padding: 10px;
  background: #ffffff;
}

.box-label {
  display: inline-block;
  margin: 0 0 5px;
  padding: 4px 8px;
  border: 1px solid #111827;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 700;
  background: #f3f4f6;
}

h1 {
  margin: 0 0 12px;
  font-size: 32px;
}

.route-path {
  margin: 0;
  font-size: 15px;
}

main {
  margin-top: 16px;
}
</style>
