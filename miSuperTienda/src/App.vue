<script setup>
import AppHeader from "@/components/layout/AppHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
</script>

<template>
  <v-app>
    <AppHeader />
    <v-main style="background-color: lightskyblue;   width: 100%;">
      <router-view />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: { AppHeader, AppFooter },
}
</script>
<style>
body {
  background-color: lightskyblue;
}
</style>
