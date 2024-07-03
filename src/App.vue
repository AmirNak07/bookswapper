<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navigation from "@/components/MainPage/Navigation.vue";
import Footer from "@/components/MainPage/Footer.vue";
</script>

<template>
  <Navigation/>
  <RouterView />
  <Footer/>
</template>

<style scoped>
</style>
