<script setup>
import router from '@/router';
import useAuthStore from '@/store/useAuthStore';
import { ref } from 'vue';
// login
const { redirect } = history.state;
const authStore = useAuthStore();

const id = ref('');
const pw = ref('');

const handleLogin = async () => {
  const redirect = '';
  const params = { id: id.value, pw: pw.value };
  const res = await authStore.login(params);
  if (res.status === 'success') {
    const targetRoute = redirect || { name: 'myPage' };
    router.push('my-page');
  } else {
    if (res.code === 'NO-USER') {
      alert(res.message);
      router.push('/join');
    } else if (res.code === 'NOT-MATCH-PASSWORD') {
      alert(res.message);
      router.replace('/login');
    } else {
      alert(res.message || '로그인 실패');
    }
  }
};
</script>
<template>
  <div class="container">
    <form class="form" @submit.prevent="handleLogin">
      <p>Login</p>
      <label for="userId">
        <input
          type="text"
          id="id"
          name="userId"
          v-model="id"
          placeholder="아이디"
        />
      </label>
      <label for="password">
        <input
          type="password"
          name="password"
          v-model="pw"
          placeholder="비밀번호"
        />
      </label>
      <button type="submit" name="btnLogin">로그인</button>
    </form>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
form {
  width: 320px;
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

input {
  width: 100%;
  height: 42px;
  margin-bottom: 10px;
  padding: 0 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
}
button {
  width: 100%;
  height: 44px;
  border: none;
  border-radius: 8px;
  background: black;
  color: white;
  font-size: 16px;
  cursor: pointer;
}
</style>
