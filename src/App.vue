<template>
  <div>
<!--    <header>-->
<!--      <h1 align="center">UAT Automation</h1>-->
<!--    </header>-->
<!--    <nav>-->
<!--      <Navigation></Navigation>-->
<!--    </nav>-->
<!--    <section>-->
<!--      <component :is="this.$store.state.currentComponent"></component>-->
<!--&lt;!&ndash;      <TestExecution v-if="currentComponent == 'TestExecution'"></TestExecution>&ndash;&gt;-->
<!--&lt;!&ndash;      <TestHistory v-else-if ="currentComponent == 'TestHistory'"></TestHistory>&ndash;&gt;-->
<!--    </section>-->
<!--    <footer align ="center">-->
<!--      copyright 2019 @muzi-->
<!--    </footer>-->

    <el-container>
<!--      <h1 align="center">UAT Automation</h1>-->
      <el-header>
        <Navigation></Navigation>
      </el-header>
      <el-container>
        <el-aside>
          <AsideMenu></AsideMenu>
        </el-aside>
        <el-main>
          <component :is="this.$store.state.currentComponent"></component>
          <el-divider></el-divider>
        </el-main>
      </el-container>
      <el-footer>
        copyright 2019 @muzi
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  import eventBus from './EventBus'
  import Navigation from "@/components/Navigation";
  import TestExecution from "@/components/TestExecution";
  import TestHistory from "@/components/TestHistory";
  import AsideMenu from "./components/AsideMenu";
  export default {
    name: "App",
    components: {AsideMenu, TestHistory, TestExecution, Navigation},
    data () {
      return {

      }
    },
    methods: {
      changeCurrentComponent: function (param1) {
        this.$store.state.currentComponent = param1
      }
    },
    created() {
      eventBus.$on("changeTestExecution", this.changeCurrentComponent)
      eventBus.$on("changeTestHistory", this.changeCurrentComponent)
    }
  }
</script>

<style>
  .el-header, .el-footer {
    /*background-color: #B3C0D1;*/
    padding: 0 0;
    color: #333;
    text-align: center;

  }

  .el-aside {
    /*background-color: #D3DCE6;*/
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    /*background-color: #E9EEF3;*/
    color: #333;
    /*text-align: center;*/
    /*line-height: 160px;*/
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
