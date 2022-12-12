<script setup lang="ts">
import { ref, watch, getCurrentInstance, onMounted, reactive } from "vue"
import { useRouter } from "vue-router"
const useRouterCurrent = reactive(useRouter())
let _this = getCurrentInstance()

let utils = _this?.appContext.config.globalProperties.$utils
var show = ref(false)
var scroll = (e: any) => {
  if (e.scrollTop > 80) {
    show.value = true
  } else {
    show.value = false
  }
}

</script>
<template>
  <!-- 导航栏 -->
  <el-container ref="scrollbarRef">
    <el-header>
      <my-header :ifShow="show"></my-header>
    </el-header>
    <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
    <el-scrollbar height="100vh" always @scroll="scroll">
      <el-main class="content">
        <router-view></router-view>
      </el-main>
      <el-foot>
        <div style="width:100vw;height: 8vh;background-color:black;">111</div>
      </el-foot>

    </el-scrollbar>
  </el-container>
</template>
<script lang="ts">
import myHeader from "./components/main/header.vue"
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}


// 导航栏


.content {
  background-color: brown;
  height: 1000vh;
  padding-top: 75px;
  box-sizing: border-box;
}

.el-container>.el-header {
  padding: 0;
  height: auto;
}
</style>
