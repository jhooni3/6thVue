<template>
    <div class="container">
        <h3>테스트 케이스</h3>
        <table class="table table-striped" >
            <thead class="thead-dark">
            <th>케이스ID</th>
            <th>케이스명</th>
            <th>시나리오ID</th>
            </thead>
            <tbody>
            <tr v-for="testCase in filteredTcList" :key ="testCase.tcId">
                <td>{{testCase.tcId}}</td>
                <td>{{testCase.tcName}}</td>
                <td>{{testCase.tsId}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import Constant from "../Constant"
    import eventBus from '../EventBus'
    export default {
        name: "TestCase",
        props: [
            "selectTsId"
        ],
        data () {
            return {
                testCaseListFilter:[
                ],
            }
        },
        computed: {
            filteredTcList() {

                if( this.selectTsId != ""){
                    return this.$store.state.testCaseList.filter( (row) => {
                        return row.tsId === this.selectTsId
                    })
                }
                else{
                    return [...this.$store.state.testCaseList]
                }

            }
        },
        created () {

        },
        mounted(){
            this.$store.dispatch(Constant.API_CALL_TC_LIST, {})
            this.testCaseListFilter = [...this.$store.state.testCaseList]    //복
            // eventBus.$on("clickTsId", this.filterTestCase)
        },
        methods:{
        }
    }
</script>

<style scoped>

</style>
