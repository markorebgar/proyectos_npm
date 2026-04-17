<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="mb-2">Productos</h1>
        <p class="text-medium-emphasis">
          Marca: {{ route.query.marca || "todas" }} | Orden:
          {{ route.query.orden || "sin ordenar" }}
        </p>
      </v-col>
    </v-row>

    <v-row class="mb-6">
      <v-col>
        <v-card class="pa-4 d-flex ga-4">
          <v-btn
            color="primary"
            variant="outlined"
            :to="{ path: '/productos', query: { marca: 'Logitech' } }"
          >
            Filtrar Logitech
          </v-btn>

          <v-btn
            color="primary"
            variant="outlined"
            :to="{ path: '/productos', query: { orden: 'precioAsc' } }"
          >
            Ordenar por precio
          </v-btn>

          <v-btn variant="text" :to="{ path: '/productos' }">
            Limpiar filtros
          </v-btn>
        </v-card>
      </v-col>
    </v-row>

    <ProductList :products="filteredProducts" @delete-product="removeProduct" />
  </v-container>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import ProductList from "@/components/products/ProductList.vue";
import { getProducts, deleteProduct } from "@/services/productService";

const route = useRoute();

const products = ref(getProducts());

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

function removeProduct(id) {
  deleteProduct(id);
  products.value = getProducts();
}
</script>
