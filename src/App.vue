<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navigation from "@/components/MainPage/Navigation.vue";
</script>

<template>
  <Navigation/>
  
  <!--
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
  -->

  <RouterView />
</template>

<style scoped>
</style>
