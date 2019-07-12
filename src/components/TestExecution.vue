<template>
    <div>
        <el-row>
            <el-col :span="12">
                <div>
                    <TestScenario></TestScenario>
                </div>
            </el-col>
            <el-col :span="12">
                <div>
                    <TestCase :select-ts-id="this.$store.state.selectTsId"></TestCase>
                </div>
            </el-col>
        </el-row>

        <div align="right">
        <br/>
        <el-button @click="execution" type="info" plain>실 행</el-button>
        </div>

<!--        <button @click="execution" type="button" class="btn btn-secondary btn-lg btn-block">실 행</button>-->
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
