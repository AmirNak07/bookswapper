<script setup lang="ts">

</script>

<template>
  <header class="header">
    <div class="header-wrapper">
      <h1 class="header-title">КнигоБар</h1>
      <p class="header-text">Погрузитесь в мир книг с КнигоБаром - местом, где слова оживают и приключения начинаются!</p>
      <a href="#" class="button-more">Узнать больше</a>
    </div>
  </header>
</template>

<style scoped>
.header {
  background-image: url("../../../public/img/header-book.jpeg");
  background-size: cover;
  justify-content: center;
  padding-bottom: 120px;
}


.header {
  background-image: url("../../../public/img/header-book.jpeg");
  background-size: cover;
  justify-content: center;
  padding-bottom: 120px;
}

.header-wrapper {
  padding-top: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 200px;
}

.header-title {
  color: #FFFDED;
  margin-bottom: 30px;
  font-size: 60px;
}

.header-text {
  color: #FFFDED;
  text-align: center;
  font-size: 40px;
}

.button-more {
  padding: 30px;
  border: 3px solid #FFFDED;
  border-radius: 90px;
}
</style>