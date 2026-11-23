<script lang="ts" setup>
import AnimSlideIn from './../components/AnimSlideIn.vue'
import VueSVG from './../assets/svg/Vue.js_Logo_2.svg?url&no-inline';
import ReactSVG from './../assets/svg/React-icon.svg?url&no-inline';
import AngularSVG from './../assets/svg/Angular-new-logo-small.svg?url&no-inline';
import SvelteSVG from './../assets/svg/Svelte_Logo.svg?url&no-inline';
import { onMounted, onUnmounted, ref } from 'vue'

const circle = ref(0);
const degreesPerMillisecond = 0.025;

let animationFrameId = 0;
let startTime: number | undefined;

const animate = (timestamp: number) => {
    startTime ??= timestamp;
    circle.value = ((timestamp - startTime) * degreesPerMillisecond) % 360;
    animationFrameId = requestAnimationFrame(animate);
}

onMounted(() => {
    animationFrameId = requestAnimationFrame(animate)
})

onUnmounted(() => cancelAnimationFrame(animationFrameId))
</script>

<template>
    <AnimSlideIn direction="up" :step-id="0" topic="Cover" class="flex justify-center items-center size-full border border-pink-800 p-1 rounded">
        <div class="relative">
            <div class="flex flex-col gap-3">
                <h1 class="text-4xl font-bold">Frontend Frameworks</h1>
                <p>By Henrik Nöckel</p>
            </div>
            <div :style="{ transform: `rotate(${circle}deg)` }" class="absolute left-1/2 top-1/2">
                <img :src="VueSVG" alt="Vue" :style="{ transform: `rotate(-${circle}deg)` }" class="absolute left-60 top-0 size-15 max-w-none -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div :style="{ transform: `rotate(${circle}deg)` }" class="absolute left-1/2 top-1/2">
                <img :src="ReactSVG" alt="React" :style="{ transform: `rotate(-${circle}deg)` }" class="absolute -left-60 top-0 size-15 max-w-none -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div :style="{ transform: `rotate(${circle}deg)` }" class="absolute left-1/2 top-1/2">
                <img :src="AngularSVG" alt="Angular" :style="{ transform: `rotate(-${circle}deg)` }" class="absolute top-60 left-0 size-15 max-w-none -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div :style="{ transform: `rotate(${circle}deg)` }" class="absolute left-1/2 top-1/2">
                <img :src="SvelteSVG" alt="Svelte" :style="{ transform: `rotate(-${circle}deg)` }" class="absolute -top-60 left-0 size-15 max-w-none -translate-x-1/2 -translate-y-1/2" />
            </div>
        </div>
    </AnimSlideIn>
</template>