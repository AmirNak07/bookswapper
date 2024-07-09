<script setup lang="ts">
import {ref} from "vue";

const loginMenu = ref<HTMLDivElement | null>(null);

const navLoginInteract = () => {
  loginMenu.value?.classList.remove("hide")
}

const loginExitInteract = () => {
  loginMenu.value?.classList.add("hide")
}
</script>

<template>
  <nav>
    <div class="left-nav">
      <img src="/src/assets/logo.png" alt="Лого">
      <h1>КнигоБар</h1>
    </div>
    <div class="right-nav">
      <a href="#" class="ads">Объявления</a>
      <a href="#login" class="nav-login-button" @click="navLoginInteract">Вход/Регистрация</a>
    </div>
  </nav>
  <div class="login-wrapper hide" ref="loginMenu">
    <div class="login">
      <div class="login-title-wrapper">
        <h1>Вход</h1>
        <img src="/src/assets/icons/close.svg" alt="" class="login-exit" @click="loginExitInteract">
      </div>
      <div class="login-form-wrapper">
        <form action="#" method="post" class="login-form">
          <input type="text" placeholder="Логин" class="login-form-input">
          <input type="password" placeholder="Пароль" class="login-form-input">
          <input type="button" value="Войти" class="login-form-input login-form-input-button">
        </form>
        <a href="#" class="go-to-register">Нет аккаунта? <span class="go-register">Регистрация</span></a>
      </div>
    </div>
  </div>
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

.nav-login-button {
  margin: 0 50px;
  background-color: #5A2A27;
  padding: 20px 50px;
  color: #FFFDED;
  border-radius: 120px;
}

.ads {
  color: #5A2A27;
}

.login-wrapper {
  background-color: #5A2A277F;
  min-height: 540%;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
}

.login {
  display: flex;
  margin-top: 200px;
  background-color: #FFFDED;
  width: 85%;
  border-radius: 45px;
  flex-direction: column;
  padding-top: 40px;
  height: fit-content;
}

.login-title-wrapper {
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
  justify-content: space-between;
}

h1 {
  color: #5A2A27;
  font-size: 45px;
  align-self: center;
  padding-left: 80px;
}

.login-exit {
  padding-right: 50px;
  cursor: pointer;
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
}

.go-to-register {
  color: #5A2A27;
  font-size: 30px;
}

.go-register {
  text-decoration: underline;
}
</style>