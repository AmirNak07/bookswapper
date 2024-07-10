<script setup lang="ts">

import LoginComponent from '@/components/LoginView/LoginComponent.vue'
</script>

<template class="page">
  <img src="../assets/img/header-book.jpeg" alt="background" width="100%" height="100%">
  <LoginComponent class="container"/>
</template>

<style scoped>
.container {
  position: absolute;
  top: 10%;
  left: 10%;
  bottom: 10%;
  right: 10%;
}

.page {
  position: relative;
}
</style>