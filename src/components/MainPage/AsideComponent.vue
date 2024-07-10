<script setup lang="ts">

</script>

<template>
  <aside class="aside">
    <div class="aside-wrapper">
      <div class="aside-image-wrapper">
        <img class="aside-image" src="/src/assets/img/book-1.jpeg" alt="" id="aside-image-1">
        <img class="aside-image" src="/src/assets/img/book-3.jpeg" alt="" id="aside-image-2">
        <img class="aside-image" src="/src/assets/img/book-5.jpeg" alt="" id="aside-image-3">
      </div>
      <div class="aside-image-wrapper">
        <img class="aside-image" src="/src/assets/img/book-2.jpeg" alt="" id="aside-image-4">
        <img class="aside-image" src="/src/assets/img/book-4.jpeg" alt="" id="aside-image-5">
        <img class="aside-image" src="/src/assets/img/book-6.jpeg" alt="" id="aside-image-6">
      </div>
    </div>
  </aside>
</template>

<style scoped>
.aside {
  background-color: #FFFDED;
  padding-top: 75px;
  padding-bottom: 50px;
}

.aside-wrapper {
  display: flex;
  flex-direction: column;
}

.aside-image-wrapper {
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}

.aside-image {
  height: 400px;
  width: 50%;
  border-radius: 90px;
  margin: 0 100px 50px 0;
  overflow: hidden;
}

#aside-image-1 {
  margin-left: -22%;
}

#aside-image-3 {
  margin-right: -6%;
}

#aside-image-4 {
  margin-left: -6%;
}

#aside-image-6 {
  margin-right: -20%;
}
</style>