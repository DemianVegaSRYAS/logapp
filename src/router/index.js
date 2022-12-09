import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

import Home from '../components/Home'
import Login from '../components/Login'
import List from '../components/List'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
  ,
  {
    path: '/',
    name: 'home',
    component: Home
  }
  ,
  {
    path: '/login',
    name: 'login',
    component: Login
  }
  ,
  {
    path: '/list',
    name: 'list',
    component: List
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
