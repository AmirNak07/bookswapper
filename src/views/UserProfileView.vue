<script async setup lang="ts">
import { ApiClient } from '@/api/client'
import { useStore } from '@/stores/token'
import { useRoute } from 'vue-router'
import router from '@/router'

const apiClient = new ApiClient();
const store = useStore();
const route = useRoute();
const params = route.query;
const idParameter = params.id;
apiClient.setToken(store.settings.token);
if (typeof idParameter !== 'string') {
  router.back();
}
const profile = await apiClient.GetUser(parseInt(<string>idParameter))

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