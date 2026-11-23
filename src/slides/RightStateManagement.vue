<script lang="ts" setup>
import { ref } from 'vue';
import AnimSlideIn from './../components/AnimSlideIn.vue'
import NoAnim from './../components/NoAnim.vue';

const productCountNormal = ref(0);
const productCountVue = ref(0);
</script>

<template>
    <AnimSlideIn
        direction="left"
        :step-id="12"
        topic="State Management"
        class="flex flex-col justify-center items-center size-full border border-pink-800 p-1 rounded"
    >
        <div class="scale-300">
            <p>Product Count 1: {{ productCountNormal }}</p>
            <p>Product Count 2: 0</p>
            <button @click="productCountNormal++" class="bg-linear-to-b from-pink-700 to-pink-800 rounded px-2 cursor-pointer">Add product</button>
        </div>
    </AnimSlideIn>
    <NoAnim :step-id="13" topic="State Management" class="flex flex-col gap-2 justify-center items-center size-full border border-pink-800 p-1 rounded">
        <div class="scale-300">
            <p>Product Count 1: {{ productCountVue }}</p>
            <p>Product Count 2: {{ productCountVue }}</p>
            <button @click="productCountVue++" class="bg-linear-to-b from-pink-700 to-pink-800 rounded px-2 cursor-pointer">Add product</button>
        </div>
    </NoAnim>
</template>