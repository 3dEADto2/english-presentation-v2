<script lang="ts" setup>
import { ref } from 'vue';

const dummyText = 'This is a dummy text to test how long it will take to read completely.';

const rotation = ref(0);
const interval = setInterval(() => {
    if (rotation.value >= 360) {
        rotation.value = 0;
    }
    rotation.value += 1;
}, 27)

</script>

<template>
    <div class="perspective-distant bg-white size-150 text-black">
        <span>This is a dummy </span>
        <div class="relative inline-block size-50">
            <span :style="{ transform: `rotateY(${rotation}deg)` }" class="absolute top-0 left-0 bg-blue-300 backface-hidden">FRONT</span>
            <span :style="{ transform: `rotateY(${rotation}deg)` }" class="absolute top-0 left-0 rotate-y-180 bg-red-300 backface-hidden">BACK</span>
        </div>
        <span> how long it will take to read completely.</span>
    </div>
</template>