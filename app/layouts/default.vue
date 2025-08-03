<template>
  <div>
    <TopMenu />
    <slot />
  </div>
</template>

<script setup lang="ts">
import TopMenu from '~/components/navigation/TopMenu.vue';
</script>