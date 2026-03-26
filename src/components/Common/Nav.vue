<script setup></script>
<template>
  <nav>
    <ul>
      <!-- RouterLink는 새로고침 없이 라우트를 바꾸는 선언형 이동 방식입니다. -->
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/about">About</RouterLink></li>
      <li><RouterLink to="/users">Users</RouterLink></li>
    </ul>
  </nav>
</template>
<style scoped></style>
