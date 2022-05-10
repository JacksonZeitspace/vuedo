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
import Vue from 'vue'
import { mapActions } from 'vuex'

export default Vue.extend({
  name: 'AddTodoModal',
  data() {
    return {
      addTodoModal: false,
      title: '',
      description: ''
    }
  },
  methods: {
    ...mapActions('todo', ['createTodo']),
    async saveTodo(): Promise<void> {
      await this.createTodo({ title: this.title, description: this.description })
      this.addTodoModal = false
    }
  }
})
</script>

<style></style>
