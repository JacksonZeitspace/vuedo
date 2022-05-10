import Vue from 'vue'
import Vuex from 'vuex'
import { TodoStore } from './todo'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    todo: TodoStore
  }
})
