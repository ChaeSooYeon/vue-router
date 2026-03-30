<template>
  <section class="child-box">
    <p class="box-label">MyPageUserInfo.vue</p>
    <h3>회원정보</h3>
    <p>마이페이지에서 확인하는 사용자 정보 영역입니다.</p>
  </section>
</template>
<style scoped>
.child-box {
  border: 2px solid #60a5fa;
  border-radius: 10px;
  padding: 16px;
  background: #eff6ff;
}

.box-label {
  display: inline-block;
  margin: 0 0 12px;
  padding: 4px 8px;
  border: 1px solid #60a5fa;
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
