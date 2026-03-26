<template>
  <section class="child-box">
    <p class="box-label">UserPosts.vue</p>
    <h3>User Posts</h3>
    <!-- 동적 세그먼트 :username 값은 $route.params.username 로 읽을 수 있습니다. -->
    <p>{{ $route.params.username }} 사용자의 게시물 화면입니다.</p>
  </section>
</template>
<style scoped>
.child-box {
  border: 2px solid #f59e0b;
  border-radius: 10px;
  padding: 16px;
  background: #fffbeb;
}

.box-label {
  display: inline-block;
  margin: 0 0 12px;
  padding: 4px 8px;
  border: 1px solid #f59e0b;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  background: #ffffff;
}

h3,
p {
  margin: 0;
}

h3 {
  margin-bottom: 8px;
}
</style>
