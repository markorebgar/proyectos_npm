<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
const id = route.params.id;
</script>
<template>
    <v-container>
        <h1>Detalle del producto</h1>
        <p>Identificador recibido por la ruta: {{ id }}</p>
        <v-btn to="/productos"> Volver a productos </v-btn>
    </v-container>
</template>