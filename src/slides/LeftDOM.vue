<script lang="ts" setup>
import AnimSlideIn from './../components/AnimSlideIn.vue'
import DOMPNG from './../assets/img/DOM.png';
</script>

<template>
    <AnimSlideIn direction="up" :step-id="5" :hide-previous="[4]" topic="DOM" class="flex flex-col gap-2 size-full border border-pink-800 p-1 rounded">
        <img :src="DOMPNG" alt="DOM" class="size-full max-w-none object-contain" />
    </AnimSlideIn>
</template>