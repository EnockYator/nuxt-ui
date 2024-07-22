<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>


<script setup lang="ts">
import { _scale, _width } from "#tailwind-config/theme";
import { definePageMeta } from "./node_modules/nuxt/dist/pages/runtime/composables";

definePageMeta({
  middleware: ['auth'],
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
});
</script>

