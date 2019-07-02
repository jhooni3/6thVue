<template>
    <div>
        <table border="1">
            <thead>
            <th>일자</th>
            <th>시각</th>
            <th>시나리오아이디</th>
            </thead>
            <tbody>
            <tr v-for="testHistory in testHistoryList" :key="testHistory.time">
                <td>{{testHistory.date}}</td>
                <td>{{testHistory.time}}</td>
                <td>{{testHistory.tsId}}</td>
            </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
    export default {
        name: "TestHistory",
        data() {
            return {
                testHistoryList:[
                    {date:"20190606", time:"010000", tsId:"ts1"},
                    {date:"20190607", time:"020000", tsId:"ts2"},
                    {date:"20190606", time:"030000", tsId:"ts1"},
                    {date:"20190606", time:"050000", tsId:"ts1"},
                ]
            }
        }
    }
</script>

<style scoped>

</style>
