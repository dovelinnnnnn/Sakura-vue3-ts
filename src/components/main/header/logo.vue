<template>
  <div class="header-logo">
    <div class="logo" style="display: flex;justify-content: center;align-items: center;">
      <span class="jname">さんこう绊</span>
      <div class="no">の</div>
      <span class="ename">奶酪</span>
    </div>
    <div class="cname">三更绊的奶酪</div>
  </div>
</template>


<script setup="props, context" lang="ts">
import { ref } from "vue"
type Props = {
  colorWord: string;
  rotateWord: string
  nomalWord: string
  cname: string
}

</script>
<style lang="scss">




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


</style>