<template>
  <v-card>
    <v-card-title>{{ product.name }}</v-card-title>

    <v-card-text>
      Marca: {{ product.brand }}<br />
      Precio: {{ product.price }} €
    </v-card-text>

    <v-card-actions>
      <v-btn color="primary" variant="text" :to="`/producto/${product.id}`">
        Ver detalle
      </v-btn>

      <v-btn color="error" variant="text" @click="emit('delete', product.id)">
        Eliminar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
defineProps({
  product: Object,
});

const emit = defineEmits(["delete"]);
</script>
