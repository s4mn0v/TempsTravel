<template>
  <div>
    <TopMenu />
    <slot />
  </div>
</template>

<script setup lang="ts">
import TopMenu from '~/components/navigation/TopMenu.vue';

const route = useRoute();
useHead({
  meta: [{property: 'og:title', content: `Temps Travel - ${route.meta.title}`}],
})
</script>