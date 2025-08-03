<script setup lang="ts">
const { locales, locale, setLocale } = useI18n()
</script>

<template>
  <UDropdownMenu
    :items="locales.map(l => ({
      label: l.name,
      icon: l.code === locale ? 'i-lucide-check' : undefined,
      disabled: l.code === locale,
      onSelect: () => setLocale(l.code)
    }))"
    :ui="{ content: 'w-48' }"
    arrow
  >
    <UButton
      :label="locales.find(l => l.code === locale)?.name || 'Idioma'"
      icon="i-mdi-world"
      color="neutral"
      variant="outline"
    />
  </UDropdownMenu>
</template>