<script setup lang="ts">

</script>

<template>
  <main>
    <div>
      <article>
        <div class="about-wrapper">
          <div class="about-text-wrapper">
            <h1>КнигоБар</h1>
            <p>Добро пожаловать на самую крутую площадку для обмена книгами между людьми! Здесь слова летают быстрее, чем молния, и истории переплетаются как спагетти на вилке.</p>
            <p>Мы создали этот сайт, чтобы разгонять скучные вечера и превращать их в захватывающие приключения. Забудьте о пыли на книжной полке, здесь каждая книга находит своего читателя!</p>
            <p>Присоединяйтесь к нам, чтобы погрузиться в мир слов и открыть для себя новые литературные горизонты!</p>
          </div>
          <img src="../../../public/img/main-book.jpeg" alt="">
        </div>
      </article>
    </div>
  </main>
</template>

<style scoped>
article {
  background-color: #8D5B4C;
  padding: 75px;
}

.about-wrapper {
  background-color: #5C4742;
  border-radius: 90px;
  display: flex;
}

img {
  overflow: hidden;
  border-radius: 90px;
  height: 650px;
  object-fit: cover;
  width: 100%;
}

.about-text-wrapper {
  display: flex;
  flex-direction: column;
  padding: 60px 100px 80px 60px ;
}

h1 {
  font-size: 45px;
}

p {
  font-size: 27px;
}
</style>