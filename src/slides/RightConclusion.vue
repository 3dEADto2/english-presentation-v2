<script lang="ts" setup>
import AnimSlideIn from './../components/AnimSlideIn.vue'
import AnimationGroup from './../components/AnimationGroup.vue'
import AnimFadeInPopUp from './../components/AnimFadeInPopUp.vue';

const argumentsList = [
    {
        traditional: [
            'boilerplate and manually created setups'
        ],
        framework: [
           'less boilerplate',
           'faster & automated setups'
        ]
    },
    {
        traditional: [
            'everything has to be written from scratch, which leads to a longer development time'
        ],
        framework: [
            'simpler and faster application development'
        ]
    },
    {
        traditional: [
            'the larger projects become, the more difficult they are to manage'
        ],
        framework: [
            'better maintainability & scalability of projects'
        ]
    },
    {
        traditional: [
            'large community',
            'many non-standardized extensions'
        ],
        framework: [
            'large communities',
            'many standardized extensions such as plugins, add-ons, and libraries'
        ]
    },
    {
        traditional: [
            'version and browser compatibility must be integrated manually'
        ],
        framework: [
            'automatic version and browser compatibility'
        ]
    },
    {
        traditional: [
            'performance optimizations must be integrated manually'
        ],
        framework: [
            'versatile performance optimizations'
        ]
    },
    {
        traditional: [
            'server-side-rendering',
            'client-side rendering must be integrated manually'
        ],
        framework: [
            'client-side-rendering',
            'server-side-rendering'
        ]
    },
    {
        traditional: [
            'state management must be integrated manually.'
        ],
        framework: [
            'simplified State Management'
        ]
    }
]
</script>

<template>
    <AnimSlideIn direction="left" :step-id="18" :call-next="true" topic="Conclusion" class="flex flex-col size-full border border-pink-800 rounded">
        <AnimationGroup :step-id="18" topic="Conclusion">
            <AnimFadeInPopUp :call-next="true" :count-towards-progress="true" class="flex">
                <div class="w-1/2 border-b border-pink-800">
                    <h4 class="px-1 text-2xl font-semibold">Traditional Development</h4>
                </div>
                <div class="w-1/2 border-l border-b border-pink-800">
                    <h4 class="px-1 text-2xl font-semibold">Modern Frameworks</h4>
                </div>
            </AnimFadeInPopUp>
            <AnimFadeInPopUp v-for="(argument, index) of argumentsList" :key="index" :call-next="true" :count-towards-progress="true" class="flex">
                <div class="w-1/2 border-b border-pink-800">
                    <p v-for="(t, indexT) of argument.traditional" :key="indexT" class="px-1">&bull; {{ t }}</p>
                </div>
                <div class="w-1/2 border-l border-b border-pink-800">
                    <p v-for="(f, indexF) of argument.framework" :key="indexF" class="px-1">&bull; {{ f }}</p>
                </div>
            </AnimFadeInPopUp>
            <AnimFadeInPopUp :count-towards-progress="true" class="grow flex justify-center items-center p-3">
                <h4 class="p-1 bg-linear-to-b from-pink-700 to-pink-800 text-2xl font-bold rounded">Nowadays, there is effectively no major website left that isn&rsquo;t built on a framework. This means that front-end developers who want to stay relevant and remain competitive in the job market must be proficient in front-end frameworks.</h4>
            </AnimFadeInPopUp>
        </AnimationGroup>
    </AnimSlideIn>
</template>