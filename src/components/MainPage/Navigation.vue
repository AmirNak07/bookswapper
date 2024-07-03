<script setup lang="ts">

</script>

<template>
  <nav>
    <div class="left-nav">
      <img src="/public/logo.png" alt="Лого">
      <h1>КнигоБар</h1>
    </div>
    <div class="right-nav">
      <a href="#" class="ads">Объявления</a>
      <a href="#" class="login">Вход/Регистрация</a>
    </div>
  </nav>
</template>

<style scoped>
nav {
  position: fixed;
  left: 0;
  top: -250px;
  right: 0;
  bottom: auto;
  background-color: #FFFDED;
  border-radius: 120px;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 20px;animation: pop-up-nav 1.5s ease-in 0s 1 normal forwards;
}

@keyframes pop-up-nav {
  from {
    top: -250px;
  }
  to {
    top: 0;
  }
}

.left-nav {
  display: flex;
  align-items: center;
}

.right-nav {
  display: flex;
  align-items: center;
}

img {
  height: 110px;
  padding-left: 20px;
}

h1 {
  color: #5A2A27;
  font-size: 30px;
  margin: 0;
}

.login {
  margin: 0 50px;
  background-color: #5A2A27;
  padding: 20px 50px;
  color: #FFFDED;
  border-radius: 120px;
}

.ads {
  color: #5A2A27;
}
</style>