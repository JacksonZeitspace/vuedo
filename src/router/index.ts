import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoList from '../views/TodoList.vue'
import TodoItem from '../views/TodoItem.vue'
import TodoDone from '../views/TodoDone.vue'
import TodoOnly from '../views/TodoOnly.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TodoList',
    component: TodoList
  },
  {
    path: '/todo-item',
    name: 'TodoItem',
    component: TodoItem,
    props: true
  },
  {
    path: '/todo-done',
    name: 'TodoDone',
    component: TodoDone
  },
  {
    path: '/todo-only',
    name: 'TodoOnly',
    component: TodoOnly
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
