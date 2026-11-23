<script lang="ts" setup>
import { codeToHtml } from 'shiki';
import { ref, onMounted } from 'vue';
import AnimSlideIn from './../components/AnimSlideIn.vue'

const basicHtml = `<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Frontend Frameworks</title>
</head>
<body>
    <h1>Hello World</h1>
</body>`

const html = ref('');

onMounted(async () => {
    html.value = await codeToHtml(basicHtml, {
        lang: 'html',
        theme: 'vitesse-dark'
    });
})
</script>

<template>
    <AnimSlideIn direction="right" :step-id="2" :hide-previous="[0, 1]" topic="HTML" class="size-full border border-pink-800 p-1 rounded">
        <div v-html="html" class="[&_pre]:whitespace-pre-wrap [&_pre]:wrap-anywhere"></div>
    </AnimSlideIn>
</template>