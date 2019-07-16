<template>
    <div class="container">
        <h3>테스트 실행내역</h3>
        <table class="table table-striped" >
            <thead class="thead-dark">
            <th>일자</th>
            <th>시각</th>
            <th>시나리오아이디</th>
            </thead>
            <tbody>
            <tr v-for="testHistory in this.$store.state.testHistoryList" :key="testHistory.time">
                <td>{{testHistory.date}}</td>
                <td>{{testHistory.time}}</td>
                <td>{{testHistory.tsId}}</td>
            </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
    import Constant from "../Constant"
    export default {
        name: "TestHistory",
        data() {
            return {

            }
        },
        mounted(){
            this.$store.dispatch(Constant.API_CALL_TH_LIST, {})
        },
    }
</script>

<style scoped>

</style>
