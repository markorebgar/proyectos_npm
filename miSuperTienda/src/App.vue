<script setup>
import AppHeader from "@/components/layout/AppHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
</script>

<template>
  <v-app>
    <AppHeader />

    <v-main class="fondoLightBlue">
      <router-view />
    </v-main>
      <AppFooter />

  </v-app>

</template>


<style>

html, body, #app {
  height: 100%;
  background-color: lightskyblue;
}

.fondoLightBlue{
  background-color: lightskyblue;
}

</style>
