<script setup lang="ts">

</script>

<template>
  <article class="about">
    <div class="about-wrapper">
      <div class="about-text-wrapper">
        <h1 class="about-title">КнигоБар</h1>
        <p class="about-text">Добро пожаловать на самую крутую площадку для обмена книгами между людьми! Здесь слова летают быстрее, чем молния, и истории переплетаются как спагетти на вилке.</p>
        <p class="about-text">Мы создали этот сайт, чтобы разгонять скучные вечера и превращать их в захватывающие приключения. Забудьте о пыли на книжной полке, здесь каждая книга находит своего читателя!</p>
        <p class="about-text">Присоединяйтесь к нам, чтобы погрузиться в мир слов и открыть для себя новые литературные горизонты!</p>
      </div>
      <img src="../../assets/img/main-book.jpeg" alt="Фото о нас" class="about-image">
    </div>
  </article>
</template>

<style scoped>
.about {
  background-color: #8D5B4C;
  padding: 75px;
}

.about-wrapper {
  background-color: #5C4742;
  border-radius: 90px;
  display: flex;
}

.about-image {
  overflow: hidden;
  border-radius: 90px;
  object-fit: cover;
  width: 100%;
  height: inherit;
}

.about-text-wrapper {
  display: flex;
  flex-direction: column;
  padding: 60px 100px 80px 60px ;
}

.about-title {
  font-size: 45px;
  margin-left: 0;
}

.about-text {
  font-size: 27px;
}
</style>