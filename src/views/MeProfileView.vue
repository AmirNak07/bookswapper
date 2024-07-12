<script async setup lang="ts">
import { ApiClient } from '@/api/client'
import { useStore } from '@/stores/token'
import router from '@/router'
import { useRoute } from 'vue-router'
import type { UserResponse } from '@/api/models/user'

const apiClient = new ApiClient();
const store = useStore();
apiClient.setToken(store.settings.token);
const profile = await apiClient.GetMe();

</script>

<template>
  <div class="background">
    <div class="container" v-if="typeof profile === 'string'">
      Error: {{profile}}
    </div>
    <div class="container" v-else>
      <h1>{{profile.data.username}}</h1>
      <p>{{profile.data.login}}</p>
      <p> Био: {{profile.data.biography}} </p>
      <p> Телефон: {{profile.data.phone_number}} </p>
      <p> Город: {{profile.data.city}} </p>
      <p> На сайте с: {{profile.data.join_date}}</p>
    </div>
  </div>
</template>

<style scoped>
</style>