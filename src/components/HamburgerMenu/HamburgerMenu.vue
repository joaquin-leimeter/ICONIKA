<script setup>
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
const isOpen = ref(false);

//clickoutside behaviour
const target = ref(null);
onClickOutside(target, () => {
  isOpen.value = !isOpen.value;
});

const handleClick = () => {
  // if (!isOpen.value) isOpen.value = true;
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="bg-green-300">
    <div @click="isOpen = true" class="px-2">| | |</div>
  </div>
  <transition name="slide-fade">
    <div
      ref="target"
      v-if="isOpen"
      class="p-5 absolute right-0 top-0 h-[100vh] w-[300px] bg-[#000]"
    >
      <div class="h-full w-full bg-white relative">
        <div
          @click="isOpen = false"
          class="absolute right-0 top-0 bg-[#f310ac] h-[50px] w-[50px]"
        ></div>
        <ul class="list list-none flex flex-col">
          <li>home</li>
          <li>about</li>
          <li>bla</li>
          <li>blah</li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<style>
.list {
  font-size: 2em;
}
.list > li {
  margin: 50px auto;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.4s ease;
}
.slide-fade-enter-from, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(100px);
  opacity: 0;
}
</style>

<style></style>
