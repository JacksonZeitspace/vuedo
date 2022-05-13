<template>
  <v-app>
    <v-app-bar app color="primary" dark>Todo List</v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'App'
})
</script>
