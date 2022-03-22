import {ref, computed } from "vue"

const screenWidth = ref<number>(window.innerWidth);
window.onresize = () => {
  screenWidth.value = window.innerWidth
};
const isMobile = computed(() => screenWidth.value < 414)

export {
  screenWidth,
  isMobile
}