<script setup>
import useAuthStore from '@/store/useAuthStore';
import { onMounted, ref } from 'vue';

const authStore = useAuthStore();
const currentUser = ref(null);

onMounted(async () => {
  currentUser.value = await authStore.getCurrentUser();
});
</script>
<template>
  <section class="parent-box">
    <p class="box-label">MyPage.vue</p>
    <h2>My Page</h2>
    <p class="user-text">
      현재 로그인 사용자: {{ currentUser?.id || '알 수 없음' }}
    </p>
    <nav class="inner-nav">
      <RouterLink :to="{ name: 'myPage' }">Overview</RouterLink>
      <RouterLink :to="{ name: 'userInfo' }">User Info</RouterLink>
    </nav>
    <div class="child-slot">
      <p class="slot-label">MyPage Nested RouterView</p>
      <RouterView />
    </div>
  </section>
</template>
<style scoped>
.parent-box {
  border: 2px solid #2563eb;
  border-radius: 10px;
  padding: 20px;
  background: #f8fbff;
}

.box-label,
.slot-label {
  display: inline-block;
  margin: 0 0 12px;
  padding: 4px 8px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  background: #ffffff;
}

.box-label {
  border: 1px solid #2563eb;
}

.slot-label {
  border: 1px solid #93c5fd;
}

h2,
.user-text {
  margin: 0 0 10px;
}

.inner-nav {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin: 12px 0 16px;
}

a {
  display: inline-block;
  padding: 8px 12px;
  border: 1px solid #93c5fd;
  border-radius: 8px;
  color: #111827;
  text-decoration: none;
  background: #ffffff;
}

a.router-link-active {
  font-weight: 700;
  border-color: #2563eb;
}

.child-slot {
  border: 2px dashed #93c5fd;
  border-radius: 10px;
  padding: 16px;
  background: #ffffff;
}
</style>
