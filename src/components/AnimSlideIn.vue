<script lang="ts" setup>
import AnimChildBase from './AnimChildBase.vue'

const { direction, stepId, callNext, hidePrevious, topic, countTowardsProgress } = defineProps<{
  direction: 'up' | 'down' | 'left' | 'right';
  stepId?: number;
  callNext?: boolean;
  topic?: string;
  hidePrevious?: number[];
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
      :class="{ 
        'slide-up': direction === 'up',
        'slide-down': direction === 'down',
        'slide-right': direction === 'right',
        'slide-left': direction == 'left'
      }"
      @an-start="emit('anStart')"
      @an-end="emit('anEnd')"
    >
      <slot />
    </AnimChildBase>
</template>

<style scoped lang="css">
.slide-down {
    animation: slidedown 0.5s ease-in-out both;
}

@keyframes slidedown {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    80% {
      transform: translateY(1%);
      opacity: 1;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

.slide-up {
  animation: slideup 0.5s ease-in-out both;
}

@keyframes slideup {
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
    80% {
      transform: translateY(-1%);
      opacity: 1;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

.slide-right {
  animation: slideright 0.5s ease-in-out both;
}

@keyframes slideright {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    80% {
      transform: translateX(1%);
      opacity: 1;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

.slide-left {
  animation: slideleft 0.5s ease-in-out both;
}

@keyframes slideleft {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    80% {
      transform: translateX(-1%);
      opacity: 1;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
</style>