<script setup>
import HeaderVue from "./components/Header/HeaderVue.vue";
import "./assets/layoutStyles.css";
</script>

<template>
  <div class="grid-container">
    <HeaderVue class="header" />
    <div class="content bg-blue-500 px-8 p-20"></div>
    <div class="footer bg-green-500">footer</div>
  </div>
</template>
