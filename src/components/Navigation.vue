<template>
    <div>
        <a href="#" @click="changeTestExecution">[테스트실행]</a>
        <a href="#" @click="changeTestHistory">[실행 내역]</a>
    </div>
</template>

<script>
    import eventBus from '../EventBus'
    export default {
        name: "navigation",
        methods: {
            changeTestExecution () {
                eventBus.$emit("changeTestExecution", "TestExecution") // 첫번째 식별자 , 두번째 전달 데이터
            },
            changeTestHistory () {
                eventBus.$emit("changeTestHistory","TestHistory")
            }
        }
    }
</script>

<style scoped>

</style>
