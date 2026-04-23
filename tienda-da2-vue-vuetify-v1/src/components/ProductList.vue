<script setup>
defineProps({
  products: {
    type: Array,
    required: true,
  },
});
</script>
<template>
  <div class="product-list">
    <article v-for="product in products" :key="product.id" class="productitem">
      <h3>{{ product.title }}</h3>
      <p>{{ product.description }}</p>
      <p>Precio: {{ product.price }} €</p>
      <p>Categoría: {{ product.category }}</p>
    </article>
  </div>
</template>