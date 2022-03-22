<script setup>
import HamburgerMenuVue from "../HamburgerMenu/HamburgerMenu.vue";
import { watch } from "vue";
import { screenWidth, isMobile } from "@/store/screen.ts";

<template>
  <header class="flex justify-between h-[3.75rem] p-4 bg-[#FFF]">
    <span class="text-[#F4D4E0] font-bold text-lg">ICONIKA</span>
    <HamburgerMenuVue v-if="true" />
    <ul class="flex">
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </header>
</template>

<style></style>
