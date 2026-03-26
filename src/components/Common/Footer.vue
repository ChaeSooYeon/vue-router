<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goToHome = () => {
  // 코드에서 직접 이동을 제어할 때는 router.push()를 사용합니다.
  router.push('/');
};
</script>
<template>
  <footer class="footer-box">
    <p class="box-label">Footer.vue</p>
    <p>프로그램 이동 예시</p>
    <button @click="goToHome">Home으로 이동</button>
  </footer>
</template>
<style scoped>
.footer-box {
  margin-top: 16px;
  border: 2px solid #d1d5db;
  border-radius: 10px;
  padding: 16px 20px;
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

p {
  margin: 0 0 12px;
}

button {
  padding: 8px 12px;
  border: 1px solid #111827;
  border-radius: 8px;
  background: #ffffff;
  cursor: pointer;
}
</style>
