<template>
    <div class="container">
        <h3>테스트 시나리오</h3>
        <table class="table table-striped" >
            <thead class="thead-dark">
            <th>시나리오ID</th>
            <th>시나리오명</th>
            </thead>
            <tbody>
            <tr v-for="testScenario in this.$store.state.testScenarioList" :key="testScenario.tsId"
                @click="clickTsId(testScenario.tsId)">
                <td>{{testScenario.tsId}}</td>
                <td>{{testScenario.tsName}}</td>
            </tr>
            </tbody>
        </table>
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
        mounted(){
          this.$store.dispatch(Constant.API_CALL_TS_LIST, {})
        },
        methods:{
            clickTsId : function (tsId) {
                //eventBus.$emit("clickTsId", tsId)
                this.$store.commit( Constant.SELECT_TS_ID, {
                    selectTsId: tsId
                })
            }
        }

    }
</script>

<style scoped>

</style>
