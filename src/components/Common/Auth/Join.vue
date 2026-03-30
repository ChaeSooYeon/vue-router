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
  <section class="auth-box">
    <p class="box-label">Join.vue</p>
    <h2>회원가입</h2>
    <form class="form" @submit.prevent="handleJoin">
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
  </section>
</template>
<style scoped>
.auth-box {
  width: 320px;
  margin: 0 auto;
  padding: 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.box-label {
  display: inline-block;
  margin: 0 0 12px;
  padding: 4px 8px;
  border: 1px solid #111827;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  background: #f3f4f6;
}

h2 {
  margin: 0 0 16px;
}

.form {
  display: flex;
  flex-direction: column;
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

button:disabled {
  opacity: 0.7;
  cursor: default;
}
</style>
