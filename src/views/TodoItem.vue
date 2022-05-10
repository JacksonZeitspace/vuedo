<template>
  <section>
    <v-card elevation="0" max-width="500" class="ma-4">
      <div class="mt-2">
        <h3>Title</h3>
        <v-text-field outlined v-model="newTitle"></v-text-field>
        <h3>Description</h3>
        <v-text-field outlined v-model="newDescription"></v-text-field>
      </div>
      <div class="d-flex row justify-space-between">
        <v-btn depressed @click="deleteTodo()" color="error">Delete</v-btn>
        <div>
          <v-btn depressed @click="goToList">Cancel</v-btn>
          <v-btn depressed @click="handleUpdateTodo" color="success" class="ml-2">Save</v-btn>
        </div>
      </div>
    </v-card>
  </section>
</template>

<script>
import Vue from 'vue'
import { mapActions } from 'vuex'

export default Vue.extend({
  props: {
    title: String,
    description: String,
    _id: String
  },
  data() {
    return {
      newTitle: this.title,
      newDescription: this.description
    }
  },
  methods: {
    ...mapActions('todo', ['deleteTodo', 'updateTodo']),
    async deleteTodo() {
      await this.deleteTodo(this._id)
      this.$router.replace('/')
    },
    async handleUpdateTodo() {
      await this.updateTodo({ title: this.newTitle, description: this.newDescription, _id: this._id })
      this.$router.replace('/')
    },
    goToList() {
      this.$router.back()
    }
  }
})
</script>
