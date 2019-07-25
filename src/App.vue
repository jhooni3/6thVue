<template>
  <div>
    <Loading v-if="this.$store.state.isLoading"></Loading>
    <router-view></router-view>

  </div>
</template>

<script>
  import Loading from "./components/Loading";
  export default {
    name: "App",
    components: {Loading},
  }
</script>

<style>
</style>
