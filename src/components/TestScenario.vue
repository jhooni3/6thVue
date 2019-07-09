<template>
    <div>
<!--        <h3>테스트 시나리오</h3>-->
<!--        <table class="table table-striped" >-->
<!--            <thead class="thead-dark">-->
<!--            <th>시나리오ID</th>-->
<!--            <th>시나리오명</th>-->
<!--            </thead>-->
<!--            <tbody>-->
<!--            <tr v-for="testScenario in this.$store.state.testScenarioList" :key="testScenario.tsId"-->
<!--                @click="clickTsId(testScenario.tsId)">-->
<!--                <td>{{testScenario.tsId}}</td>-->
<!--                <td>{{testScenario.tsName}}</td>-->
<!--            </tr>-->
<!--            </tbody>-->
<!--        </table>-->


        <h5><i class="el-icon-check"></i> 테스트 시나리오</h5>
        <el-divider></el-divider>

        <el-table
                :data="this.$store.state.testScenarioList"
                @current-change="handleCurrentChange"
                style="width: 100%">
            <el-table-column prop="tsId" label="시나리오ID" ></el-table-column>
            <el-table-column prop="tsName" label="시나리오명" ></el-table-column>
        </el-table>

    </div>
</template>

<script>
    import eventBus from '../EventBus'
    import Constant from '../Constant'
    export default {
        name: "TestScenario",
        data () {
            return {

            }
        },
        methods:{
            clickTsId : function (tsId) {
                //eventBus.$emit("clickTsId", tsId)
                this.$store.commit( Constant.SELECT_TS_ID, {
                    selectTsId: tsId
                })
            },
            handleCurrentChange(val){
                console.log(val);
                console.log(val.tsId);
                this.$store.commit( Constant.SELECT_TS_ID, {
                    selectTsId: val.tsId
                })

            }
        }

    }
</script>

<style scoped>

</style>
