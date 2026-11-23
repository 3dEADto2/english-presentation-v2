<script lang="ts" setup>
import AnimSlideIn from './../components/AnimSlideIn.vue'
import HouseSVG from './../assets/svg/house-icon.svg?url&no-inline'
</script>

<template>
    <AnimSlideIn direction="left" :step-id="2" topic="HTML" class="grid grid-rows-2 size-full border border-pink-800 p-1 rounded">
        <h1 class="text-2xl font-bold text-center">Hello World</h1>
        <div
            :style="{
                maskImage: `url(${HouseSVG})`,
                WebkitMaskImage: `url(${HouseSVG})`,
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskPosition: 'center',
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
            }"
            class="bg-white"
            role="img"
            aria-label="Haus"
        ></div>
    </AnimSlideIn>
</template>