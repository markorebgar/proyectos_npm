<template>
  <v-card>
    <v-img
    :src="product.image || 'https://aramar.com/wp-content/uploads/2017/05/aramar-suministros-para-el-vidrio-cristal-sin-imagen-disponible.jpg'"
    height="200" />
    <v-card-title>{{ product.name }}</v-card-title>
    <v-card-text>
      Rareza:  {{ product.rarity }}<br />
      <div v-if="existeDescuento">
        Precio: <s color="red">{{ product.price }} €</s> {{ (product.price - ((product.price * product.discount) / 100)).toFixed(2) }} €
      </div>
      <div v-if="!existeDescuento">
        Precio: {{ product.price }} €
      </div>
      Descripción: {{ 
      product.description.length > 35
      ? product.description.slice(0, 35) + '...'
      : product.description}}
    </v-card-text>
    <div v-if="existeDescuento" class="descuento">
      {{ product.discount }} %
    </div>

    <v-card-actions>
      <v-btn
        :color="favoritesStore.esFavorito(product.id) ? 'red' : 'primary'"
        :prepend-icon="favoritesStore.esFavorito(product.id) ? 'mdi-heart-off' : 'mdi-heart-plus'"
        variant="flat"
        size="small"
        block
        @click="favoritesStore.quitarPonerFavorito(product)"
      >
        {{ favoritesStore.esFavorito(product.id) ? 'Quitar de favoritos' : 'Añadir a favoritos' }}
      </v-btn>
    </v-card-actions>

  </v-card>
</template>

<script setup>
import { computed } from 'vue';
import { useFavoritesStore } from '../stores/favorites';
const favoritesStore = useFavoritesStore();

  const props = defineProps({
  product: { type: Object, required: true }
  })

  const existeDescuento = computed(() => {
  return props.product.discount > 0;
})

</script>

<style>
.descuento{
  position: absolute;
  top: 10px;
  right: 10px;
  background: red;
  color: white;
  padding: 4px 8px;
  font-weight: bold;
  border-radius: 4px;

}

</style>

