<template>
    <v-app-bar class="fondoCabecera">
        <v-app-bar-title> <a style="color: rgb(89, 171, 110); text-decoration: none; font-size: 30px;" class="mineFont"
                href="/">MCShop</a></v-app-bar-title>
        <v-btn to="/" class="mineFont">Inicio</v-btn>
        <v-btn to="/categorias" class="mineFont">Categorias</v-btn>
        <v-btn to="/productos" class="mineFont">Productos</v-btn>
    </v-app-bar>
</template>

<style>
@font-face {
    font-family: "Minecraft";
    src: url("../../assets/webfonts/minecraftfont.woff") format("woff");
}

.fondoCabecera {
    background-image: url('https://static.wikia.nocookie.net/minecraft_es_gamepedia/images/5/56/Sky1.png/revision/latest?cb=20110711205312');
    background-repeat: repeat;
}

.mineFont {
    font-family: "Minecraft", sans-serif !important;
    color: darkgray;
    text-shadow: 3px 0 black,
        -3px 0 black,
        0 3px black,
        0 -3px black,
        3px 3px black,
        -3px -3px black,
        3px -3px black,
        -3px 3px black,
        2px 0 black,
        -2px 0 black,
        0 2px black,
        0 -2px black,
        1px 1px black,
        -1px -1px black,
        1px -1px black,
        -1px 1px black;
    letter-spacing: 1px;
    font-size: 1rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
}
</style>