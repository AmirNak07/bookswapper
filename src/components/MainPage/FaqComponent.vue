<script setup lang="ts">

import FaqQuestion from '@/components/MainPage/FaqQuestionComponent.vue'
</script>

<template>
  <article class="faq">
    <h1 class="faq-title">Часто задаваемые вопросы</h1>
    <div class="faq-wrapper">
      <div class="faq-question-wrapper">
        <FaqQuestion question="Как это работает?" answer="На нашем сайте вы можете обмениваться книгами с другими людьми, находить интересные издания и делиться своими впечатлениями."/>
        <FaqQuestion question="Как добавить книгу?" answer="Чтобы добавить книгу, просто зарегистрируйтесь на платформе, заполните информацию о себе и о книге."/>
        <FaqQuestion question="Как безопасно менять книги?" answer="Мы рекомендуем встречаться с партнером обмена в общественном месте и проверять книги перед сделкой. Будьте бдительны и доверяйте интуиции!"/>
      </div>
    </div>
  </article>
</template>

<style scoped>
.faq {
  background-color: #FFFDED;
  padding: 100px 0;
}

.faq-question-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.faq-title {
  color: #5A2A27;
  font-size: 60px;
  text-align: center;
  margin-bottom: 50px;
}
</style>