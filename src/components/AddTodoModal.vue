<template>
  <section>
    <v-dialog v-model="addTodoModal" max-width="600">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">Add Todo</v-btn>
      </template>
      <v-card class="pa-6">
        <h1>Add Todo</h1>
        <div class="mt-2">
          <h3>Title</h3>
          <v-text-field outlined v-model="title"></v-text-field>
          <h3>Description</h3>
          <v-text-field outlined v-model="description"></v-text-field>
        </div>
        <div class="d-flex justify-space-between" style="margin-top: 1em">
          <v-btn @click="addTodoModal = false">Cancel</v-btn>
          <v-btn color="primary" @click="saveTodo">Save</v-btn>
        </div>
      </v-card>
    </v-dialog>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import { createNamespacedHelpers } from 'vuex-composition-helpers'

const { useActions: useTodoActions } = createNamespacedHelpers('todo')

export default defineComponent({
  name: 'AddTodoModal',
  setup() {
    const addTodoModal = ref(false)
    const title = ref('')
    const description = ref('')

    const { createTodo } = useTodoActions(['createTodo'])

    async function saveTodo(): Promise<void> {
      await createTodo({ title: title.value, description: description.value })
      addTodoModal.value = false
    }

    return {
      addTodoModal,
      title,
      description,
      // methods
      saveTodo
    }
  }
})
</script>

<style></style>
