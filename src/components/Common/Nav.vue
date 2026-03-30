<script setup></script>
<template>
  <nav class="nav-box">
    <p class="box-label">Nav.vue</p>
    <ul>
      <!-- RouterLink는 새로고침 없이 라우트를 바꾸는 선언형 이동 방식입니다. -->
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/my-page">MyPage</RouterLink></li>
    </ul>
  </nav>
</template>
<style scoped>
.nav-box {
  margin-top: 10px;
  border: 2px solid #d1d5db;
  border-radius: 10px;
  padding: 10px;
  background: #fafafa;
}

.box-label {
  display: inline-block;
  margin: 0 0 12px;
  padding: 4px 8px;
  border: 1px solid #6b7280;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  background: #ffffff;
}

ul {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  display: inline-block;
  padding: 8px 12px;
  border: 1px solid #9ca3af;
  border-radius: 8px;
  color: #111827;
  text-decoration: none;
  background: #ffffff;
}

a.router-link-active {
  font-weight: 700;
  border-color: #111827;
}
</style>
