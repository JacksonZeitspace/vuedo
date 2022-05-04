<template>
  <section>
    <b-button id="show-btn" @click="$bvModal.show('modal-1')">+</b-button>
    <b-modal id="modal-1" hide-footer hide-header>
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
    </b-modal>
  </section>
</template>

<script>
export default {
  name: "Modal",
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1040;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 50vh;
  z-index: 1060;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
