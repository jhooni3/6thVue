<template>
    <div>
        <h3>테스트 시나리오</h3>
        <table border="1">
            <thead>
            <th>시나리오ID</th>
            <th>시나리오명</th>
            </thead>
            <tbody>
            <tr v-for="testScenario in testScenarioList" :key="testScenario.tsId"
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
    export default {
        name: "TestScenario",
        data () {
            return {
                testScenarioList:[
                    {tsId :"ts1", tsName :"시나리오1"},
                    {tsId :"ts2", tsName :"시나리오2"},
                    {tsId :"ts3", tsName :"시나리오3"},
                    {tsId :"ts4", tsName :"시나리오4"},
                ],
            }
        },
        methods:{
            clickTsId : function (tsId) {
                eventBus.$emit("clickTsId", tsId)
            }
        }

    }
</script>

<style scoped>

</style>
