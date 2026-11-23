<script lang="ts" setup>
import AnimChildBase from './AnimChildBase.vue'

const { stepId, callNext, hidePrevious, topic, countTowardsProgress } = defineProps<{
    stepId?: number;
    callNext?: boolean;
    hidePrevious?: number[];
    topic?: string;
    countTowardsProgress?: boolean;
}>();

const emit = defineEmits<{
    (e: 'anStart'): void;
    (e: 'anEnd'): void;
}>();
</script>

<template>
    <AnimChildBase
      :step-id="stepId"
      :call-next="callNext"
      :hide-previous="hidePrevious"
      :topic="topic"
      :count-towards-progress="countTowardsProgress"
      @an-start="emit('anStart')"
      @an-end="emit('anEnd')"
      class="fadeInPopUp"
    >
      <slot />
    </AnimChildBase>
</template>

<style scoped lang="css">
.fadeInPopUp {
    animation: fadein 0.5s ease-in-out both;
}

@keyframes fadein {
    0% {
      scale: 0.1;
      opacity: 0;
    }
    80% {
      scale: 1.05;
      opacity: 1;
    }
    100% {
      scale: 1;
      opacity: 1;
    }
  }
</style>