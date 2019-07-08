<template>
    <div class="container">
        <TestScenario></TestScenario>
        <TestCase :select-ts-id="this.$store.state.selectTsId"></TestCase>
        <button @click="execution" type="button" class="btn btn-secondary btn-lg btn-block">실 행</button>
    </div>
</template>

<script>
    import TestScenario from "@/components/TestScenario";
    import TestCase from "@/components/TestCase";
    export default {
        name: "TestExecution",
        components: {TestCase, TestScenario},
        methods:{
            execution () {
                alert("실행")
            }
        }
    }
</script>

<style scoped>

</style>
