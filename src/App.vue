<script setup>
import HeaderVue from "./components/Header";
import ContentBodyVue from "./components/Content";
import FooterVue from "./components/Footer";
import "./assets/layoutStyles.css";
</script>

<template>
  <div class="grid-container">
    <HeaderVue class="header" />
    <ContentBodyVue class="content" />
    <FooterVue class="footer" />
  </div>
</template>

<style></style>
