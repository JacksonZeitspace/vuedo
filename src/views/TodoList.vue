<template>
  <section>
    <div class="col-md-6">
      <div class="card" v-for="todo in todos" :key="todo._id">
        <div class="card-body">
          <div class="d-flex align-items-center justify-content-between">
            <div>{{ todo.title }}</div>
            <div>
              <router-link
                :to="{
                  name: 'TodoItem',
                  params: { title: todo.title, description: todo.description },
                }"
                tag="button"
                class="btn btn-link"
                >></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-button id="show-btn" @click="$bvModal.show('modal-1')">+</b-button>
    <Modal id="modal-1" />
    <!-- <b-modal id="modal-1" hide-footer hide-header>
      <div class="d-block">
        <h3>Add Todo</h3>
        <input
          class="form-control"
          id="title"
          placeholder="ex: clean car"
          v-model="title"
        />
        <h3>Description</h3>
        <input
          class="form-control"
          id="description"
          placeholder=""
          v-model="description"
        />
      </div>
      <div class="d-flex justify-content-between" style="margin-top: 1em">
        <b-button @click="$bvModal.hide('modal-1')">Cancel</b-button>
        <b-button variant="primary" @click="saveTodo()">Save</b-button>
      </div>
    </b-modal> -->
  </section>
</template>

<script>
import { todosApi } from "@/apiCalls/todos.js";
// import Modal from "../components/AddTodoModal.vue";

export default {
  // components: {
  //   Modal,
  // },
  data() {
    return {
      todos: [],
      showAddModal: false,
      title: "",
      description: "",
    };
  },
  methods: {
    showModal() {
      this.showAddModal = true;
    },
    closeModal() {
      this.showAddModal = false;
    },
    async saveTodo() {
      console.log(this.title);
      console.log(this.description);
      await todosApi.createTodo({
        title: this.title,
        description: this.description,
      });
      this.todos = await todosApi.getTodos();
      this.$bvModal.hide("modal-1");
    },
  },
  async mounted() {
    this.todos = await todosApi.getTodos();
    console.log(this.todos);
  },
};
</script>
