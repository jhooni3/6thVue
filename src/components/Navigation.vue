<template>
    <div class="container">
        <!--        <a href="#" @click="changeTestExecution">[테스트실행]</a>-->
        <!--        <a href="#" @click="changeTestHistory">[실행 내역]</a>-->
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">
                [MUZI]
            </a>
            <a class="nav-link" href="#" @click="changeTestExecution">테스트실행</a>
            <a class="nav-link" href="#" @click="changeTestHistory">실행내역</a>
            <a class="nav-link" href="#" @click="changeETC">기타등등</a>
        </nav>

    </div>
</template>

<script>
    import eventBus from '../EventBus'
    import Constant from "@/Constant";
    export default {
        name: "navigation",
        methods: {
            changeTestExecution () {
                //eventBus.$emit("changeTestExecution", "TestExecution") // 첫번째 식별자 , 두번째 전달 데이터

                // this.$store.commit(Constant.CHANGE_CURRENT_COMPONENT, {
                //     currentComponent : "TestExecution"
                // })

                this.$router.push({
                    name : "TestExecution"
                })
            },
            changeTestHistory () {
                //eventBus.$emit("changeTestHistory","TestHistory")


                // this.$store.commit(Constant.CHANGE_CURRENT_COMPONENT, {
                //     currentComponent : "TestHistory"
                // })

                this.$router.push({
                    name : "TestHistory"
                });
            },
            changeETC: function () {
                //eventBus.$emit("changeETC","changeETC")
                // this.$store.commit(Constant.CHANGE_CURRENT_COMPONENT, {
                //     currentComponent : "TestHistory"
                // })

                this.$router.push({
                    name : "NotFound"
                });
            }
        }
    }
</script>

<style scoped>

</style>
