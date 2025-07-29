<template>
  <div class="box">
    <div class="inner">
      我是昝荣华
    </div>
  </div>
</template>

<script>
const box = document.querySelector(`.box`)
export default {
  name: "AppHome"
}
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}

.box {
  width: 300px;
  height: 300px;
  border: solid;
  border-radius: 3%;
  background-color: rgb(139, 139, 139);
  overflow: hidden;
  margin: 0  auto;
}
.inner {
  width: 100px;
  height: 40px;
  border-radius: 3%;
  background-color: rgb(236,131,85);
  line-height: 40px;
  font-size: 1.2em;
  margin: 130px auto;
}
</style>