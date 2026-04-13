<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const categories = ref([
    { id: 1, nombre: "Minerales" },
    { id: 2, nombre: "Armas" },
    { id: 3, nombre: "Enemigos" },
    { id: 4, nombre: "Animales" },
    { id: 5, nombre: "Especiales" },
]);
const filteredCategories = computed(() => {
    let result = [...categories.value];
    if (route.query.orden === "nombreAsc") {
        result.sort((a, b) => a.nombre.localeCompare(b.nombre));
    }
    if (route.query.orden === "nombreDesc") {
        result.sort((a, b) => b.nombre.localeCompare(a.nombre));
    }
    return result;
});
</script>
<template>
    <v-container>
        <h1>Categorias</h1>
        <p>Orden: {{ route.query.orden || "sin ordenar" }}</p>
        <v-btn class="mr-2" :to="{ path: '/categorias', query: { orden: 'nombreAsc' } }">
            Ordenar Ascendente
        </v-btn>
        <v-btn class="mr-2" :to="{ path: '/categorias', query: { orden: 'nombreDesc' } }">
            Ordenar Descendente
        </v-btn>
        <v-row class="mt-4">
            <v-col v-for="category in filteredCategories" :key="category.id" cols="12" md="4">
                <v-card>
                    <v-card-title>{{ category.nombre }}</v-card-title>
                    <v-card-text>
                        Id: {{ category.id }}<br />
                    </v-card-text>
                    <v-card-actions>
                        <v-btn :to="`/categorias/${category.id}`"> Ver detalle </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>