<script async setup lang="ts">
import { onMounted, ref } from 'vue'
import { ApiClient } from '@/api/client'
import { RegisterRequest } from '@/api/models/register'
import { LoginRequest } from '@/api/models/login'
import { useStore } from '@/stores/token'

onMounted(() => {
  window.scrollTo({top: 0, behavior: 'smooth'});
})

const store = useStore();
const apiClient = new ApiClient();
const loginInput = ref<HTMLInputElement | null>(null);
const passwordInput = ref<HTMLInputElement | null>(null);
const usernameInput = ref<HTMLInputElement | null>(null);
const cityInput = ref<HTMLInputElement | null>(null);
const cityResponse = await apiClient.GetCities();

async function register() {
  const loginData = loginInput.value?.value;
  const passwordData = passwordInput.value?.value;
  const usernameData = usernameInput.value?.value;
  const cityData = cityInput.value;
  alert(cityData)
  if (loginData != undefined && passwordData != undefined && usernameData != undefined) {
    const data = new RegisterRequest(loginData, passwordData, usernameData);
    const response = await apiClient.register(data);
    alert(JSON.stringify(response))
    const tokenResponse = await apiClient.login(new LoginRequest(loginData, passwordData));
    apiClient.setToken(tokenResponse.token);
    store.updateSettings(tokenResponse.token);
    const profile = await apiClient.GetMe();
    alert(JSON.stringify(profile))
  } else {
    alert('Поля заполнены неправильно')
  }
}
</script>

<template>
  <!--
  <div class="register-wrapper">
  </div>
  -->
  <div class="register">
    <div class="register-title-wrapper">
      <h1 class="register-title">Регистрация</h1>
    </div>
    <div class="register-form-wrapper">
      <form class="register-form" @submit.prevent="register">
        <input type="text" placeholder="Логин" class="register-form-input" required ref="loginInput">
        <input type="password" placeholder="Пароль" class="register-form-input" required ref="passwordInput">
        <input type="text" placeholder="Отображаемое имя" class="register-form-input" required ref="usernameInput">
        <datalist id="cities">
          <option v-for="item in cityResponse.data.cities" :value="item.city" :key="item.id"></option>
        </datalist>
        <input list="cities" placeholder="Город" class="register-form-input" required ref="cityInput">
        <!--
        <input type="tel" placeholder="Номер телефона" class="register-form-input" required>
        
        -->
        <button class="register-form-input register-form-input-button">
          Зарегистрироваться
        </button>
      </form>
      <RouterLink class="go-to-login" to="/login">Авторизация</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.register {
  display: flex;
  margin-top: 5%;
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
  padding: 20px 25px 20px 25px;
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
  width: 80%;
  cursor: pointer;
}

/*
.change-city {
  width: 85%;
}
*/

.go-to-login {
  color: #5A2A27;
  font-size: 30px;
  text-decoration: underline;
}
</style>