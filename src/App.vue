<template>
  <div id="app">
    <TopNav></TopNav>
    <router-view />
  </div>
</template>

<script>
import TopNav from "@/components/TopNav";

export default {
  components: {
    TopNav,
  },
};
</script>
