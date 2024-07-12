<script setup lang="ts">
defineProps<{
  title: string
  text: string
  creator: string
}>()
</script>

<template>
  <article class="card">
    <div class="card-title-wrapper">
      <h2 class="card-title">{{title}}</h2>
    </div>
    <p class="card-text">{{text}}</p>
    <div class="card-footer">
      <p class="card-creator">{{creator}}</p>
    </div>
  </article>
</template>

<style scoped>
.card {
  background-color: #8D5B4C;
  border-radius: 20px;
  margin: 25px 0 25px 0;
  padding: 30px;
  cursor: pointer;
  overflow-x:scroll
}

.card-title-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 0 30px 0;
}

.card-title {
  font-size: 25px;
  margin: 0;
}

.card-author {
  font-family: "Montserrat-Regular", sans-serif;
  font-weight: 300;
  margin: 0;
}

.card-text {
  font-size: 20px;
  margin: 30px 0 60px 0;
}

.card-footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 60px 0 0 0;
}

.card-date {
  font-size: 20px;
  margin: 0;
}

.card-creator {
  font-size: 20px;
  margin: 0;
}
</style>