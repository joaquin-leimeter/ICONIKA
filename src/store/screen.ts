import {ref, computed } from "vue"

const screenWidth = ref<number>(0);
window.onresize = () => {
  screenWidth.value = window.innerWidth
};
const isMobile = computed(() => screenWidth.value < 1024)

export {
  screenWidth,
  isMobile
}