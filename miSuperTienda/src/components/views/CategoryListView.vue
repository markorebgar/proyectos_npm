<script setup>
import { categoriasIniciales } from "@/data/categorias";
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const categories = ref([]);
onMounted(async () => {
    const data = await categoriasIniciales();
    categories.value = data;

});

</script>
<template>
    <v-container class="fondoNether">
        <h2 class="mineFont2 delineado">Categorías:</h2>
        <v-row class="mt-4">
            <v-col v-for="category in categories" :key="category.id" cols="12" md="4">
                <v-card>
                        <v-img
                        :src="category.image || 'https://aramar.com/wp-content/uploads/2017/05/aramar-suministros-para-el-vidrio-cristal-sin-imagen-disponible.jpg'"
                        height="200" />
                    <v-card-title>{{ category.name }}</v-card-title>
                    <v-card-text>
                        Id: {{ category.id }}<br />
                    </v-card-text>
                    <v-card-actions>
                        <v-btn :to="{ path: '/productos', query: { category: category.name} }"> Ver Productos </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

