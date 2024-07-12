import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '@/views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'
import BooksView from '@/views/BooksView.vue'
import CreateBookView from '@/views/CreateBookView.vue'
import MeProfileView from '@/views/MeProfileView.vue'
import UserProfileView from '@/views/UserProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/books',
      name: 'books',
      component: BooksView
    },
    {
      path: '/books/add',
      name: 'addbooks',
      component: CreateBookView
    },
    {
      path: '/profile/me',
      name: 'profileMe',
      component: MeProfileView
    },
    {
      path: '/profile',
      name: 'profileUser',
      component: UserProfileView
    }
  ]
})

export default router
