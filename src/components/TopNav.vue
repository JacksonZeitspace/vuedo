<template>
  <header>
    <div class="d-flex justify-content-between p-2">
      <h3>Todo List</h3>
      <button class="btn btn-default" @click="showAddModal = true">+</button>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: yellow;
  padding: 0.75em;
}
</style>
