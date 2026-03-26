<script setup></script>
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
  <h3>> User</h3>
  <nav>
    <RouterLink to="profile">Profile</RouterLink> |
    <RouterLink to="posts">Posts</RouterLink>
  </nav>
  <RouterView />
</template>
<style scoped></style>
