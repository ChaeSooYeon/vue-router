<script setup>
import useAuthStore from '@/store/useAuthStore';
import router from '@/router';
import { ref } from 'vue';

const id = ref('');
const pw = ref('');

const handleJoin = async () => {
  const redirect = '';
  const authStore = useAuthStore();
  const params = { id: id.value, pw: pw.value };
  const res = await authStore.join(params);
  if (res.status === 'success') {
    const targetRoute = redirect || { name: 'login' };
    router.push(targetRoute);
  } else {
    alert(res.message || '회원가입실패');
    // if (res.code === 'NO-USER') {
    //   alert(res.message);
    //   router.replace('/join');
    // } else if (res.code === 'NOT-MATCH-PASSWORD') {
    //   alert(res.message);
    //   router.replace('/login');
    // } else {
    //   alert(res.message || '로그인 실패');
    // }
  }
};
</script>
<template>
  <h1>회원가입</h1>
  <form class="form" @submit.prevent="handleJoin">
    <p>join</p>
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
    <button type="submit" name="btnLogin">회원가입</button>
  </form>
</template>
<style scoped></style>
