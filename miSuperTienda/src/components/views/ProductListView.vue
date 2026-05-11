<script setup>
import { productosIniciales } from "./../../data/productos";
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import ProductCard from "../ProductCard.vue";
import { categoriasIniciales } from "@/data/categorias";
import Filtrado from "../Filtrado.vue";
const route = useRoute();
const products = ref([]);
const categories = ref([]);


onMounted(async () => {
    const dataProducts = await productosIniciales();
    products.value = dataProducts;

    const dataCategories = await categoriasIniciales();
    categories.value = dataCategories;

});

const filteredProducts = computed(() => {
    let result = [...products.value];

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
        result.sort((a, b) => a.price - b.price);
    }
    if (route.query.orden === "Desc") {
        result.sort((a, b) => b.price - a.price);
    }
    return result;
});

const hayProductos = computed(() =>{
    return filteredProducts.value.length > 0;
})
</script>
<template>
    <v-container>
        <h1 class="mineFont2 delineado">Productos</h1>
        <h3 class="mineFont2 delineado">Orden: {{ (route.query.orden || route.query.category || route.query.rarity) || "sin ordenar" }}</h3>

        <Filtrado :ruta="'/productos'"/>
 
        <v-row class="mt-4">
                <div v-if="!hayProductos" class="mineFont">
                    No hay productos con las caracteristicas especificadas...
                </div>
            <v-col v-for="product in filteredProducts" :key="product.id" cols="12" md="4">
                <ProductCard :product="product"/>
            </v-col>
        </v-row>
    </v-container>
</template>
<style>
.fondoNether2{
    background-color: black;
    background-image: url("https://preview.redd.it/n3vbo9m9kkyc1.png?width=640&crop=smart&auto=webp&s=22ca9bd36b7f0fb3db19a25d370a2e8977efa9a0");
    background-repeat: repeat;
    border: 15px solid transparent;
    border-image-source: url('https://media.istockphoto.com/id/1415372318/es/vector/pixel-minecraft-estilo-obsidiana-bloque-fondo-concepto-de-juego-pixelado-sin-costuras.jpg?s=170667a&w=0&k=20&c=MSlhUW-uZMQDYCyVBo672hrS8Lasq3Tp0FWLRZrDvME=');
    border-image-slice: 60;
    border-image-repeat: round;
}
</style>