<script setup></script>
<template>
  <!-- 동적 세그먼트 :userNo 값은 $route.params.userNo 로 읽을 수 있습니다. -->
  User: {{ $route.params.userNo }}
</template>
<style scoped></style>
