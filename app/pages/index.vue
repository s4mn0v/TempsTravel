<template>
  <div class="p-8">
    <!-- Componente para cambiar de idioma -->
    <LanguageSwitcher />

    <hr class="my-8">

    <!-- Este título cambiará según el idioma seleccionado -->
    <h1 class="text-3xl font-bold">{{ $t('welcome') }}</h1>
  </div>
</template>

<script setup lang="ts">
import LanguageSwitcher from '~/components/language/Dropdown.vue';
</script>