<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
// input의 값을 반응형으로 저장합니다.
const username = ref('kim');

const goToUser = (username) => {
  // 선언형 RouterLink 대신, 조건 처리 후 이동이 가능한 프로그래밍 방식 네비게이션 예시입니다.
  const trimmedUsername = username?.trim();

  if (!trimmedUsername) {
    return;
  }

  router.push(`/users/${trimmedUsername}`);
};
</script>
<template>
  <section class="view-box">
    <p class="box-label">About.vue</p>
    <h2>About</h2>
    <div class="control-box">
      <p>사용자 페이지로 이동</p>
      <!-- v-model은 입력값과 ref 상태를 양방향으로 연결합니다. -->
      <div class="actions">
        <input
          type="text"
          name="username"
          id="username"
          v-model="username"
          placeholder="예: kim"
        />
        <button @click="goToUser(username)">이동</button>
      </div>
    </div>
  </section>
</template>
<style scoped>
.view-box {
  border: 2px solid #059669;
  border-radius: 10px;
  padding: 20px;
  background: #f7fffb;
}

.box-label {
  display: inline-block;
  margin: 0 0 12px;
  padding: 4px 8px;
  border: 1px solid #059669;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  background: #ffffff;
}

h2 {
  margin: 0 0 12px;
}

.control-box {
  border: 1px solid #a7f3d0;
  border-radius: 8px;
  padding: 16px;
  background: #ffffff;
}

p {
  margin: 0 0 12px;
}

.actions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

input,
button {
  padding: 8px 12px;
  border: 1px solid #6ee7b7;
  border-radius: 8px;
  font: inherit;
}

button {
  border-color: #059669;
  background: #ffffff;
  cursor: pointer;
}
</style>
