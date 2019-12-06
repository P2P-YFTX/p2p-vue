<template>
  <div class="leftMenu_main">
    <!-- <div class="scrollbar">
      <div class="track">
        <div class="thumb"></div>
      </div>
    </div> -->
    <div class="viewport">
      <div class="overview">
        <el-menu router :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
          background-color="#FFFFFF" text-color="#272822" active-text-color="#41A863" :collapse="collapsed"
          :collapse-transition="bb">

          <div class="logobox">
            <img class="logoimg" src="../assets/img/一方通行.png" alt="">
          </div>
          <el-submenu v-for="n1 in result" :index="'index-'+n1.treeNodeId" :key="'key-'+n1.treeNodeId" :default-openeds="false">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{n1.treeNodeName}}</span>
            </template>
            <el-submenu v-for="n2 in n1.children" :index="'index2-'+n2.treeNodeId" :key="'key2-'+n2.treeNodeId">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{n2.treeNodeName}}</span>
              </template>
              <el-menu-item v-for="n3 in n2.children" :index="n3.url" :key="'index3-'+n3.treeNodeId">{{n3.treeNodeName}}</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data: function() {
      return {
        collapsed: false, //折叠
        bb: true, //过渡动画\
        result: [],
        imgshow: require('../assets/img/show.png'),
        imgsq: require('../assets/img/sq.png')
      }
    },
    methods: {
      doToggle: function() {
        console.log("事件出发了");
        this.collapsed = !this.collapsed;
        this.$root.Bus.$emit("toggle", this.collapsed);
      }
    },
    created: function() {
      this.$root.Bus.$on("toggle", v => {
        console.log("LeftNav组件监听到事件了");
        console.log(v);
        this.collapsed = v;
      });
      var url = this.axios.urls.SYSTEM_TREE_NODE;
      this.axios.post(url).then(resp => {
        console.log(resp);
        this.result = resp.data.result;
      }).catch(resp => {
        console.log(resp);
      });
    }
  }
</script>
<style>
  .leftMenu_main .thumb {
    background: #fff;
  }

  .leftMenu_main .viewport {
    background: #3A3D3F;
  }

  .el-menu-bg {
    background-color: white !important;
  }

  .el-menu {
    border: none;
  }

  .logobox {
    color: #FFFFFF;
    font-size: 20px;
    text-align: center;
    padding: 20px 0px;
    height: 60px;
    background-color: #FFFFFF;
    border: none;
  }

  .showimg {
    width: 26px;
    height: 30px;
    position: absolute;
    top: 17px;
    left: 17px;
  }
</style>
