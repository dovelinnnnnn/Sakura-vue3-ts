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
var jumpTo = function (url: string) {
  useRouterCurrent.push(url)
}
var navs = {
  main: {
    url: "/home",
    cname: "主页",
    icon: "",
    children: {}
  },
  timeSeries: {
    url: "/login",
    icon: "",
    cname: "归档",
    children: {
      hax: {
        cname: "技术",
        icon: "",
        url: "",
      },
      article: {
        cname: "文章",
        icon: "",
        url: "",
      },
      movieComment: {
        cname: "影评",
        icon: "",
        url: "",
      },
      ideas: {
        cname: "想法",
        url: "",
        icon: "",
      },
      notes: {
        cname: "笔记",
        url: "",
        icon: "",
      }
    }
  },
  list: {
    cname: "列表",
    icon: "",
    url: "",
    children: {}
  },
  comment: {
    url: "",
    cname: "评论",
    icon: "",
    children: {}
  },
  friends: {
    cname: "朋友",
    icon: "",
    url: "",
    children: {}
  },
  donate: {
    cname: "支持",
    icon: "",
    url: "",
    children: {}
  },
  about: {
    icon: "",
    cname: "关于",
    url: "",
    children: {}
  },
  app: {
    icon: "",
    cname: "app",
    url: "",
    children: {}
  },
  Mastodon: {
    cname: "其他",
    icon: "",
    url: "",
    children: {}
  },
}
</script>
<template>
  <!-- 导航栏 -->
  <el-container ref="scrollbarRef">
    <el-header class="main-header" :style="show?'background-color: rgba(240, 248, 255, 0.9);':''">
      <div class="header-logo">
        <div class="logo" style="display: flex;justify-content: center;align-items: center;">
          <span class="jname">さんこう绊</span>
          <div class="no">の</div>
          <span class="ename">奶酪</span>
        </div>
        <div class="cname">三更绊的奶酪</div>
      </div>
      <div class="navs flex flex-wrap items-center " :style="show?'opacity: 1':''">
        <el-dropdown v-for="nav,key in navs" :hide-on-click="false">
          <el-button link class="menu-btn" @click="jumpTo(nav.url)">
            <el-icon>
            </el-icon>{{nav.cname? nav.cname: key}}
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item v-for="secnav,seckey in nav.children" class="menu-btn">
                <el-button link class="menu-btn" @click="jumpTo(nav.url)">
                  <el-icon>

                  </el-icon>
                  {{secnav.cname? secnav.cname: seckey}}
                </el-button>

              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <div class="search_login">
        <el-icon style="vertical-align: middle;font-size: 22px;width: 100%;display: flex;justify-content: flex-end;">
          <Search class="icon" />
          <Tools class="icon icon-tools" />
        </el-icon>
      </div>
    </el-header>
    <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
    <el-scrollbar height="100vh" always @scroll="scroll">
      <el-main class="content">
        <router-view></router-view>
      </el-main>
    <el-foot>111</el-foot>

    </el-scrollbar>
  </el-container>
</template>

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
.el-header.main-header {
  height: 8rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  // opacity: 0;  
  transition: background-color 0.3s ease-in;
  background-color: rgba(240, 248, 255, 0);
  z-index: 8;
}

.main-header:hover {
  background-color: rgba(240, 248, 255, 1);

  .navs {
    opacity: 1;
  }
}

.content {
  background-color: brown;
  height: 1000vh;
  padding-top: 75px;
  box-sizing: border-box;
}

.header-logo {
  // line-height: 75px;
  width: 16%;
  font-size: 2.5rem;
  cursor: url("./assets/imgs/ayuda.cur"), auto;
}

.cname {
  opacity: 0;
  font-size: 1rem;
  transition: opacity 0.4s ease-in;
  width: 100%;
  text-align: justify;
  padding: 0 1rem;
  box-sizing: border-box;
  vertical-align: bottom;
  height: 1rem;
}

.cname::after {
  display: inline-block;
  width: 100%;
  content: "";
}

.jname {
  // background-color: lightgray;
  border-radius: 1rem;
  padding: .3rem;
}

.ename {
  font-family: 'QianTuXiaoTuTi', 'Merriweather Sans', Helvetica, Tahoma, Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft Yahei', 'WenQuanYi Micro Hei', sans-serif;
}

.header-logo:hover {
  .jname {
    background-color: #ffa500;
    color: white;
  }



  .ename {
    color: #ffa500;
  }

  .cname {
    color: #ffa500;
    opacity: 1;
    font-family: 'Merriweather Sans', Helvetica, Tahoma, Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft Yahei', 'WenQuanYi Micro Hei', sans-serif;
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

.icon {
  border: 1px solid rgba($color: #000000, $alpha: 0.5);
  margin-right: 10px;
  border-radius: 50%;
  padding: 5px;
  box-sizing: content-box;
  cursor: url("./assets/imgs/ayuda.cur"), auto;

}

.icon-tools:hover {
  animation-name: spin;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

.navs {
  opacity: 0;
  transition: opacity 0.2s ease-in;

  ul.el-dropdown-menu {
    li {
      cursor: url("./assets/imgs/ayuda.cur"), auto;
    }
  }

  .el-dropdown {

    margin-left: 15px;
    cursor: url("./assets/imgs/ayuda.cur"), auto;

    .el-button {
      cursor: url("./assets/imgs/ayuda.cur"), auto;
    }

    .menu-btn {
      color: #666;
    }

    .menu-btn:hover {
      color: #ffa500;
    }

    .el-dropdown-link {
      cursor: url("./assets/imgs/ayuda.cur"), auto;
      color: var(--el-color-primary);
      display: flex;
      align-items: center;
    }
  }

}



.search_login {
  width: 16%;
  display: flex;
  align-items: flex-end;
}
</style>
