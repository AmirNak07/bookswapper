<script setup lang="ts">
defineProps<{
  question: string
}>()
</script>

<template>
  <div>
    <p>Как это работает?</p>
    <img src="/public/icons/checkmark.svg" alt="" class="faq-question-checkmark">
  </div>
</template>

<style scoped>
div {
  background-color: #5C4742;
  display: flex;
  justify-content: space-between;
  width: 80%;
  border-radius: 40px;
  padding: 10px 50px;
  margin: 15px 0;
}

p {
  font-size: 50px;
}
</style>