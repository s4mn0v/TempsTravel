<!-- components/navigation/TopMenu.vue -->
<script setup lang="ts">
import { computed } from 'vue'
import type { NavigationMenuItem } from '@nuxt/ui'

const { t } = useI18n()
const localePath = useLocalePath()

const items = computed<NavigationMenuItem[][]>(() => [
  [
    {
      label: t('create_trip'),
      to: localePath('/')
    },
    {
      label: t('about'),
      to: localePath('/about')
    },
    {
      label: t('faq'),
      to: localePath('/faq')
    }
  ]
])
</script>

<template>
  <div class="w-full flex justify-center py-6">
    <div
      class="relative bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-between px-6 py-2 max-w-6xl w-full">

      <!-- Menú de navegación alineado a la izquierda -->
      <div class="flex items-center text-white text-sm uppercase tracking-widest space-x-2">
        <template v-for="(item, index) in items[0]" :key="index">
          <NuxtLink :to="item.to" class="hover:underline">
            {{ item.label }}
          </NuxtLink>
          <!-- Punto separador excepto entre penúltimo y último -->
          <span v-if="index < (items[0]?.length ?? 0) - 1" class="mx-2 text-xl">•</span>
        </template>
      </div>

      <!-- Buscador alineado a la derecha -->
      <div class="flex items-center space-x-2 text-white w-2/5">
        <UIcon name="mdi:magnify" class="w-7 h-7 hover:rotate-45 cursor-pointer transition-transform" />
        <input type="text" placeholder="Qu'as-tu en tête ?"
          class="bg-transparent border-b-2 border-white text-white placeholder-white/80 text-sm focus:outline-none w-full placeholder:text-center uppercase h-7 leading-none py-0" />
      </div>

      <!-- Logo superpuesto en el centro -->
      <div class="absolute left-1/2 transform -translate-x-1/2 -top-0.5/6 bg-white rounded-full p-2 shadow-md">
        <NuxtLink to="/" class="flex items-center justify-center">
          <img src="../../assets/img/logos/TempsTravelLogo.webp" alt="TempsTravel Logo" class="h-15 w-15" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
