import { createRouter, createWebHistory } from 'vue-router'
import { isAuthenticated } from '@/composables/useAuth'

const { isAuthenticated } = useAuth()

import MainPage from '@/views/MainPage.vue'
import LoginPage from '@/views/LoginPage.vue'
import SettingsPage from '@/views/SettingsPage.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  { path: '/', name: 'Home' , component: MainPage },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/settings', name:  'Settings', component: SettingsPage, meta: { requiresAuth: true },
 },
    { path: '/:pathMatch(.*)*',name: 'NotFound' ,  component: NotFound },

]



const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(=> {
  
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    return {name:'Login', query: { redirect: to.fullPath}}
  }
})


export default router
