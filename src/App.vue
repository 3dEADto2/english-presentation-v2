<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { PresentationManager } from './managers/PresentationManager'
import { provide } from 'vue'

const presentationManager = new PresentationManager();

provide('presentationManager', presentationManager);
</script>

<template>
  <header>
    <nav class="hidden gap-3">
      <RouterLink to="/">Presentation</RouterLink>
      <RouterLink to="/playground">Playground</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
