<script lang="ts" setup>
import AnimSlideIn from './../components/AnimSlideIn.vue'
import SettingsLineSVG from './../assets/svg/settings-line-icon.svg?url&no-inline'

const alertMessage = () => {
    alert('Hello World!');
}

</script>

<template>
    <AnimSlideIn direction="left" :step-id="4" topic="JavaScript" class="grid grid-rows-2 size-full border border-pink-800 p-1 rounded">
        <div class="size-full flex justify-center items-center">
            <button @click="alertMessage()" class="text-2xl font-bold text-center bg-linear-to-b from-pink-700 to-pink-800 rounded px-2 cursor-pointer">Hello World</button>
        </div>
        <div
            :style="{
                maskImage: `url(${SettingsLineSVG})`,
                WebkitMaskImage: `url(${SettingsLineSVG})`,
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