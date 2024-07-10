<script setup lang="ts">

import NavigationComponent from '@/components/MainPage/NavigationComponent.vue'
import FooterComponent from '@/components/MainPage/FooterComponent.vue'
import FaqComponent from '@/components/MainPage/FaqComponent.vue'
import JoinComponent from '@/components/MainPage/JoinComponent.vue'
import AsideComponent from '@/components/MainPage/AsideComponent.vue'
import HeaderComponent from '@/components/MainPage/HeaderComponent.vue'
</script>

<template>
  <NavigationComponent/>
  <HeaderComponent/>
  <main>
    <AsideComponent/>
    <JoinComponent/>
    <FaqComponent/>
  </main>
  <FooterComponent/>
</template>

<style scoped>

</style>