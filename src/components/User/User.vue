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
    ├─ <RouterView /> 안에 UserHome.vue
    └─ <RouterView name="sidebar" /> 안에 UserProfile.vue

    /users/kim/profile
    User.vue
    ├─ <RouterView /> 안에 UserProfile.vue
    └─ <RouterView name="sidebar" /> 안에 UserPosts.vue

    즉, User.vue는 바깥 레이아웃이고
    기본 RouterView와 이름 있는 RouterView를 함께 두어
    자식 라우트가 여러 영역을 동시에 채울 수 있습니다.
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
    <div class="view-grid">
      <div class="child-slot">
        <p class="slot-label">Default View</p>
        <RouterView />
      </div>
      <aside class="child-slot sidebar-slot">
        <p class="slot-label">Named View: sidebar</p>
        <RouterView name="sidebar" />
      </aside>
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

.view-grid {
  display: grid;
  gap: 16px;
}

.sidebar-slot {
  background: #fff7ed;
}

@media (min-width: 720px) {
  .view-grid {
    grid-template-columns: minmax(0, 2fr) minmax(220px, 1fr);
    align-items: start;
  }
}
</style>
