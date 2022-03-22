<script setup>
import HamburgerMenuVue from "../HamburgerMenu/HamburgerMenu.vue";
import { isMobile } from "@/store/screen";
</script>

<template>
  <header class="flex justify-between h-[3.75rem] p-4 bg-[#FFF]">
    <span class="text-[#F4D4E0] font-bold text-lg">ICONIKA</span>
    <HamburgerMenuVue v-if="isMobile" />
  </header>
</template>

<style></style>
