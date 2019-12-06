<template>
  <el-container class="main-container">
    <el-aside class="main-aside">
      <LeftNav></LeftNav>
    </el-aside>
    <el-container>
      <el-header class="main-header">
        <TopNav></TopNav>
        <!-- 3、使用组件-->
      </el-header>
      <el-main class="main-center">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  //1、导入组件
  import TopNav from '../components/TopNav.vue'
  import LeftNav from '../components/LeftNav.vue'

  //导出模块
  export default {
    data: function() {
      return {
        collapsed: false
      }
    },
    components: {//2、注册组件
       TopNav,
       LeftNav
    },
    created:function(){
        this.$root.Bus.$on("toggle",v=>{
          console.log("AppMain组件监听到事件了");
          console.log(v);
          if(v==true){
            setTimeout(()=>{
              this.collapsed=v;
            },300)
          }else{
            this.collapsed=v;
          }
        })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-container {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }

  .main-aside-collapsed {
    /* 在CSS中，通过对某一样式声明! important ，可以更改默认的CSS样式优先级规则，使该条样式属性声明具有最高优先级 */
    width: 44px !important;
    height: 100%;
    background-color: #FFFFFF;
    margin: 0px;
  }

  .main-aside {
    width: 190px !important;
    height: 100%;
    background-color: #303133;
    margin: 0px;
  }

  .main-header{
    padding: 0px;
    height: 100px !important;
    background-color: #FFFFFF;
  }
  .main-center {
    padding: 0px;
    border-left: 2px solid #F0F0F0;
    background-color: #F0F0F0;
  }
</style>
