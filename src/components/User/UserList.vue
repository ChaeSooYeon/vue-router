<script setup></script>
<template>
  <!-- 동적 세그먼트 :username 값은 $route.params.username 로 읽을 수 있습니다. -->
  User: {{ $route.params.username }}
</template>
<style scoped></style>
