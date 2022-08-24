
<script setup lang="ts">
import { ref, watch, getCurrentInstance, onMounted, reactive } from "vue"
import { useRouter } from "vue-router"
const useRouterCurrent = reactive(useRouter())
let _this = getCurrentInstance()
watch(useRouterCurrent, () => {
  let mainref: any = _this?.refs.scroll
  if (mainref) {
    mainref.$el.scrollTop = 0
    console.log(1);
  }
})
</script>

<template>
  <!-- 导航栏 -->
  <el-scrollbar ref="scrollbarRef" height="100vh" always>
    <el-container>
      <el-header class="main-header">
        <div class="header-logo" style="vertical-align: bottom;">
          <div style="display: flex;justify-content: center;align-items: center;">
            <span class="jname">さんこう绊</span>
            <div class="no">の</div>
            <span>奶酪</span>
          </div>
          <div class="cname">三更绊的奶酪</div>
        </div>
      </el-header>
      <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
      <el-main class="content">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-scrollbar>
</template>

<style lang="scss">
html {
  overflow: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}



.el-header.main-header {
  height: 8rem;
  display: flex;
  width: 100%;
  // justify-content: center;
  align-items: center;
  position: fixed;
  opacity: 0;
  transition: opacity 0.3s ease-in;
  background-color: aliceblue;
}

#app .el-main {
  padding: 0;
  margin: 0;
}

.header-hover {
  opacity: 1;
}

.main-header:hover {
  opacity: 1;
}

.content {
  background-color: brown;
  height: 1000vh;
  padding-top: 75px;
  box-sizing: border-box;
}

.header-logo {
  // line-height: 75px;
  font-size: 2.8rem;
}

.cname {
  opacity: 0;
  font-size: 1.5rem;
  transition: opacity 0.4s ease-in;
  width: 100%;
  text-align: justify;
  padding: 0 1rem;
  box-sizing: border-box;
  vertical-align: bottom;
}

.cname::after {
  display: inline-block;
  width: 100%;
  content: "";
}

.jname {
  background-color: lightgray;
  border-radius: 2rem;
  padding: .3rem;
}

.header-logo:hover {
  color: orangered;

  .jname {
    background-color: orange;
  }

  .cname {
    color: orangered;
    opacity: 1;
  }

  .no {
    animation-name: spin;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
}

@keyframes spin {

  0% {
    transform: rotateZ(0deg);
  }

  100% {
    transform: rotateZ(360deg);
  }

}







* {
  padding: 0;
  margin: 0;
}
</style>
