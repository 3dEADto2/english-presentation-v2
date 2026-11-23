<script lang="ts" setup>
import AnimSlideIn from './../components/AnimSlideIn.vue'
import ReactTotalUsagePng from './../assets/img/ReactTotalUsage.png';
import StackOverflowSurvey from './../assets/img/StackOverflow2025PopularFrameworks.png';
</script>

<template>
    <AnimSlideIn direction="up" :step-id="16" :hide-previous="[15]" topic="Current State Chart" class="flex flex-col size-full border border-pink-800 p-1 rounded">
        <h4 class="text-2xl font-bold underline text-center bg-white text-black">React total usage</h4>
        <img :src="ReactTotalUsagePng" alt="Teamwork" class="size-full max-w-none object-contain bg-white" />
    </AnimSlideIn>
    <AnimSlideIn direction="up" :step-id="17" :hide-previous="[16]" topic="Current State Chart" class="size-full border border-pink-800 p-1 rounded">
        <img :src="StackOverflowSurvey" alt="Teamwork" class="size-full max-w-none object-contain" />
    </AnimSlideIn>
</template>