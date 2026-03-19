

<template>
  <div>
  <h1>Administración de la tienda</h1>
  <p>Proyecto Tienda-da2-vue</p>
  <hr>
  <Tablero :cities="paisajes"/>
  </div>

</template>
<script>
import { listaPaisajes } from './data/paisajes';
import BaseButton from './components/icons/BaseButton.vue';
import Tablero from './components/Tablero.vue';

export default {
  components: {BaseButton, Tablero},
  data(){
    return{
      paisajes: listaPaisajes,
    }
  },
  methods: {
    saludar(){
      console.log("saludar desde app");
      alert("Hola desde Vue");
    },
    despedirse(){
      alert("Adiós desde Vue");
    },
  },
};
</script>
<style scoped>
</style>
