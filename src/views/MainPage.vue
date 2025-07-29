<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <common-aside/>
      </el-aside>
      <el-container>
        <el-header>
          <div class="header">
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

export default {
  name: "MainPage",
  components: {
    CommonAside
  },
  data() {
    return {};
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.header {
  height: 100%;
  width: 100%;
  background-color: #9b9696;
}
</style>