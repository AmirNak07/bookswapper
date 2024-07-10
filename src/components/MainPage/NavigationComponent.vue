<script setup lang="ts">
</script>

<template>
  <nav class="nav">
    <div class="left-nav">
      <RouterLink to="/">
        <img src="../../assets/logo.png" alt="Логотип" class="logo">
        <h1 class="heading">КнигоБар</h1>
      </RouterLink>
    </div>
    <div class="right-nav">
      <RouterLink to="/books" class="ads">
        <VIcon class="login-exit-icon" icon="mdi-bookshelf"></VIcon>
      </RouterLink>
      <RouterLink to="/login" class="nav-login-button">
        <VIcon class="login-exit-icon" icon="mdi-account"></VIcon>
      </RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  position: fixed;
  left: 0;
  top: -250px;
  right: 0;
  bottom: auto;
  background-color: #9e6c68;
  border-radius: 120px;
  height: 110px;
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

.logo {
  height: 110px;
  padding-left: 20px;
}

.heading {
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
</style>