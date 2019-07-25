<template>
    <div>
        <header>
            <h1 align="center">UAT Automation</h1>
        </header>
        <nav>
            <Navigation></Navigation>
        </nav>
        <section>
            <router-view></router-view>
            <!--과거버전-->
            <!-- <component :is="this.$store.state.currentComponent"></component>-->

            <!-- 더 과거버전-->
            <!--      <TestExecution v-if="currentComponent == 'TestExecution'"></TestExecution>-->
            <!--      <TestHistory v-else-if ="currentComponent == 'TestHistory'"></TestHistory>-->
        </section>
        <footer align ="center">
            copyright 2019 @muzi
        </footer>
    </div>
</template>

<script>
    import Navigation from "@/components/Navigation";
    import TestExecution from "@/components/TestExecution";
    import TestHistory from "@/components/TestHistory";
    export default {
        name: "Main",
        components: {TestHistory, TestExecution, Navigation},
        data () {
            return {

            }
        },
        methods: {
            changeCurrentComponent: function (param1) {
                // this.$store.state.currentComponent = param1
            }
        },
        created() {
            // eventBus.$on("changeTestExecution", this.changeCurrentComponent)
            // eventBus.$on("changeTestHistory", this.changeCurrentComponent)
        }
    }
</script>

<style>
</style>
