<script lang="ts" setup>
import AnimSlideIn from './../components/AnimSlideIn.vue'
import TeamworkPng from './../assets/img/teamwork_trans.png';
</script>

<template>
    <AnimSlideIn direction="up" :step-id="15" :hide-previous="[14]" topic="Teamwork" class="size-full border border-pink-800 p-1 rounded">
        <img :src="TeamworkPng" alt="Teamwork" class="size-full max-w-none object-contain" />
    </AnimSlideIn>
</template>