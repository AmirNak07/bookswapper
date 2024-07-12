<script setup lang="ts">
import { useStore } from '@/stores/token'
import { ApiClient } from '@/api/client'
import { ref } from 'vue'
import { TradeRequest } from '@/api/models/trade'
import router from '@/router'

const store = useStore();
const apiClient = new ApiClient();
apiClient.setToken(store.settings.token);
const bookTitleInput = ref<HTMLInputElement | null>(null);
const bookDescriptionInput = ref<HTMLInputElement | null>(null);

async function SubmitBook() {
  const title = bookTitleInput.value?.value;
  const description = bookDescriptionInput.value?.value;
  
  if (title !== undefined && description !== undefined) {
    const data = new TradeRequest(title, description);

    const response = await apiClient.AddTrade(data);
    if (typeof response === 'string') {
      alert(response)
      return
    }
    await router.push('/books');
  }
}
</script>

<template>
  <div class="add-card-wrapper background">
    <div class="add-card">
      <div class="register-title-wrapper">
        <h1 class="login-title">Создать объявление</h1>
      </div>
      <div class="register-form-wrapper">
        <form @submit.prevent="SubmitBook()" class="register-form">
          <input type="text" placeholder="Название книги" class="register-form-input" required ref="bookTitleInput">
          <input type="text" placeholder="Описание" class="register-form-input" required ref="bookDescriptionInput">
          <button type="submit" class="register-form-input register-form-input-button">Создать</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-title {
  color: #000000;
  font-size: 45px;
  align-self: center;
}

.register-title-wrapper {
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
}

.register-form-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;
}

.add-card-wrapper {
  min-height: 180%;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
}

.add-card {
  display: flex;
  margin-top: 200px;
  background-color: #FFFDED;
  width: 85%;
  border-radius: 45px;
  flex-direction: column;
  padding-top: 40px;
  height: fit-content;
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

.register-form {
  display: flex;
  flex-direction: column;
  width: 60%;
}
</style>