<template>
  <div>
    <h1 class="bg-blue-700">Temps Travel</h1>
    <NuxtLink v-for="{code, name} in locales" :key="code"
    :to="$switchLocalePath(code)"
    class="mr-4"
    :class="{
      'text-white': code === $i18n.locale
    }"
    >
    {{ name }}
    </NuxtLink>

    <p>{{ $t("hello") }}</p>
  </div>
</template>

<script setup lang="ts">
const { locales } = useI18n();
</script>