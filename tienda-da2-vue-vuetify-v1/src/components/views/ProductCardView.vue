<template>
  <v-container>
    <v-btn class="mb-4" variant="text" to="/productos">
      Volver a productos
    </v-btn>

    <v-card v-if="product" class="pa-4">
      <v-card-title class="text-h5"> Editar producto </v-card-title>

      <v-card-text>
        <v-text-field v-model="product.name" label="Nombre" />

        <v-text-field v-model="product.brand" label="Marca" />

        <v-text-field v-model="product.price" label="Precio" type="number" />
      </v-card-text>

      <v-card-actions>
        <v-btn color="primary" @click="saveProduct"> Guardar cambios </v-btn>

        <v-btn variant="text" to="/productos"> Cancelar </v-btn>
      </v-card-actions>
    </v-card>

    <v-alert v-else type="error" variant="tonal">
      Producto no encontrado
    </v-alert>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getProductById, updateProduct } from "@/services/productService";

const route = useRoute();
const router = useRouter();

const id = Number(route.params.id);
const originalProduct = getProductById(id);

const product = ref(originalProduct ? { ...originalProduct } : null);

function saveProduct() {
  updateProduct(product.value);
  router.push("/productos");
}
</script>
