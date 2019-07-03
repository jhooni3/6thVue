<template>
  <div>
    <header>
      <h1 align="center">UAT Automation</h1>
    </header>
    <nav>
      <Navigation></Navigation>
    </nav>
    <section>
      <TestExecution v-if="currentComponent == 'TestExecution'"></TestExecution>
      <TestHistory v-else-if ="currentComponent == 'TestHistory'"></TestHistory>
    </section>
    <footer align ="center">
      copyright 2019 @muzi
    </footer>
  </div>
</template>

<script>
  import eventBus from './EventBus'
  import Navigation from "@/components/Navigation";
  import TestExecution from "@/components/TestExecution";
  import TestHistory from "@/components/TestHistory";
  export default {
    name: "App",
    components: {TestHistory, TestExecution, Navigation},
    data () {
      return {
        currentComponent: "TestExecution",
      }
    },
    methods: {
      changeCurrentComponent: function (param1) {
        this.currentComponent = param1
      }
    },
    created() {
      eventBus.$on("changeTestExecution", this.changeCurrentComponent)
      eventBus.$on("changeTestHistory", this.changeCurrentComponent)
    }
  }
</script>

<style>
</style>
