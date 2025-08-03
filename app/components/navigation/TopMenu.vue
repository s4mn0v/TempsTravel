<!-- components/NavigationTopMenu.vue -->
<script setup lang="ts">
import { computed } from 'vue'
import type { NavigationMenuItem } from '@nuxt/ui'

// 1. Obtenemos las funciones necesarias de i18n
const { t } = useI18n()
const localePath = useLocalePath()

// 2. Creamos los 'items' como una propiedad computada
const items = computed<NavigationMenuItem[][]>(() => [
  // Primer grupo de enlaces
  [
    {
      label: t('create_trip'), // Etiqueta traducida dinámicamente
      icon: 'i-heroicons-paper-airplane', // Cambia el icono a tu gusto
      to: localePath('/') // Ruta localizada dinámicamente
    },
    {
      label: t('about'),
      icon: 'i-heroicons-information-circle',
      to: localePath('/about')
    },
    {
      label: t('faq'),
      icon: 'i-heroicons-question-mark-circle',
      to: localePath('/faq')
    }
  ],
  // Segundo grupo (opcional, ejemplo con enlace externo)
  [
    {
      label: 'GitHub', // Podrías traducirlo también: t('github')
      icon: 'i-simple-icons-github',
      to: 'https://github.com/nuxt/ui', // Los enlaces externos no necesitan localePath
      target: '_blank'
    }
  ]
])
</script>

<template>
  <!-- 3. Usamos el componente con los items computados -->
  <UNavigationMenu
    color="neutral"
    :items="items"
    class="w-full"
  />
</template>