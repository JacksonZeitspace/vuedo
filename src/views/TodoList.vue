<template>
  <section class="ma-2">
    <v-card
      v-for="todo in todos"
      :key="todo._id"
      max-width="500"
      class="d-flex flex-row justify-space-between align-center px-5"
    >
      <div class="d-flex flex-row align-center">
        <v-checkbox @change="handleToggleDone(todo)" v-model="todo.done"></v-checkbox>
        {{ todo.title }}
      </div>
      <v-icon @click="goToDetail(todo)">mdi-arrow-right</v-icon>
    </v-card>
    <div class="d-flex flex-row justify-space-between align-center" style="width: 500px">
      <AddTodoModal class="ma-2" />
      <div>
        <v-btn @click="goToDone" color="primary" class="mr-2">Done List</v-btn>
        <v-btn @click="goToNotDone" color="primary" class="mr-2">Todo List</v-btn>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
import { AppState, Todo } from '@/types'
import AddTodoModal from '../components/AddTodoModal.vue'

export default Vue.extend({
  components: {
    AddTodoModal
  },
  computed: mapState({
    todos: state => (state as AppState).todo.todos
  }),
  methods: {
    ...mapActions('todo', ['getTodos', 'toggleDone']),
    goToDetail(todo: Todo) {
      this.$router.push({
        name: 'TodoItem',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        params: { title: todo.title, description: todo.description, _id: todo._id! }
      })
    },
    goToDone() {
      this.$router.push({
        name: 'TodoDone'
      })
    },
    goToNotDone() {
      this.$router.push({
        name: 'TodoOnly'
      })
    },
    async handleToggleDone(todo: Todo) {
      await this.toggleDone({ _id: todo._id, done: todo.done })
    }
  },
  async mounted() {
    this.getTodos()
  }
})
</script>
