<script setup>
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
const isOpen = ref(false);
const handleClick = () => {
  isOpen.value = !isOpen.value;
};

//clickoutside behaviour
const target = ref(null);
onClickOutside(target, (event) => console.log(event));
</script>

<template>
  <div ref="target" class="bg-green-300">
    <div @click="handleClick" class="">Hello hamburgermenu!</div>
    <div v-if="isOpen" class="h-10 w-10 bg-[#000000] z-10"></div>
  </div>
</template>

<style></style>
