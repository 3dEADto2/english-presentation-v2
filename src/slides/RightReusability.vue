<script lang="ts" setup>
import AnimSlideIn from './../components/AnimSlideIn.vue'
import NoAnim from './../components/NoAnim.vue';

const btnTexts = [
    'Button 1',
    'Button 2',
    'Button 3'
]
</script>

<template>
    <AnimSlideIn direction="left" :step-id="6" topic="Lack of clarity & Reusability" class="flex flex-col justify-center items-center size-full border border-pink-800 p-1 rounded">
        <div class="flex flex-col gap-2 scale-300">
            <button v-for="text of btnTexts" class="bg-linear-to-b from-pink-700 to-pink-800 rounded px-2">{{ text }}</button>
        </div>
    </AnimSlideIn>
    <NoAnim :step-id="7" topic="Lack of clarity & Reusability" class="flex flex-col gap-2 justify-center items-center size-full border border-pink-800 p-1 rounded">
        <div class="flex flex-col gap-2 scale-300">
            <button v-for="text of btnTexts" class="bg-linear-to-b from-pink-700 to-pink-800 rounded px-2">{{ text }}</button>
        </div>
    </NoAnim>
    <AnimSlideIn direction="left" :step-id="8" topic="Lack of clarity & Reusability" class="grid grid-rows-[auto_1fr] size-full border border-pink-800 p-1 rounded">
        <h4 class="text-center text-lg font-semibold underline">Modern Frameworks</h4>
        <div class="flex justify-center items-center">
            <div class="scale-200">
                <p>src</p>
                <div class="border-l border-white pl-2">
                    <p>App.vue</p>
                    <p>main.ts</p>
                    <p>assets</p>
                    <p class="border-l border-white pl-2">main.css</p>
                    <p>components</p>
                    <div class="border-l border-white pl-2">
                        <p>AnimSlideIn.vue</p>
                        <p>...</p>
                    </div>
                    <p>slides</p>
                    <div class="border-l border-white pl-2">
                        <p>RightResusability.vue</p>
                        <p>...</p>
                    </div>
                    <p>views</p>
                    <p class="border-l border-white pl-2">Presentation.vue</p>
                </div>
            </div>
        </div>
    </AnimSlideIn>
</template>