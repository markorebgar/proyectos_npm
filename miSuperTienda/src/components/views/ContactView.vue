<template>

    <!-- ABOUT -->
    <section class="fondoNosotros">
        <h1 class="mineFont2 delineado">Sobre nosotros:</h1>
        <p class="delineado">
            Nuestra tienda está enfocada en crear 'items' del Minecraft de la más alta calidad para que puedas
            decorar tu habitación, usar en el día a día, e incluso ponértelo como armadura. Nuestros productos
            están creados artesanalmente.
        </p>
    </section>

        <section>
        <h2 class="mineFont2 delineado">Nuestros servicios:</h2>
        <p class="mineFont2 delineado">Servicios enfocados en la experiencia del cliente</p>
        <v-container >
            <v-row class="mt-4">
                <v-col>
                    <v-card style="background-color: goldenrod;">
                        <v-img :src="'https://cdn.apexminecrafthosting.com/img/uploads/2022/03/28151238/elytra.png'"
                        height="200" />
                        <v-card-title class="mineFont2 delineado">Servicio de entregas</v-card-title>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card style="background-color: goldenrod;">
                        <v-img :src="'https://minecraft.wiki/images/VillagerGUI_1.14.png?211da'"
                        height="200" />
                        <v-card-title class="mineFont2 delineado">Envío y devolución</v-card-title>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card style="background-color: goldenrod;">
                        <v-img :src="'https://static.wikia.nocookie.net/minecraft_es_gamepedia/images/d/d8/Plains_Villager_Base.png/revision/latest/scale-to-width/360?cb=20190517130809'"
                        height="200" />
                        <v-card-title class="mineFont2 delineado">Servicios 24 horas</v-card-title>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </section>
<section>
    <h2 class="mineFont2 delineado">Contacto:</h2>
    <p class="mineFont2 delineado">
        ¿Tienes dudas, sugerencias o quieres colaborar con nosotros? ¡Escríbenos!
    </p>

    <v-container>
        <v-row class="mt-4" justify="center">

            <v-col cols="12" md="6">
                <v-card style="background-color: #2e7d32;">
                    <v-card-title class="mineFont2 delineado">
                        📩 Email
                    </v-card-title>
                    <v-card-text class="delineado">
                        soporte@minecraftshop.com
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col cols="12" md="6">
                <v-card style="background-color: #1565c0;">
                    <v-card-title class="mineFont2 delineado">
                        💬 Discord
                    </v-card-title>
                    <v-card-text class="delineado">
                        discord.gg/minecraftshop
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col cols="12" md="6">
                <v-card style="background-color: #6d4c41;">
                    <v-card-title class="mineFont2 delineado">
                        📍 Ubicación
                    </v-card-title>
                    <v-card-text class="delineado">
                        Overworld, coordenadas X: 120 Y: 64 Z: -300
                    </v-card-text>
                </v-card>
            </v-col>

        </v-row>
    </v-container>
</section>

    <section>
        <h2 class="mineFont2 delineado">Miembros de nuestro equipo</h2>
        <v-container >
            <v-row class="mt-4">
                <v-col>
                    <v-card>
                        <v-img :src="'https://s.namemc.com/3d/skin/body.png?id=8118c89fcd4fac01&model=slim&width=308&height=308'"
                        height="200" />
                        <v-card-title>Marcos Rebrina Vargas</v-card-title>
                        <v-card-text>
                            Sin límites. <em>Funcionar funciona</em>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card>
                        <v-img :src="'https://s.namemc.com/3d/skin/body.png?id=b8ef31e211fb2458&model=classic&width=308&height=308'"
                        height="200" />
                        <v-card-title>Vincent Aguilar Cayoja</v-card-title>
                        <v-card-text>
                            Serio. <em>Marquets, que has hecho? 😔</em>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card>
                        <v-img :src="'https://s.namemc.com/3d/skin/body.png?id=f90b44b865188335&model=classic&width=308&height=308'"
                        height="200" />
                        <v-card-title>Diego Rhodes Rodríguez</v-card-title>
                        <v-card-text>
                            Pillo. <em>Bueno, chicos, me tengo que ir</em>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
                <router-link to="/secreto">
                    <img class="fondoNosotros2" src="/public/img/miImagen.jpeg">
                    </img>
                </router-link>
        </v-container>
    </section>


</template>
<style>
.fondoNosotros{
    background-color: black;
    background-image: url("https://i.pinimg.com/736x/a0/ce/81/a0ce81f10591b00d6dff44ac87be5aec.jpg");
    background-repeat: repeat;
    border: 15px solid transparent;
    border-image-source: url('https://media.istockphoto.com/id/1415372318/es/vector/pixel-minecraft-estilo-obsidiana-bloque-fondo-concepto-de-juego-pixelado-sin-costuras.jpg?s=170667a&w=0&k=20&c=MSlhUW-uZMQDYCyVBo672hrS8Lasq3Tp0FWLRZrDvME=');
    border-image-slice: 60;
    border-image-repeat: round;
    padding: 5%;
}
.fondoNosotros2{
    display: block;
    margin: 40px auto 0 auto;
    max-width: 400px; 
    background-color: black;
    border: 30px solid transparent;
    border-image-source: url('https://ih1.redbubble.net/image.5717904402.5241/raf,360x360,075,t,fafafa:ca443f4786.jpg');
    border-image-slice: 60;
    border-image-repeat: round;
}
</style>