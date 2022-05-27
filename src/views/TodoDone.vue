<template>
  <section class="ma-2">
    <v-card
      v-for="todo in doneTodos"
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
import { computed, defineComponent } from '@vue/composition-api'
import { createNamespacedHelpers } from 'vuex-composition-helpers'
import { Todo } from '@/types'

const { useActions: useTodoActions, useState: useTodoState } = createNamespacedHelpers('todo')

export default defineComponent({
  setup(props, context) {
    const { todos } = useTodoState(['todos'])
    const { toggleDone } = useTodoActions(['toggleDone'])

    const doneTodos = computed(() => todos.value.filter((todo: Todo) => todo.done))

    const goToDetail = (todo: Todo): void => {
      context.root.$router.push({
        name: 'TodoItem',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        params: { title: todo.title, description: todo.description, _id: todo._id! }
      })
    }

    const goBack = (): void => context.root.$router.back()

    const handleToggleDone = async (todo: Todo): Promise<void> => await toggleDone({ _id: todo._id, done: todo.done })

    return {
      doneTodos,
      goToDetail,
      goBack,
      handleToggleDone
    }
  }
})
</script>
