<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Benefits from "./components/Benefits.vue";
import Features from "./components/Features.vue";
import Technologies from "./components/Technologies.vue";
import Testimonials from "./components/Testimonials.vue";
import Pricing from "./components/Pricing.vue";
import FAQ from "./components/FAQ.vue";
</script>

<template>
  <Navbar />
  <Hero />
  <Technologies />
  <Benefits />
  <Features />
  <Testimonials />
  <Pricing />
  <FAQ />

  <div class="flex flex-col items-center justify-center pt-12">
    <h2 class="text-center text-2xl text-muted-foreground pb-24">
      News
    </h2>
    <a
      href="https://github.com/lxmachado"
      target="_blank"
      class="text-sm pb-8 underline"
      ></a
    >
  </div>
</template>
