<template>
  <div>
    <el-container>
      <el-aside width="auto">
        <common-aside/>
      </el-aside>
      <el-container>
        <el-header>
          <div class="header">
            <el-button @click="setCollapse"type="primary" icon="el-icon-s-grid" circle></el-button>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonAside from "@/components/CommonAside";
import {login} from "@/api";

export default {
  name: "MainPage",
  components: {
    CommonAside
  },
  data() {
    return {};
  },
  methods: {
    //通过vuex修改 可以传递参数
    setCollapse(){
      this.$store.dispatch('setCollapse','')
    }
  },
  created() {
    login({username: 'admin', password: '123456'}).then(res => {
      console.log(res)
    })
  }
}
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-header{
  padding: 0;
}
.header {
  height: 100%;
  width: 100%;
  background-color: #d2cdcd;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 20px 0 20px;
}
</style>