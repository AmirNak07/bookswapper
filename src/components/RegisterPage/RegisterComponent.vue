<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo({top: 0, behavior: 'smooth'});
})
</script>

<template>
  <!--
  <div class="register-wrapper">
  </div>
  -->
  <div class="register">
    <div class="register-title-wrapper">
      <h1 class="register-title">Регистрация</h1>
      <RouterLink to="/">
        <img src="../../assets/icons/close.svg" alt="" class="register-exit">
      </RouterLink>
    </div>
    <div class="register-form-wrapper">
      <form action="" method="post" class="register-form">
        <input type="text" placeholder="Логин" class="register-form-input" required>
        <input type="password" placeholder="Пароль" class="register-form-input" required>
        <input type="text" placeholder="Отображаемое имя" class="register-form-input">
        <input type="tel" placeholder="Номер телефона" class="register-form-input" required>
        <input list="cities" placeholder="Город" class="register-form-input" required>
        <datalist id="cities">
          <!-- Надо брать данные из js(у меня не вышло) -->
          <option value="Москва"></option>
          <option value="Санкт-Петербург"></option>
          <option value="Казань"></option>
        </datalist>
        <button type="submit" class="register-form-input register-form-input-button">Создать</button>
      </form>
      <RouterLink class="go-to-login" to="/login">Авторизация</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.register-wrapper {
  background-color: #5A2A277F;
  min-height: 540%;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
}

.register {
  display: flex;
  background-color: #FFFDED;
  width: 80%;
  border-radius: 45px;
  flex-direction: column;
  padding-top: 40px;
  height: fit-content;
}

.register-title-wrapper {
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
}

.register-title {
  color: #5A2A27;
  font-size: 45px;
  align-self: center;
  padding-left: 80px;
}

.register-exit {
  padding-right: 50px;
  cursor: pointer;
}

.register-form-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;
}

.register-form {
  display: flex;
  flex-direction: column;
  width: 60%;
}

.register-form-input {
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

.register-form-input-button {
  align-self: center;
  margin-bottom: 50px;
  background-color: #5A2A27;
  color: #FFFDED;
  border: none;
  padding: 20px 30px;
  width: 20%;
  cursor: pointer;
}

.change-city {
  width: 85%;
}

.go-to-login {
  color: #5A2A27;
  font-size: 30px;
  text-decoration: underline;
}
</style>