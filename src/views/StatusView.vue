<script setup lang="ts">
import { ApiClient } from '@/api/client'

const apiClient = new ApiClient();

const status = await apiClient.Ping();

function getEnvironment(): string {
  if (import.meta.env !== undefined) {
    return 'development';
  }
  return 'prod';
}
</script>

<template>
  Status: {{status}}
  
  Environment: {{getEnvironment()}}
</template>

<style scoped>

</style>