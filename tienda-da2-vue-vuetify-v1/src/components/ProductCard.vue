<template>
  <v-card class="pa-2" elevation="2">
    <v-card-title>
      {{ product.nombre }}
    </v-card-title>

    <v-card-text> Precio: {{ product.precio }} € </v-card-text>

    <v-card-actions class="justify-space-between">
      <v-btn color="error" variant="outlined" @click="emitDelete">
        Eliminar
      </v-btn>

      <v-btn color="primary" variant="flat" @click="emitDuplicate">
        Duplicar
      </v-btn>
    </v-card-actions>
  </v-card>

  <!-- 
  <div class="card">
    <h4>{{ product.nombre }}</h4>
    <p>{{ product.precio }} €</p>
    <button @click="emitDelete">Eliminar</button>
    <button @click="emitDuplicate">Duplicar</button>
  </div>
 -->
</template>
<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  emits: ["delete"],
  methods: {
    emitDelete() {
      this.$emit("delete", this.product.id);
    },
    emitDuplicate() {
      this.$emit("duplicate", this.product);
    },
  },
};
</script>
<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 6px;
}
</style>
