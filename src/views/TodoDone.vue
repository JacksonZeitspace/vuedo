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
      <v-btn @click="goBack" color="primary" class="ma-2">Back</v-btn>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
import { AppState, Todo } from '@/types'

export default Vue.extend({
  computed: mapState({
    todos: state => (state as AppState).todo.todos.filter(todo => todo.done)
  }),
  methods: {
    ...mapActions('todo', ['toggleDone']),
    goToDetail(todo: Todo) {
      this.$router.push({
        name: 'TodoItem',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        params: { title: todo.title, description: todo.description, _id: todo._id! }
      })
    },
    goBack() {
      this.$router.back()
    },
    async handleToggleDone(todo: Todo) {
      await this.toggleDone({ _id: todo._id, done: todo.done })
    }
  }
})
</script>
