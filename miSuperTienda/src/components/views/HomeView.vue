<script setup>
import { onMounted, ref } from "vue";
import CategoryListView from "./CategoryListView.vue";
import { categoriasIniciales } from "@/data/categorias";
import { productosIniciales } from "@/data/productos";
import ProductCard from "../ProductCard.vue";
const mensaje = ref("-Bienvenido a la tienda DA2-");
const productos = ref([]);

onMounted(
async () => {
    let data = await productosIniciales();
    console.log(data);
    let max = data.length-3;

    let x = Math.floor(Math.random() * (max + 1));
    productos.value = data.slice(x, x+3 );
})

</script>
<template>


    <div class="position-relative container fondoCesped">

        <img src='https://static.wixstatic.com/media/c59840_e045b8d8f99645a68961236c2c11ac0b~mv2.gif' class="steve"
            style="position: absolute; top: 50%; width: 400px; transform: translateY(-50%);">
        <div class="position-absolute top-50 start-50 translate-middle text-white text-center">
            <h1 class="mineFont2 delineado" style="color: darkgray">
                {{ mensaje }}
            </h1>
            <h5 class="mineFont2 delineado">
                Esta es la página principal de la aplicación.
            </h5>
        </div>
    </div>


    <category-list-view style="margin-top: 5%; margin-bottom: 5%;"/>
    <v-container>
        <h2 class="mineFont2 delineado">Productos del mes!</h2>
        <v-row class="mt-4">
            <v-col v-for="product in productos" :key="product.id" cols="12" md="4">
                <ProductCard :product="product"/>
            </v-col>
        </v-row>
    </v-container>

</template>
<style>
.fondoNether{
    background-color: black;
    background-image: url("https://preview.redd.it/n3vbo9m9kkyc1.png?width=640&crop=smart&auto=webp&s=22ca9bd36b7f0fb3db19a25d370a2e8977efa9a0");
    background-repeat: repeat;
    border: 30px solid transparent;
    border-image-source: url('https://media.istockphoto.com/id/1415372318/es/vector/pixel-minecraft-estilo-obsidiana-bloque-fondo-concepto-de-juego-pixelado-sin-costuras.jpg?s=170667a&w=0&k=20&c=MSlhUW-uZMQDYCyVBo672hrS8Lasq3Tp0FWLRZrDvME=');
    border-image-slice: 60;
    border-image-repeat: round;
}
.fondoCesped{
    background-color: black;
    height: 500px;
    padding-top: 10%;
    padding-bottom: 10%;
    background-image: url('https://wallpapers.com/images/hd/minecraft-grass-9hzkv3qc6b8tpytu.jpg');
    background-repeat: repeat;
    overflow: hidden;
    margin-top: 4%;
    border: 30px solid transparent;
    border-image-source: url('https://ih1.redbubble.net/image.5717904402.5241/raf,360x360,075,t,fafafa:ca443f4786.jpg');
    border-image-slice: 60;
    border-image-repeat: round;
}

.delineado {

    text-shadow:
        -3px -3px 0 black,
        3px -3px 0 black,
        -3px 3px 0 black,
        3px 3px 0 black,
        -3px 0 0 black,
        3px 0 0 black,
        0 3px 0 black,
        0 -3px 0 black,
        -3px -1px 0 black,
        3px -1px 0 black,
        -3px 1px 0 black,
        3px 1px 0 black,
        -1px -3px 0 black,
        1px -3px 0 black,
        -1px 3px 0 black,
        1px 3px 0 black;
}

.mineFont2 {
    font-family: "Minecraft", sans-serif !important;
}

.steve {
    animation: moveSteve 8s linear infinite;
}

@keyframes moveSteve {

    0% {
        left: 100%;
    }

    100% {
        left: -250px;
    }

}
</style>