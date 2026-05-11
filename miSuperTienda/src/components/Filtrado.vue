<script setup>
import { categoriasIniciales } from "@/data/categorias";
import { ref, computed, onMounted } from "vue";


const categories = ref([]);
onMounted(async () => {
     const dataCategories = await categoriasIniciales();
    categories.value = dataCategories;

});

  const props = defineProps({
  ruta: { type: String, required: true }
  })

</script>
<template>
    <div class="fondoNether2">
            <h5 class="mineFont2 delineado">Ordenar por categorias:</h5>

                <div style="display: inline; margin-left: 4.5%;" v-for="category in categories" :key="category.id">
                    <v-btn style="margin-top: 2%; margin-bottom: 2%;" color="green" class="mr-2" :to="{ path: props.ruta, query: { category: category.name} }">
                        {{ category.name }}
                    </v-btn>
                </div>

        </div>
        <div style="margin-top: 1%; margin-bottom: 1%; display: flex; flex-wrap: wrap;">
            <div style="display: flex; margin-right: 15%;">
                <h5 class="mineFont2 delineado">Ordenar por Precio:</h5>
                <v-btn color="brown" class="mr-2" :to="{ path: props.ruta, query: { orden: 'Asc' } }">
                    Ascendente
                </v-btn>
                    <v-btn color="brown" style="margin-left: 4%;" class="mr-2" :to="{ path: props.ruta, query: { orden: 'Desc' } }">
                    Descencente
                </v-btn>
            </div> 
            <div style="display: flex;">
                <h5 class="mineFont2 delineado">Ordenar por Rareza:</h5>
                    <v-btn color="pink" class="mr-2" :to="{ path: props.ruta, query: { rarity: 'baja' } }">
                        Baja
                    </v-btn>
                    <v-btn color="pink" style="margin-left: 4%;" class="mr-2" :to="{ path: props.ruta, query: { rarity: 'media' } }">
                        Media
                    </v-btn>
                    <v-btn style="margin-left: 4%;" color="pink" class="mr-2" :to="{ path: props.ruta, query: { rarity: 'alta' } }">
                        Alta
                    </v-btn>
            </div>
        </div>
</template>
<style>
.fondoNether2{
    background-color: black;
    background-image: url("https://preview.redd.it/n3vbo9m9kkyc1.png?width=640&crop=smart&auto=webp&s=22ca9bd36b7f0fb3db19a25d370a2e8977efa9a0");
    background-repeat: repeat;
    border: 15px solid transparent;
    border-image-source: url('https://media.istockphoto.com/id/1415372318/es/vector/pixel-minecraft-estilo-obsidiana-bloque-fondo-concepto-de-juego-pixelado-sin-costuras.jpg?s=170667a&w=0&k=20&c=MSlhUW-uZMQDYCyVBo672hrS8Lasq3Tp0FWLRZrDvME=');
    border-image-slice: 60;
    border-image-repeat: round;
}
</style>