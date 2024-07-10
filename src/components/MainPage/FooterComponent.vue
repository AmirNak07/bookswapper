<script setup lang="ts">

</script>

<template>
  <footer class="footer">
    <div class="footer-wrapper">
      <h1 class="footer-title">©КнигоБар</h1>
      <img src="../../assets/logo.png" alt="Логотип" class="footer-logo">
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #5A2A27;
  padding: 30px 0;
}

.footer-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.footer-title {
  margin: 0 0 0 5%;
  font-size: 45px;
}

.footer-logo {
  height: 110px;
  margin-right: 5%;
}
</style>