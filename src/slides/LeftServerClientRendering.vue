<script lang="ts" setup>
import AnimSlideIn from './../components/AnimSlideIn.vue'
import RenderingPNG from './../assets/img/Server_Client_Side_Rendering_trans.png';
</script>

<template>
    <AnimSlideIn direction="up" :step-id="10" :hide-previous="[9]" topic="Server/Client Rendering" class="flex flex-col gap-2 size-full border border-pink-800 p-1 rounded">
        <img :src="RenderingPNG" alt="DOM" class="size-full max-w-none object-contain" />
    </AnimSlideIn>
</template>