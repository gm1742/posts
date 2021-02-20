import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Posts.vue'
import Post from "../views/Post";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:id',
    name: 'Post',
    component: Post
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
