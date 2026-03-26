<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
// input의 값을 반응형으로 저장합니다.
const username = ref(null);

const goToUser = (username) => {
  // 선언형 RouterLink 대신, 조건 처리 후 이동이 가능한 프로그래밍 방식 네비게이션 예시입니다.
  router.push(`/users/${username}`);
};
</script>
<template>
  <h1>About</h1>
  <div>
    <p>go to user</p>
    <!-- v-model은 입력값과 ref 상태를 양방향으로 연결합니다. -->
    <input
      type="text"
      name="username"
      id="username"
      v-model="username"
    /><button @click="goToUser(username)"
    >
      이동
    </button>
  </div>
</template>
<style scoped></style>
