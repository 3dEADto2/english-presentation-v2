<script lang="ts" setup>
import AnimSlideIn from './../components/AnimSlideIn.vue'
import VueFrameworksPNG from './../assets/img/top-vue-ui-frameworks-trans.png';
</script>

<template>
    <AnimSlideIn direction="up" :step-id="9" :hide-previous="[8]" topic="Expandability" class="flex flex-col gap-2 size-full border border-pink-800 p-1 rounded">
        <img :src="VueFrameworksPNG" alt="DOM" class="size-full max-w-none object-contain" />
    </AnimSlideIn>
</template>