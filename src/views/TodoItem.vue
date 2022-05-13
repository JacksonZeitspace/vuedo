<template>
  <section>
    <v-card elevation="0" max-width="500" class="ma-4">
      <div class="mt-2">
        <h3>Title</h3>
        <v-text-field outlined v-model="form.title"></v-text-field>
        <h3>Description</h3>
        <v-text-field outlined v-model="form.description"></v-text-field>
      </div>
      <div class="d-flex row justify-space-between">
        <v-btn depressed @click="handleDeleteTodo" color="error">Delete</v-btn>
        <div>
          <v-btn depressed @click="goToList">Cancel</v-btn>
          <v-btn depressed @click="handleUpdateTodo" color="success" class="ml-2">Save</v-btn>
        </div>
      </div>
    </v-card>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'
import { createNamespacedHelpers } from 'vuex-composition-helpers'

const { useActions: useTodoActions } = createNamespacedHelpers('todo')

export default defineComponent({
  props: {
    title: String,
    description: String,
    _id: String
  },
  setup(props, context) {
    const form = reactive({
      title: props.title,
      description: props.description
    })

    const { deleteTodo, updateTodo } = useTodoActions(['deleteTodo', 'updateTodo'])

    async function handleDeleteTodo() {
      await deleteTodo(props._id)
      context.root.$router.back()
    }

    async function handleUpdateTodo() {
      await updateTodo({ title: form.title, description: form.description, _id: props._id })
      context.root.$router.back()
    }

    function goToList() {
      context.root.$router.back()
    }

    return {
      form,
      // methods
      goToList,
      handleDeleteTodo,
      handleUpdateTodo
    }
  }
})
</script>
