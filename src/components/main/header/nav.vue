<template>
    <div class="navs flex flex-wrap items-center " :style="ifShow ? 'opacity: 1' : ''">
        <el-dropdown v-for="nav, key in navs" :hide-on-click="false">
          <el-button link class="menu-btn" @click="jumpTo(nav.url)">
            <el-icon>
            </el-icon>{{ nav.cname ? nav.cname : key }}
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item v-for="secnav, seckey in nav.children" class="menu-btn">
                <el-button link class="menu-btn" @click="jumpTo(nav.url)">
                  <el-icon>

                  </el-icon>
                  {{ secnav.cname ? secnav.cname : seckey }}
                </el-button>

              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
</template>
<script setup="props, context" lang="ts">
import { ref, watch, getCurrentInstance, onMounted, reactive } from "vue"
import { useRouter } from "vue-router"
const useRouterCurrent = reactive(useRouter())

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
defineProps({
  ifShow:Boolean
})
</script>
<style lang="scss">
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
</style>