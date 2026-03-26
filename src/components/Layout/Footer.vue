<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goToHome = () => {
  // 코드에서 직접 이동을 제어할 때는 router.push()를 사용합니다.
  router.push('/');
};
</script>
<template>
  <h4>This is Footer</h4>
  <button @click="goToHome">goToHome</button>
</template>
<style scoped></style>
