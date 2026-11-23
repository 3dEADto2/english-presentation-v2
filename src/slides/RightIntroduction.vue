<script lang="ts" setup>
import AnimSlideIn from './../components/AnimSlideIn.vue'
import AnimationGroup from './../components/AnimationGroup.vue';
import AnimFadeInPopUp from './../components/AnimFadeInPopUp.vue'

const topics = [
    {
        title: 'Traditional Frontend Development',
        indent: 0
    },
    {
        title: 'HTML',
        indent: 1
    },
    {
        title: 'CSS',
        indent: 1
    },
    {
        title: 'JavaScript',
        indent: 1
    },
    {
        title: 'DOM',
        indent: 1
    },
    {
        title: 'What problems are being solved',
        indent: 0
    },
    {
        title: 'Lack of clarity & Reusability',
        indent: 1
    },
    {
        title: 'Expandability',
        indent: 1
    },
    {
        title: 'Server side rendering & Client side/Single page rendering',
        indent: 1
    },
    {
        title: 'State management',
        indent: 1
    },
    {
        title: 'Browser compatibility',
        indent: 1
    },
    {
        title: 'Teamwork',
        indent: 1
    },
    {
        title: 'Current situation',
        indent: 0
    },
    {
        title: 'Conclusion',
        indent: 0
    },
    {
        title: 'Bibliography',
        indent: 0
    }
]
</script>

<template>
    <AnimSlideIn direction="left" :step-id="1" :call-next="true" topic="Table of contents" class="flex flex-col gap-2 size-full border border-pink-800 p-1 rounded">
        <AnimationGroup :step-id="1" topic="Table of contents">
            <template v-for="(topic, index) of topics" :key="topic.title">
                <AnimFadeInPopUp :call-next="index < topics.length - 1" :count-towards-progress="true" :style="{ 'margin-left': `${20 * topic.indent}px` }">
                    <h4
                        :class="{ 'underline': !topic.indent }"
                        class="text-2xl font-bold"
                    >{{ !topic.indent ? '' : '&bull;' }} {{ topic.title }}</h4>
                </AnimFadeInPopUp>
            </template>
        </AnimationGroup>
    </AnimSlideIn>
</template>