<template lang="">
     <div class="search_login">
        <el-icon style="vertical-align: middle;font-size: 22px;width: 100%;display: flex;justify-content: flex-end;">
          <Search class="icon" />
          <Tools class="icon icon-tools" />
        </el-icon>
      </div>
</template>
<script setup="props, context" lang="ts">
</script>
<style lang="scss">
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





.search_login {
  width: 16%;
  display: flex;
  align-items: flex-end;
}
</style>