<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo({top: 0, behavior: 'smooth'});
})
</script>

<template>
  <div class="login">
    <div class="login-title-wrapper">
      <h1 class="login-title">Вход</h1>
    </div>
    <div class="login-form-wrapper">
      <form action="/api/register" method="post" class="login-form">
        <input name="login" type="text" placeholder="Логин" class="login-form-input">
        <input name="password" type="password" placeholder="Пароль" class="login-form-input">
        <input type="submit" value="Войти" class="login-form-input login-form-input-button">
      </form>
      <RouterLink to="/register" class="go-to-register">Нет аккаунта? <span class="go-register">Регистрация</span></RouterLink>
    </div>
  </div>
</template>

<style scoped>
.login {
  display: flex;
  margin-top: 5%;
  background-color: #FFFDED;
  width: 65%;
  border-radius: 45px;
  flex-direction: column;
  padding-top: 40px;
  height: fit-content;
}

.login-title-wrapper {
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
}

.login-title {
  color: #000000;
  font-size: 45px;
  align-self: center;
  padding-left: 80px;
}

.login-form-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;
}

.login-form {
  display: flex;
  flex-direction: column;
  width: 60%;
}

.login-form-input {
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px 0 20px 25px;
  width: 80%;
  border-radius: 15px;
  border: 3px solid #5A2A27;
  background-color: #FFFDED;
  font-size: 25px;
  color: #5A2A27;
}

/* Для placeholder */

::placeholder {
  color: #5A2A27;
}

.login-form-input-button {
  align-self: center;
  margin-bottom: 50px;
  background-color: #5A2A27;
  color: #FFFDED;
  border: none;
  padding: 20px 30px;
  width: 20%;
  cursor: pointer;
}

.go-to-register {
  color: #5A2A27;
  font-size: 30px;
}

.go-register {
  text-decoration: underline;
}
</style>