<script lang="ts" setup>
import { inject, ref } from 'vue';
import { type AnimationGroupProvide } from './AnimationGroup.vue';
import { PresentationManager } from './../managers/PresentationManager'

const { stepId, callNext, hidePrevious, topic, countTowardsProgress } = defineProps<{
    stepId?: number;
    callNext?: boolean;
    hidePrevious?: number[]
    topic?: string;
    countTowardsProgress?: boolean;
}>();

const emit = defineEmits<{
    (e: 'anStart'): void;
    (e: 'anEnd'): void;
}>();

const isShown = ref(false);

const animationGroup = inject<AnimationGroupProvide | undefined>('animationGroup', undefined)
if (animationGroup) {
    animationGroup.register({ type: 'step', isShown, countTowardsProgress: !countTowardsProgress, hidePrevious });
}

const presentationManager = inject<PresentationManager>('presentationManager');
if (presentationManager && stepId !== undefined && !animationGroup) {
    presentationManager.registerStep(stepId, { type: 'step', isShown, topic: topic, countTowardsProgress: !countTowardsProgress, hidePrevious });
}

const animationStartHandler = () => {
    emit('anStart');

    if (!presentationManager) return;

    presentationManager.addAnimationState();
}

const animationEndHandler = () => {
    emit('anEnd');

    if (!presentationManager) return;

    presentationManager.removeAnimationState();
    if (callNext) {
        presentationManager.callNext();
    }
}
</script>

<template>
    <div
        @animationstart.stop.self="animationStartHandler()"
        @animationend.stop.self="animationEndHandler()"
        :class="{ hidden: !(presentationManager && isShown) }"
    >
        <slot />
    </div>
</template>