<script setup></script>
<template>
  <section class="view-box">
    <p class="box-label">Home.vue</p>
    <h2>Home</h2>
    <p>가장 기본적인 정적 라우트 화면입니다.</p>
  </section>
</template>
<style scoped>
.view-box {
  border: 2px solid #2563eb;
  border-radius: 10px;
  padding: 20px;
  background: #f8fbff;
}

.box-label {
  display: inline-block;
  margin: 0 0 12px;
  padding: 4px 8px;
  border: 1px solid #2563eb;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  background: #ffffff;
}

h2,
p {
  margin: 0;
}

h2 {
  margin-bottom: 8px;
}
</style>
