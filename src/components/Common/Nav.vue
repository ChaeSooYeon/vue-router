<script setup>
import router from '@/router';
import useAuthStore from '@/store/useAuthStore';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const authStore = useAuthStore();
const route = useRoute();
const currentUser = ref(null);
const isSubmitting = ref(false);

const syncUser = async () => {
  currentUser.value = await authStore.getCurrentUser();
};

const handleLogout = async () => {
  if (isSubmitting.value) return;

  isSubmitting.value = true;
  const res = await authStore.logout();
  currentUser.value = null;
  isSubmitting.value = false;
  router.push({
    name: 'login',
    query: { reason: 'logout' },
  });
};

watch(
  () => route.fullPath,
  () => {
    syncUser();
  },
  { immediate: true }
);
</script>
<template>
  <nav class="nav-box">
    <p class="box-label">Nav.vue</p>
    <ul>
      <!-- RouterLink는 새로고침 없이 라우트를 바꾸는 선언형 이동 방식입니다. -->
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/my-page">MyPage</RouterLink></li>
      <li v-if="!currentUser"><RouterLink to="/login">Login</RouterLink></li>
      <li v-if="!currentUser"><RouterLink to="/join">Join</RouterLink></li>
      <li v-if="currentUser">
        <button type="button" @click="handleLogout" :disabled="isSubmitting">
          {{ isSubmitting ? '로그아웃 중...' : 'Logout' }}
        </button>
      </li>
    </ul>
    <p v-if="currentUser" class="status-text">
      현재 로그인 사용자: {{ currentUser.id }}
    </p>
    <p v-else class="status-text">현재 비로그인 상태입니다.</p>
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

button {
  display: inline-block;
  padding: 8px 12px;
  border: 1px solid #9ca3af;
  border-radius: 8px;
  color: #111827;
  background: #ffffff;
  cursor: pointer;
}

a.router-link-active {
  font-weight: 700;
  border-color: #111827;
}

.status-text {
  margin: 12px 0 0;
  font-size: 14px;
  color: #374151;
}
</style>
