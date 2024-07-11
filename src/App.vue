<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationComponent from '@/components/Shared/NavigationComponent.vue'
</script>

<template>
  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <KeepAlive>
        <Suspense>
          <component :is="Component"/>
          <template #fallback>
            loading...
          </template>
        </Suspense>
      </KeepAlive>
    </template>
  </RouterView>
  <NavigationComponent/>
</template>

<style scoped>
</style>
