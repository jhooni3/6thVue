<template>
    <div >
<!--        <h3>테스트 케이스</h3>-->
<!--        <table class="table table-striped" >-->
<!--            <thead class="thead-dark">-->
<!--            <th>케이스ID</th>-->
<!--            <th>케이스명</th>-->
<!--            <th>시나리오ID</th>-->
<!--            </thead>-->
<!--            <tbody>-->
<!--            <tr v-for="testCase in filteredTcList" :key ="testCase.tcId">-->
<!--                <td>{{testCase.tcId}}</td>-->
<!--                <td>{{testCase.tcName}}</td>-->
<!--                <td>{{testCase.tsId}}</td>-->
<!--            </tr>-->
<!--            </tbody>-->
<!--        </table>-->


        <h3><i class="el-icon-check"></i> 테스트 케이스</h3>
        <el-divider></el-divider>

        <el-table
                v-loading="loading"
                element-loading-text="Loading..."
                element-loading-spinner="el-icon-loading"
                element-loading-background="rgba(0, 0, 0, 0.8)"
                :data="filteredTcList"
                :accesskey="filteredTcList.tcId"
                style="width: 100%">
            <el-table-column prop="tcId" label="케이스ID" ></el-table-column>
            <el-table-column prop="tcName" label="케이스명" ></el-table-column>
            <el-table-column prop="tsId" label="시나리오ID" ></el-table-column>
        </el-table>

    </div>
</template>

<script>
    export default {
        name: "TestCase",
        props: [
            "selectTsId"
        ],
        data () {
            return {
                testCaseListFilter:[
                ],
                loading : true
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
            this.testCaseListFilter = [...this.$store.state.testCaseList]    //복사
            // eventBus.$on("clickTsId", this.filterTestCase)
        },
        methods:{
        }
    }
</script>

<style scoped>

</style>
