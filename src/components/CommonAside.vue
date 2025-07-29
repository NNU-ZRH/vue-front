<template>
  <div>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo"
             :collapse="isCollapse" router>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <div slot="title"></div>
          <el-menu-item index="1-1" route="/home">选项1</el-menu-item>
          <el-menu-item index="1-2" route="/user">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "CommonAside",
  data() {
    return{
      isCollapse:false
    }
  }
}
</script>

<style scoped>

</style>