<template >
    <div class="main-header" :style="ifShow ? 'background-color: rgba(240, 248, 255, 0.9);' : ''">
        <my-logo></my-logo>
        <my-nav :ifShow="ifShow"></my-nav>
        <my-setting></my-setting>
    </div>
</template>
<script setup="props, coontent" lang="ts">
import myNav from "./header/nav.vue"
import mySetting from "./header/setting.vue"
import myLogo from "./header/logo.vue"
defineProps({
    ifShow: Boolean
})
</script>
<style lang="scss">
.main-header {
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
</style>