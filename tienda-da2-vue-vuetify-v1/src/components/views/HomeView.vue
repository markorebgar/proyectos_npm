<script setup>
import { ref } from "vue";
const mensaje = ref("Bienvenido a la tienda DA2");
</script>
<template>
    <v-container>
        <h1>{{ mensaje }}</h1>
        <p>Esta es la página principal de la aplicación.</p>
        <v-btn color="primary" to="/productos"> Ver productos </v-btn>
    </v-container>
</template>