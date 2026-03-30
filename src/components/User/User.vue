<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>
<template>
  <!--
    이 컴포넌트는 /users/:username 부모 라우트의 공통 틀입니다.

    예)
    /users/kim
    User.vue
    └─ <RouterView /> 안에 UserHome.vue

    /users/kim/profile
    User.vue
    └─ <RouterView /> 안에 UserProfile.vue

    즉, User.vue는 바깥 레이아웃이고
    <RouterView /> 는 자식 라우트 컴포넌트가 꽂히는 자리입니다.
  -->
  <section class="parent-box">
    <p class="box-label">User.vue</p>
    <h2>User Layout</h2>
    <p class="username">username: {{ route.params.username }}</p>
    <nav class="inner-nav">
      <RouterLink :to="{ name: 'userHome', params: route.params }">Home</RouterLink>
      <RouterLink :to="{ name: 'userProfile', params: route.params }">Profile</RouterLink>
      <RouterLink :to="{ name: 'userPosts', params: route.params }">Posts</RouterLink>
    </nav>
    <div class="child-slot">
      <p class="slot-label">Nested RouterView</p>
      <RouterView />
    </div>
  </section>
</template>
<style scoped>
.parent-box {
  border: 2px solid #ea580c;
  border-radius: 10px;
  padding: 20px;
  background: #fffaf5;
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
  border: 1px solid #ea580c;
}

.slot-label {
  border: 1px solid #fdba74;
}

h2 {
  margin: 0 0 8px;
}

.username {
  margin: 0 0 16px;
}

.inner-nav {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

a {
  display: inline-block;
  padding: 8px 12px;
  border: 1px solid #fdba74;
  border-radius: 8px;
  color: #111827;
  text-decoration: none;
  background: #ffffff;
}

a.router-link-active {
  font-weight: 700;
  border-color: #ea580c;
}

.child-slot {
  border: 2px dashed #fdba74;
  border-radius: 10px;
  padding: 16px;
  background: #ffffff;
}
</style>
