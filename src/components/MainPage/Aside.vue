<script setup lang="ts">

</script>

<template>
  <aside class="aside">
    <div class="aside-wrapper">
      <div class="aside-image-wrapper">
        <img src="public/img/book1.jpeg" alt="" class="aside-image" id="aside-image-1">
        <img src="public/img/book3.jpeg" alt="" class="aside-image" id="aside-image-2">
        <img src="public/img/book5.jpeg" alt="" class="aside-image" id="aside-image-3">
      </div>+
      <div class="aside-image-wrapper">
        <img src="public/img/book2.jpeg" alt="" class="aside-image" id="aside-image-4">
        <img src="public/img/book4.jpeg" alt="" class="aside-image" id="aside-image-5">
        <img src="public/img/book6.jpeg" alt="" class="aside-image" id="aside-image-6">
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