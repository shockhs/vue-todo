import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import About from '../views/About'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/todos',
    name: 'Todos',
    component: About,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  routes
})


router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const currentUser = store.state.auth.is_authenticated;
  console.log(currentUser);
  if (requiresAuth && !currentUser) { next('/login'); }
  else if (to.path === '/login' && currentUser) { next('/') }
  else { next() }
})






export default router
