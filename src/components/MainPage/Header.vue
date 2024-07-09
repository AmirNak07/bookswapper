<script setup lang="ts">

</script>

<template>
  <header>
    <div>
      <h1>КнигоБар</h1>
      <p>Погрузитесь в мир книг с КнигоБаром - местом, где слова оживают и приключения начинаются!</p>
      <a href="#">Узнать больше</a>
    </div>
  </header>
</template>

<style scoped>
header {
  background-image: url("../../assets/img/header-book.jpeg");
  background-size: cover;
  justify-content: center;
  padding-bottom: 120px;
}

div {
  padding-top: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 200px;
}

h1 {
  color: #FFFDED;
  margin-bottom: 30px;
  font-size: 60px;
}

p {
  color: #FFFDED;
  text-align: center;
  font-size: 40px;
}

a {
  padding: 30px;
  border: 3px solid #FFFDED;
  border-radius: 90px;
}
</style>