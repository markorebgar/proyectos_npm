<template>
  <v-row>
    <v-col v-for="product in products" :key="product.id" cols="12" md="3">
      <ProductCard
        :product="product"
        @delete="emit('delete-product', $event)"
      />
    </v-col>
  </v-row>
</template>

<script setup>
import ProductCard from "@/components/products/ProductCard.vue";

defineProps({
  products: Array,
});

const emit = defineEmits(["delete-product"]);
</script>
