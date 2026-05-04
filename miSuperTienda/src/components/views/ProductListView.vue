<script setup>
import { productosIniciales } from "./../../data/productos";
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const products = ref([]);


onMounted(async () => {
    console.log("Mounted ejecutado")
    const data = await productosIniciales();
    console.log(data)
    products.value = data;

});

const filteredProducts = computed(() => {
    let result = [...products.value];
    if (route.query.marca) {
        result = result.filter(
            (p) => p.brand.toLowerCase() === route.query.marca.toLowerCase(),
        );
    }
    if (route.query.orden === "precioAsc") {
        result.sort((a, b) => a.price - b.price);
    }
    if (route.query.orden === "precioDesc") {
        result.sort((a, b) => b.price - a.price);
    }
    return result;
});
</script>
<template>
    <v-container>
        <h1>Productos</h1>
        <p>Marca: {{ route.query.marca || "todas" }}</p>
        <p>Orden: {{ route.query.orden || "sin ordenar" }}</p>
        <v-btn class="mr-2" :to="{ path: '/productos', query: { marca: 'Mojang' } }">
            Filtrar Logitech
        </v-btn>
        <v-btn class="mr-2" :to="{ path: '/productos', query: { orden: 'precioAsc' } }">
            Ordenar por precio
        </v-btn>
        <v-row class="mt-4">
            <v-col v-for="product in filteredProducts" :key="product.id" cols="12" md="4">
                <v-card>
                    <v-img
                        :src="product.image || 'https://aramar.com/wp-content/uploads/2017/05/aramar-suministros-para-el-vidrio-cristal-sin-imagen-disponible.jpg'"
                        height="200" />
                    <v-card-title>{{ product.name }}</v-card-title>

                    <v-card-text>
                        Marca: {{ product.brand }}<br />
                        Precio: {{ product.price }} €
                    </v-card-text>
                    <v-card-actions>
                        <v-btn :to="`/producto/${product.id}`"> Ver detalle </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>