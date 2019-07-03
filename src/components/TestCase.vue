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
            <tr v-for="testCase in testCaseList" :key ="testCase.tcId">
                <td>{{testCase.tcId}}</td>
                <td>{{testCase.tcName}}</td>
                <td>{{testCase.tsId}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import eventBus from '../EventBus'
    export default {
        name: "TestCase",
        data () {
            return {
                originTestCaseList:[
                    {tcId:"tc1", tcName:"테스트케이스1", tsId: "ts1"},
                    {tcId:"tc2", tcName:"테스트케이스2", tsId: "ts2"},
                    {tcId:"tc3", tcName:"테스트케이스3", tsId: "ts2"},
                    {tcId:"tc4", tcName:"테스트케이스4", tsId: "ts3"},
                    {tcId:"tc5", tcName:"테스트케이스5", tsId: "ts4"},
                ],
                testCaseList:[

                ],

            }
        },
        created () {
            this.testCaseList = [...this.originTestCaseList]    //복
            eventBus.$on("clickTsId", this.filterTestCase)
        },
        methods:{
            filterTestCase: function(tsId) {
                console.log("filterTestCase : "+ tsId)
                //tsId가 동일한놈만 원본데이터를
                this.testCaseList = this.originTestCaseList.filter(function (row) {
                    return row.tsId === tsId
                })
            }
        }
    }
</script>

<style scoped>

</style>
