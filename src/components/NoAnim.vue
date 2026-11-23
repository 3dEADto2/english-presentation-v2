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
    >
      <slot />
    </AnimChildBase>
</template>