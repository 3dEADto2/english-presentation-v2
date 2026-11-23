<script lang="ts" setup>
import AnimSlideIn from './../components/AnimSlideIn.vue'
import HouseSVG from './../assets/svg/house-color-icon.svg'
</script>

<template>
    <AnimSlideIn direction="left" :step-id="3" topic="CSS" class="grid grid-rows-2 size-full border border-pink-800 p-1 rounded">
        <div class="size-full flex justify-center items-center">
            <h1 class="text-2xl font-bold text-center bg-linear-to-b from-pink-700 to-pink-800 rounded px-2">Hello World</h1>
        </div>
        <div class="flex justify-center items-center size-full">
            <img :src="HouseSVG" alt="House Color" class="size-95 max-w-none" />
        </div>
    </AnimSlideIn>
</template>