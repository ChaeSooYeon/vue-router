<template>
  <h3>User Profile</h3>
  <!-- 동적 세그먼트 :username 값은 $route.params.username 로 읽을 수 있습니다. -->
  User: {{ $route.params.username }}'s Profile
</template>
