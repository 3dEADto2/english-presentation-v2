<script lang="ts" setup>
import { codeToHtml } from 'shiki';
import { ref, onMounted } from 'vue';
import AnimSlideIn from './../components/AnimSlideIn.vue'

const basicHtml = `<body>
    <button class="btn">Button 1</button>
    <button class="btn">Button 2</button>
    <button class="btn">Button 2</button>
</body>

<style>
    .btn {
        padding: 0.5rem 1rem;
        background-color: #be185d;
        color: white;
        border: none;
        border-radius: 0.25rem;
        cursor: pointer;
    }
</style>`;

const html = ref('');

const basicVue = `<script>
    const texts = [
        'Button 1',
        'Button 2',
        'Button 3'
    ]
<\/script>

<template>
    <button v-for="text of texts" class="btn">{{ text }}</button>
</template>

<style>
    .btn {
        padding: 0.5rem 1rem;
        background-color: #be185d;
        color: white;
        border: none;
        border-radius: 0.25rem;
        cursor: pointer;
    }
</style>`;

const vue = ref('');

onMounted(async () => {
    html.value = await codeToHtml(basicHtml, {
        lang: 'html',
        theme: 'vitesse-dark'
    });
    vue.value = await codeToHtml(basicVue, {
        lang: 'vue',
        theme: 'vitesse-dark'
    });
})
</script>

<template>
    <AnimSlideIn direction="right" :step-id="6" :hide-previous="[5]" topic="Lack of clarity & Reusability" class="size-full border border-pink-800 p-1 rounded">
        <div v-html="html" class="[&_pre]:whitespace-pre-wrap [&_pre]:wrap-anywhere"></div>
    </AnimSlideIn>
    <AnimSlideIn direction="right" :step-id="7" :hide-previous="[6]" topic="Lack of clarity & Reusability" class="size-full border border-pink-800 p-1 rounded">
        <div v-html="vue" class="[&_pre]:whitespace-pre-wrap [&_pre]:wrap-anywhere"></div>
    </AnimSlideIn>
    <AnimSlideIn direction="right" :step-id="8" :hide-previous="[7]" topic="Lack of clarity & Reusability" class="grid grid-rows-[auto_1fr] size-full border border-pink-800 p-1 rounded">
        <h4 class="text-center text-lg font-semibold underline">Traditional Approach</h4>
        <div class="flex justify-center items-center">
            <div class="scale-300">
                <p>src</p>
                <div class="border-l border-white pl-2">
                    <p>css</p>
                    <p class="border-l border-white pl-2">main.css</p>
                    <p>js</p>
                    <p class="border-l border-white pl-2">main.js</p>
                    <p>html</p>
                    <p class="border-l border-white pl-2">index.html</p>
                </div>
            </div>
        </div>
    </AnimSlideIn>
</template>