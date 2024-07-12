<script setup lang="ts">
import { useStore } from '@/stores/token'

const store = useStore();

function loggedIn(): boolean {
  return store.settings.token !== '';
}

function logOut(): void {
  store.updateSettings('')
}
</script>

<template>
  <nav class="nav">
    <div class="left-nav">
      <!--
      <RouterLink to="/">
        <img src="../../assets/logo.png" alt="Логотип" class="logo">
        <h1 class="heading">КнигоБар</h1>
      </RouterLink>
      -->
      <RouterLink to="/" class="nav-button">
        <VIcon icon="mdi-home"></VIcon>
      </RouterLink>
    </div>
    <div class="right-nav">
      <RouterLink to="/books" class="nav-button">
        <VIcon icon="mdi-bookshelf"></VIcon>
      </RouterLink>
      <RouterLink to="/login" class="nav-button" v-if="!loggedIn()">
        <VIcon icon="mdi-login"></VIcon>
      </RouterLink>
      <RouterLink to="/profile/me" class="nav-button" v-if="loggedIn()">
        <VIcon icon="mdi-account"></VIcon>
      </RouterLink>
      <RouterLink to="/" class="nav-button" v-if="loggedIn()" @click="logOut()">
        <VIcon icon="mdi-logout"></VIcon>
      </RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  position: fixed;
  left: 0;
  right: 0;
  bottom: auto;
  background-color: #9e6c68;
  border-radius: 120px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 20px;
  animation: pop-up-nav 1.5s ease-in 0s 1 normal forwards;
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
  cursor: pointer;
}

.right-nav {
  display: flex;
  align-items: center;
}

.nav-button {
  margin: 20px;
  background-color: #5A2A27;
  padding: 20px 50px;
  color: #FFFDED;
  border-radius: 120px;
}
</style>