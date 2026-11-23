<script lang="ts" setup>
import LeftIntroduction from './../slides/LeftIntroduction.vue'
import RightIntroduction from './../slides/RightIntroduction.vue'
import LeftHTML from './../slides/LeftHTML.vue'
import RightHTML from './../slides/RightHTML.vue'
import LeftCSS from './../slides/LeftCSS.vue'
import RightCSS from './../slides/RightCSS.vue'
import LeftJavaScript from './../slides/LeftJavaScript.vue'
import RightJavaScript from './../slides/RightJavaScript.vue'
import LeftDOM from './../slides/LeftDOM.vue';
import LeftReusability from './../slides/LeftReusability.vue'
import RightReusability from './../slides/RightReusability.vue'
import LeftExpandability from './../slides/LeftExpandability.vue'
import LeftServerClientRendering from './../slides/LeftServerClientRendering.vue'
import LeftStateManagement from './../slides/LeftStateManagement.vue'
import RightStateManagement from './../slides/RightStateManagement.vue'
import LeftBrowserComp from './../slides/LeftBrowserComp.vue'
import LeftTeamwork from './../slides/LeftTeamwork.vue'
import LeftCurrentState from './../slides/LeftCurrentState.vue'
import LeftConclusion from './../slides/LeftConclusion.vue'
import RightConclusion from './../slides/RightConclusion.vue'
import LeftBibliography from './../slides/LeftBibliography.vue'


import { PresentationManager, type ProgressInfo } from './../managers/PresentationManager'
import { inject, ref } from 'vue';

const presentationManager = inject<PresentationManager>('presentationManager');

const progressRef = ref<ProgressInfo | undefined>();

if (presentationManager) {
    presentationManager.onProgress((progress) => {
        progressRef.value = progress;
    });
}

const fullWidthTopics = [
    'Cover',
    'DOM',
    'Expandability',
    'Server/Client Rendering',
    'State Management Image',
    'Browser compatibility',
    'Teamwork',
    'Current State Chart',
    'End',
    'Bibliography'
]
</script>

<template>
    <div class="grid grid-cols-2 grid-rows-[auto_1fr] gap-2 size-full">
        <div v-if="progressRef" class="relative col-span-full text-2xl font-bold border-b border-pink-800">
            <div
                :style="{ 'clip-path': `polygon(0% 0%, ${progressRef?.progress! * 100}% 0%, ${progressRef?.progress! * 100}% 100%, 0% 100%)` }"
                class="
                    absolute
                    top-0
                    left-0
                    bg-linear-to-b
                    from-pink-700
                    to-pink-800 
                    size-full 
                    text-center 
                    transition-all 
                    duration-500
                "
            >{{ progressRef?.topic }}</div>
            <div class="size-full text-center text-pink-600">{{ progressRef?.topic }}</div>
        </div>
        <div :class="{ 'col-span-2': fullWidthTopics.includes(progressRef?.topic ?? '') }" class="size-full min-h-0">
            <LeftIntroduction />
            <LeftHTML />
            <LeftCSS />
            <LeftJavaScript />
            <LeftDOM />
            <LeftReusability />
            <LeftExpandability />
            <LeftServerClientRendering />
            <LeftStateManagement />
            <LeftBrowserComp />
            <LeftTeamwork />
            <LeftCurrentState />
            <LeftConclusion />
            <LeftBibliography />
        </div>
        <div class="size-full min-h-0">
            <RightIntroduction />
            <RightHTML />
            <RightCSS />
            <RightJavaScript />
            <RightReusability />
            <RightStateManagement />
            <RightConclusion />
        </div>
    </div>
</template>