<template>
  <div>
    <section class="relative h-screen bg-cover bg-center bg-[url('../../assets/img/backgrounds/Main.webp')]">
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/20"></div>

      <!-- Content Centered -->
      <div
        class="relative z-10 max-w-4xl mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white">
        <h1 class="text-4xl md:text-6xl font-extrabold mb-4">
          Dive Into The Depths Of <span class="text-[#C0B7E8]">Virtual Reality</span>
        </h1>
        <p class="text-lg md:text-xl mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <button
          class="bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] hover:opacity-80 text-[#302c42] font-semibold px-6 py-3 rounded-full transition">
          Build Your World
        </button>
      </div>

      <!-- Curved Bottom Divider Transparent -->
      <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 93.49" preserveAspectRatio="none" class="w-full h-[100px]">
          <path d="M0,93.49H1440s0-14.33,0-93.49C1219.81,51,973.42,79.52,713.29,79.52A3247.39,3247.39,0,0,1,0,0C0,79.82,0,93.49,0,93.49Z" fill="white"></path>
        </svg>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Home',
  description: 'Hero section with background image and overlay',
  layout: false,
});
</script>
