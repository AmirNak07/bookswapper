<script setup lang="ts">

import BookComponent from '@/components/BooksView/BookComponent.vue'
import { useStore } from '@/stores/token'
import { ApiClient } from '@/api/client'

const store = useStore();
const apiClient = new ApiClient();
apiClient.setToken(store.settings.token);
const books = await apiClient.GetTrades();
</script>

<template>
  <div class="background">
    <div>
      <section class="search-wrapper">
        <div class="search">
          <h1 class="search-title-books">Книги:</h1>
          <form action="" method="get" class="search-form">
            <input type="text" placeholder="Поиск:" class="search-title">
            <button type="submit" class="search-button"> </button>
          </form>

          <RouterLink to="/books/add" class="add-card-button">
            <p id="add-card-button">Создать объявление</p>
          </RouterLink>
        </div>
      </section>
      <!-- Card with book -->
      <div class="card-wrapper">
        <div class="card-book-wrapper">
          <!-- Каждый новый card создаётся из данных с БД -->
          <ul v-if="typeof books !== 'string'">
            <BookComponent :key="book.id" v-for="book in books.data.trades" :title="book.bookname"
                           :creator="book.author_name"
                           :text="book.description"/>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Base */

.books-background {
  background-image: url("/src/assets/img/background.jpg");
  background-repeat: repeat-y;
}

/* Nav */
.nav {
  background-color: #5A2A27;
}

.heading {
  color: #FFFDED;
}

.ads {
  color: #FFFDED;
}

.profile {
  background-color: #FFFDED;
  color: #5A2A27;
}

/* Section (search) */

.search-wrapper {
  margin-bottom: 25px;
  display: flex;
  justify-content: center;
}

.search {
  background-image: none;
  height: auto;
  padding-top: 180px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
}

.search-title-books {
  color: #5A2A27;
  font-size: 35px;
  margin: 0 10px;
}

.search-form {
  background-color: #5C4742;
  height: 45px;
  width: 70%;
  border-radius: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  margin: 0 10px;
}

::placeholder {
  color: #FFFDED;
}

.search-title {
  margin: 0;
  background-color: #5C4742;
  border: none;
  font-size: 20px;
  width: 95%;
}

.search-button {
  height: 27px;
  width: 27px;
  border: none;
  background-color: #5C4742;
  cursor: pointer;
}

.add-card-button {
  background-color: #5A2A27;
  margin: 0 10px;
  border-radius: 60px;
  padding: 10px;
  font-size: 20px;
  width: 20%;
  cursor: pointer;
  text-align: center;
}

.register-form > ::placeholder {
  color: #5A2A27;
}

/* Article (Card with books) */

.card-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}

.card-book-wrapper {
  display: flex;
  flex-direction: column;
  align-content: space-between;
  width: 90%;
}

/* Page navigation */

.page-navigation {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}

.change-page-button {
  background-color: #5C4742;
  color: #FFFDED;
  border: none;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  margin: 0 20px;
  font-size: 20px;
  cursor: pointer;
  justify-content: center;
  display: flex;
  align-items: center;
}

.selected {
  background-color: #8D5B4C;
}

/* Add ads */

.add-card-wrapper {
  background-color: #5A2A277F;
  min-height: 180%;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
}

.add-card {
  display: flex;
  margin-top: 200px;
  background-color: #FFFDED;
  width: 85%;
  border-radius: 45px;
  flex-direction: column;
  padding-top: 40px;
  height: fit-content;
}

.register-form-input-button {
  margin: 20px 0;
}
</style>