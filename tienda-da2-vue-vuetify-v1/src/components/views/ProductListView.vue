<script setup>
import { ref, onMounted } from "vue";
import { getProducts } from "@/services/productService";
import ProductList from "@/components/products/ProductList.vue";
const products = ref([]);
const loading = ref(true);
const error = ref(null);
onMounted(async () => {
  try {
    products.value = await getProducts();
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
});
</script>
<template>
  <section>
    <h1>Lista de productos</h1>
    <p v-if="loading">Cargando productos...</p>
    <p v-else-if="error">{{ error }}</p>
    <ProductList v-else :products="products" />
  </section>
</template>