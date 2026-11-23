<script lang="ts" setup>
import { codeToHtml } from 'shiki';
import { ref, onMounted } from 'vue';
import AnimSlideIn from './../components/AnimSlideIn.vue'

const basicHtml = `<body>
    <div class="wrapper">
        <h1>Hello World</h1>
    </div>
</body>`

const html = ref('');

const basicCss = `<style>
.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}

h1 {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    background: linear-gradient(to bottom, #be185d, #831843);
    color: white;
    border-radius: 0.5rem;
}
</style>`

const css = ref('');

onMounted(async () => {
    html.value = await codeToHtml(basicHtml, {
        lang: 'html',
        theme: 'vitesse-dark'
    });
    css.value = await codeToHtml(basicCss, {
        lang: 'html',
        theme: 'vitesse-dark'
    });
})
</script>

<template>
    <AnimSlideIn direction="right" :step-id="3" :hide-previous="[2]" topic="CSS" class="flex flex-col gap-2 size-full border border-pink-800 p-1 rounded">
        <div v-html="html" class="[&_pre]:whitespace-pre-wrap [&_pre]:wrap-anywhere"></div>
        <div v-html="css" class="[&_pre]:whitespace-pre-wrap [&_pre]:wrap-anywhere"></div>
    </AnimSlideIn>
</template>