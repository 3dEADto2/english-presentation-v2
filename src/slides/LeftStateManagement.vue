<script lang="ts" setup>
import { codeToHtml } from 'shiki';
import { ref, onMounted } from 'vue';
import AnimSlideIn from './../components/AnimSlideIn.vue'
import StateManagementJFIF from './../assets/img/StateManagement.jfif';

const basicHtml = `<script>
    let productCount = 0;

    document.getElementById('btn')?.addEventListener('click', () => {
        productCount++;
        document.getElementById('product-count-1')!.textContent = 'Product Count: ' + productCount;
    })
<\/script>

<body>
    <p id="product-count-1">Product Count 1: 0</p>
    <p id="product-count-2">Product Count 2: 0</p>
    <button id="btn">Add product</button>
</body>`;

const html = ref('');

const basicVue = `<script setup>
    import { ref } from 'vue';

    const productCount = ref(0);
<\/script>

<template>
    <p>Product Count 1: {{ productCount }}</p>
    <p>Product Count 2: {{ productCount }}</p>
    <button @click="productCount++">Add product</button>
</template>`;

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
    <AnimSlideIn direction="up" :step-id="11" :hide-previous="[10]" topic="State Management Image" class="flex flex-col gap-2 size-full border border-pink-800 p-1 rounded">
        <img :src="StateManagementJFIF" alt="DOM" class="size-full max-w-none object-contain" />
    </AnimSlideIn>
    <AnimSlideIn direction="right" :step-id="12" :hide-previous="[11]" topic="State Management" class="size-full border border-pink-800 p-1 rounded">
        <div v-html="html" class="[&_pre]:whitespace-pre-wrap [&_pre]:wrap-anywhere"></div>
    </AnimSlideIn>
    <AnimSlideIn direction="right" :step-id="13" :hide-previous="[12]" topic="State Management" class="size-full border border-pink-800 p-1 rounded">
        <div v-html="vue" class="[&_pre]:whitespace-pre-wrap [&_pre]:wrap-anywhere"></div>
    </AnimSlideIn>
</template>