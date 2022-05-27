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
    const { getTodos, toggleDone } = useTodoActions(['getTodos', 'toggleDone'])

    // const router = useRouter()

    onMounted(async (): Promise<void> => {
      await getTodos()
    })

    const goToDetail = (todo: Todo): void => {
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

    const goToDone = (): void => {
      context.root.$router.push({
        name: 'TodoDone'
      })
    }

    const goToNotDone = (): void => {
      context.root.$router.push({
        name: 'TodoOnly'
      })
    }

    const handleToggleDone = async (todo: Todo): Promise<void> => await toggleDone({ _id: todo._id, done: todo.done })

    return {
      todos,
      goToDetail,
      goToDone,
      goToNotDone,
      handleToggleDone
    }
  }
})
</script>
