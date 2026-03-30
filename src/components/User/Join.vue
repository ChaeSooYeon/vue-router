<script setup>
import useAuthStore from '@/store/useAuthStore';
import router from '@/router';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const authStore = useAuthStore();
const route = useRoute();
const id = ref('');
const pw = ref('');
const isSubmitting = ref(false);

const handleJoin = async () => {
  if (isSubmitting.value) return;

  isSubmitting.value = true;
  const params = { id: id.value, pw: pw.value };
  const res = await authStore.join(params);

  isSubmitting.value = false;

  if (res.status === 'success') {
    alert(res.message || '회원가입이 완료되었습니다.');
    const redirectPath =
      typeof route.query.redirect === 'string' ? route.query.redirect : '';
    //history.state.redirect

    router.push({
      name: 'login',
      query: {
        ...(redirectPath ? { redirect: redirectPath } : {}),
        ...(route.query.reason ? { reason: route.query.reason } : {}),
      },
    });
  } else {
    alert(res.message || '회원가입실패');
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
    <button type="submit" name="btnLogin" :disabled="isSubmitting">
      {{ isSubmitting ? '가입 중...' : '회원가입' }}
    </button>
  </form>
</template>
<style scoped></style>
