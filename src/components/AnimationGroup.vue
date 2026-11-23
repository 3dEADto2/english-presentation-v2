<script lang="ts" setup>
import { provide, type Ref, inject } from 'vue';
import { type registeredStep, PresentationManager } from './../managers/PresentationManager'

export interface AnimationGroupProvide {
    register: (el: { type: 'step', isShown: Ref<boolean>, countTowardsProgress?: boolean, hidePrevious?: number[] }) => void;
}

const { stepId, topic } = defineProps<{
    stepId: number;
    topic?: string;
}>(); 

const presentationManager = inject<PresentationManager>('presentationManager');

let registeredIndex = 0;

provide('animationGroup', {
    register: (el: registeredStep) => {
        presentationManager?.registerStep(stepId + (++registeredIndex / 100), { ...el, topic: topic });
    }
} as AnimationGroupProvide)
</script>

<template>
    <slot></slot>
</template>