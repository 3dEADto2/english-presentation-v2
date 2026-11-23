<script lang="ts" setup>
import AnimSlideIn from './../components/AnimSlideIn.vue'
import BrowserCompJfif from './../assets/img/browser-compatibility-chart.jfif';
</script>

<template>
    <AnimSlideIn direction="up" :step-id="14" :hide-previous="[13]" topic="Browser compatibility" class="size-full border border-pink-800 p-1 rounded">
        <img :src="BrowserCompJfif" alt="Browser compatibility" class="size-full max-w-none object-contain" />
    </AnimSlideIn>
</template>