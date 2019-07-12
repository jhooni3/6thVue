<template>
    <div>
        <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="this.$store.state.isCollapse"
        >
            <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">테스트 실행</span>
            </el-menu-item>
            <el-menu-item index="2">
                <i class="el-icon-document"></i>
                <span slot="title">테스트 실행내역</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i class="el-icon-setting"></i>
                <span slot="title">Info</span>
            </el-menu-item>
            <el-menu-item>

            </el-menu-item>
            <el-menu-item>

            </el-menu-item>
            <el-menu-item>

            </el-menu-item>
            <el-menu-item>

            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    import Constant from "../Constant";

    export default {
        name: "AsideMenu",
        data() {
            return {
                isCollapse: false
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
                // this.$store.commit(Constant.ASIDE_WIDTH, {
                //     asideWidth : "210px"
                // })

            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
                // this.$store.commit(Constant.ASIDE_WIDTH, {
                //     asideWidth : "60px"
                // })
            }
        }
    }
</script>

<style scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        /*width: 200px;*/
        /*min-height: 800px;*/
    }
</style>
