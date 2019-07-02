<template>
    <div>
        <TestScenario></TestScenario>
        <TestCase></TestCase>
        <button @click="execution">실 행</button>
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
