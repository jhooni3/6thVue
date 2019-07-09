<template>
    <div>
        <!--        <a href="#" @click="changeTestExecution">[테스트실행]</a>-->
        <!--        <a href="#" @click="changeTestHistory">[실행 내역]</a>-->
<!--        <nav class="navbar navbar-light bg-light">-->
<!--            <a class="navbar-brand" href="#">-->
<!--                [MUZI]-->
<!--            </a>-->
<!--            <a class="nav-link" href="#" @click="changeTestExecution">테스트실행</a>-->
<!--            <a class="nav-link" href="#" @click="changeTestHistory">실행내역</a>-->
<!--            <a class="nav-link" href="#" @click="changeETC">기타등등</a>-->
<!--        </nav>-->

        <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">

            <el-menu-item index="0"><i class="el-icon-ice-cream-round"></i> </el-menu-item>
            <el-menu-item index="1">  테스트 실행</el-menu-item>
            <el-menu-item index="2">실행 내역</el-menu-item>
        </el-menu>



    </div>
</template>

<script>
    import eventBus from '../EventBus'
    import Constant from "@/Constant";
    export default {
        name: "navigation",
        data() {
            return {
                activeIndex: '1',
            }
        },

        methods: {
            changeTestExecution () {
                //eventBus.$emit("changeTestExecution", "TestExecution") // 첫번째 식별자 , 두번째 전달 데이터
                this.$store.commit(Constant.CHANGE_CURRENT_COMPONENT, {
                    currentComponent : "TestExecution"
                })
            },
            changeTestHistory () {
                //eventBus.$emit("changeTestHistory","TestHistory")
                this.$store.commit(Constant.CHANGE_CURRENT_COMPONENT, {
                    currentComponent : "TestHistory"
                })
            },
            changeETC: function () {
                //eventBus.$emit("changeETC","changeETC")
                this.$store.commit(Constant.CHANGE_CURRENT_COMPONENT, {
                    currentComponent: "TestHistory"
                })
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
                if(key == "1"){
                    this.$store.commit(Constant.CHANGE_CURRENT_COMPONENT, {
                        currentComponent : "TestExecution"
                    })
                }
                else if (key == "2"){
                    this.$store.commit(Constant.CHANGE_CURRENT_COMPONENT, {
                        currentComponent : "TestHistory"
                    })
                }
                else if (key == "0"){
                    this.$store.commit(Constant.IS_COLLAPSE, {
                        isCollapse : !this.$store.state.isCollapse
                    })
                }

            }


        }
    }
</script>

<style scoped>

</style>
