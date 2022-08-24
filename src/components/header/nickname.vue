<template>
    <div style="display: flex;justify-content: center;align-items: center;">
        <span class="jname">{{colorWord}}</span>
        <div class="no">{{rotateWord}}</div>
        <span>{{nomalWord}}</span>
    </div>
    <div class="cname">{{cname}}</div>
</template>


<script setup="props, context" lang="ts">
import { ref, defineProps } from "vue"
type Props = {
    colorWord: string;
    rotateWord: string
    nomalWord: string
    cname:string
}
defineProps<Props>()

</script>