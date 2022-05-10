<template>
  <section class="ma-2">
    <v-card
      v-for="todo in todos"
      :key="todo._id"
      max-width="500"
      class="d-flex flex-row justify-space-between align-center pa-5"
      @click="goToDetail(todo)"
    >
      <div>{{ todo.title }}</div>
      <v-icon>mdi-arrow-right</v-icon>
    </v-card>
    <AddTodoModal class="ma-2" />
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
    ...mapActions('todo', ['getTodos']),
    goToDetail(todo: Todo) {
      this.$router.push({
        name: 'TodoItem',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        params: { title: todo.title, description: todo.description, _id: todo._id! }
      })
    }
  },
  async mounted() {
    this.getTodos()
  }
})
</script>
