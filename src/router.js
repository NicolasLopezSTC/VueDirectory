import { createRouter, createWebHistory } from 'vue-router'

import MainPage from '@/views/MainPage.vue'
import LoginPage from '@/views/LoginPage.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  { path: '/', name: 'Home' , component: MainPage },
  { path: '/login', name:  'Login', component: LoginPage },
    { path: '/:pathMatch(.*)*',name: 'NotFound' ,  component: NotFound },

]



export default createRouter({
  history: createWebHistory(),
  routes,
})

