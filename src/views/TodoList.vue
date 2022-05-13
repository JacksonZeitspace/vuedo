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
import { defineComponent, onMounted } from '@vue/composition-api'
import { createNamespacedHelpers } from 'vuex-composition-helpers'
// import { useRouter } from 'vue-router'
import { Todo } from '@/types'
import AddTodoModal from '../components/AddTodoModal.vue'

const { useActions: useTodoActions, useState: useTodoState } = createNamespacedHelpers('todo')

export default defineComponent({
  components: {
    AddTodoModal
  },
  setup(props, context) {
    const { todos } = useTodoState(['todos'])
    const { getTodos } = useTodoActions(['getTodos'])

    // const router = useRouter()

    onMounted(async () => {
      await getTodos()
    })

    function goToDetail(todo: Todo) {
      // note: root is not available in vue3 and the router will be accessed with useRouter from the new vue-router see commented out code above and below for usage
      // If you are using nuxt, you can use the @nuxt/composition api package and import useRouter from there as well
      context.root.$router.push({
        name: 'TodoItem',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        params: { title: todo.title, description: todo.description, _id: todo._id! }
      })
      // router.push({
      //   name: 'TodoItem',
      //   // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      //   params: { title: todo.title, description: todo.description, _id: todo._id! }
      // })
    }

    return {
      goToDetail,
      todos
    }
  }
})
</script>
