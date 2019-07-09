<template>
    <div>
<!--        <h3>테스트 실행내역</h3>-->
<!--        <table class="table table-striped" >-->
<!--            <thead class="thead-dark">-->
<!--            <th>일자</th>-->
<!--            <th>시각</th>-->
<!--            <th>시나리오아이디</th>-->
<!--            </thead>-->
<!--            <tbody>-->
<!--            <tr v-for="testHistory in this.$store.state.testHistoryList" :key="testHistory.time">-->
<!--                <td>{{testHistory.date}}</td>-->
<!--                <td>{{testHistory.time}}</td>-->
<!--                <td>{{testHistory.tsId}}</td>-->
<!--            </tr>-->
<!--            </tbody>-->
<!--        </table>-->

        <h5><i class="el-icon-check"></i> 테스트 실행내역</h5>

        <el-divider></el-divider>
        <el-table
                :data="this.$store.state.testHistoryList"
                style="width: 100%">
            <el-table-column prop="date" label="일자" ></el-table-column>
            <el-table-column prop="time" label="시각" ></el-table-column>
            <el-table-column prop="tsId" label="시나리오ID" ></el-table-column>
        </el-table>

    </div>
</template>

<script>
    export default {
        name: "TestHistory",
        data() {
            return {

            }
        }
    }
</script>

<style scoped>

</style>
