<script setup>
import { useRoute } from "vue-router";
import { ref, computed, onMounted } from "vue";
const route = useRoute();
import { useFavoritesStore } from './../../stores/favorites';
import ProductFavoriteCard from "../ProductFavoriteCard.vue";
import Filtrado from "../Filtrado.vue";
const favoritesStore = useFavoritesStore();

const filteredFavorites = computed(() => {
    let result = [...favoritesStore.favorites];

    if (route.query.category) {
        result = result.filter(
            (p) => p.category.toLowerCase() === route.query.category.toLowerCase(),
        );
    }
    if (route.query.rarity) {
        result = result.filter(
            (p) => p.rarity.toLowerCase() === route.query.rarity.toLowerCase(),
        );
    }
    if (route.query.orden === "Asc") {
        result.sort((a, b) => a.rate - b.rate);
    }else{
        result.sort((a, b) => b.rate - a.rate);
    }
    return result;
});
const hayProductos = computed(() =>{
    return filteredFavorites.value.length > 0;
})

</script>
<template>
    <div>

        <h1 class="mineFont2 delineado">Favoritos:</h1>
        <h3 class="mineFont2 delineado">Orden: {{ (route.query.orden || route.query.category || route.query.rarity) || "Desc" }}</h3>
        
        <Filtrado :ruta="'/favoritos'"/>
        <v-container >
            <v-row class="mt-4">
                <div v-if="!hayProductos" class="mineFont">
                    No hay productos con las caracteristicas especificadas...
                </div>
                <v-col v-for="favorito in filteredFavorites" :key="favorito.id" cols="12" md="4">
                    <ProductFavoriteCard :product="favorito"/>
                </v-col>
            </v-row>
        </v-container>
        <v-btn to="/productos" class="mineFont" color="green" style="margin-bottom: 4% ;">Volver al catálogo</v-btn>
    </div>
</template>
