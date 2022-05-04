<template>
  <section>
    <div class="col-md-6">
      <div class="card">
        <div class="card-body">
          <form>
            <div class="form-group">
              <label for="title">Title</label>
              <input
                class="form-control"
                id="title"
                placeholder="ex: clean car"
                v-model="newTitle"
              />
            </div>
            <div class="form-group">
              <label for="description">Description</label>
              <input
                class="form-control"
                id="description"
                v-model="newDescription"
              />
            </div>
            <div class="d-flex row justify-content-between">
              <button class="btn btn-danger" @click="deleteTodo()">
                Delete
              </button>
              <div>
                <router-link to="/" tag="button" class="btn btn-secondary"
                  >Cancel</router-link
                >
                <!-- <button class="btn btn-secondary">Cancel</button> -->
                <button type="submit" class="btn btn-primary">Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { todosApi } from "@/apiCalls/todos.js";

export default {
  props: {
    title: String,
    description: String,
  },
  data() {
    return {
      newTitle: this.title,
      newDescription: this.description,
      savedTitle: this.title,
    };
  },
  async mounted() {
    console.log(this.title);
  },
  methods: {
    deleteTodo() {
      console.log("delete");
      console.log(this.savedTitle);
      todosApi.deleteTodo(this.savedTitle);
      this.$router.replace("/");
    },
  },
};
</script>
