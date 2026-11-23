<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
import AnimSlideIn from './../components/AnimSlideIn.vue'
import NoAnim from './../components/NoAnim.vue'
import StackOverflowSurvey from './../assets/img/StackOverflow2025PopularFrameworks.png';

const endText = 'Thank you for your attention. Any questions?';
const endObject = endText.split('').map((char) => ({ char, rotation: ref(char === ' ' ? 0 : Math.random() * 360), translateY: ref(180) }))

const anEndHandler = () => {
    endObject.forEach((item) => {
        item.rotation.value = 0;
        item.translateY.value = 0;
    })
}
</script>

<template>
    <NoAnim :step-id="18" :hide-previous="[17]" topic="Conclusion" class="size-full border border-pink-800 p-1 rounded">
        <img :src="StackOverflowSurvey" alt="Teamwork" class="size-full max-w-none object-contain" />
    </NoAnim>
    <AnimSlideIn
        direction="up"
        :step-id="19"
        :hide-previous="[18]"
        topic="End"
        @an-end="anEndHandler"
        class="flex justify-center items-center size-full border border-pink-800 p-1 rounded"
    >
        <div class="border-b border-white animate-pulse">
            <span
                v-for="(item, index) of endObject"
                :style="{
                    transform: `translateY(-${item.translateY.value}px)`,
                    opacity: item.translateY.value ? 0 : 1,
                    'transition-delay': `${index * 200}ms`
                }"
                class="inline-block transition-all duration-500 text-4xl"
            >
                <p
                    :class="{
                        'w-2': item.char === ' '
                    }"
                    :style="{
                        rotate: `${item.rotation.value}deg`,
                        'transition-delay': `${index * 200}ms`
                    }"
                    class="block transition-all duration-500"
                >{{ item.char }}</p>
            </span>
        </div>
    </AnimSlideIn>
</template>