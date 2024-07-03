<script setup lang="ts">

import FaqElement from "@/components/MainPage/FaqElement.vue";
</script>

<template>
  <article>
    <h1>Часто задаваемые вопросы</h1>
    <div class="faq-container">
      <FaqElement question="Как это работает?"/>
      <FaqElement question="Как добавить книгу?"/>
      <FaqElement question="Как безопасно менять книги?"/>
    </div>
  </article>
</template>

<style scoped>
article {
  background-color: #FFFDED;
  padding: 100px 0;
}

.faq-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  color: #5A2A27;
  font-size: 60px;
  text-align: center;
  margin-bottom: 50px;
}
</style>