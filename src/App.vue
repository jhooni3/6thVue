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

      <el-aside v-bind:style="{ width : this.$store.state.asideWidth }">
        <AsideMenu></AsideMenu>
      </el-aside>

      <el-container>
        <el-header>
          <Navigation></Navigation>
        </el-header>

        <el-main>
          <component :is="this.$store.state.currentComponent"></component>
        </el-main>

      <el-footer>
        <el-divider></el-divider>
        copyright 2019 @muzi
      </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
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
    }
  }
</script>

<style>
  .el-header, .el-footer {
    /*background-color: #B3C0D1;*/
    padding: 0!important;
    margin : 0 0px;
    color: #333;
    text-align: center;

  }

  .el-aside {
    /*background-color: #D3DCE6;*/
    color: #333;
    /*width : 200px;*/
    text-align: left;
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


</style>
