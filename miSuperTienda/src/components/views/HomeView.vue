<script setup>
import { ref } from "vue";
const mensaje = ref("Bienvenido a la tienda DA2");
</script>
<template>


    <div class="position-relative container" style="background-color: black;
                    padding-top: 10%;
                    padding-bottom: 10%;
                    background-image: url('https://preview.redd.it/n3vbo9m9kkyc1.png?width=640&crop=smart&auto=webp&s=22ca9bd36b7f0fb3db19a25d370a2e8977efa9a0');
                    background-repeat: repeat;
                    overflow: hidden;
                    margin-top: 4%;
                    border: 50px solid transparent;
                    border-image-source: url('https://media.istockphoto.com/id/1415372318/es/vector/pixel-minecraft-estilo-obsidiana-bloque-fondo-concepto-de-juego-pixelado-sin-costuras.jpg?s=170667a&w=0&k=20&c=MSlhUW-uZMQDYCyVBo672hrS8Lasq3Tp0FWLRZrDvME=');
                    border-image-slice: 60;
                    border-image-repeat: round;">

        <img src='https://minecraft.wiki/images/thumb/Ghast_JE3_BE3.gif/150px-Ghast_JE3_BE3.gif?ae9fb' class="ghast"
            style="position: absolute; top: 50%; width: 250px; transform: translateY(-50%);">
        <div class="position-absolute top-50 start-50 translate-middle text-white text-center">
            <h1 class="mineFont2 delineado" style="color: darkgray">
                {{ mensaje }}
            </h1>
            <h5 class="mineFont2 delineado">
                Esta es la página principal de la aplicación.
            </h5>
        </div>
    </div>



    <v-btn color="primary" to="/productos"> Ver productos </v-btn>

</template>
<style>
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

.ghast {
    animation: moveGhast 8s linear infinite;
}

@keyframes moveGhast {

    0% {
        left: 100%;
    }

    100% {
        left: -250px;
    }

}
</style>