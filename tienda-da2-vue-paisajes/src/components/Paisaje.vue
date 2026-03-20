<template>
    <div class="carta">
        <div>
            <h2>Esto es el paisaje de {{ ciudad.name }}</h2>
        </div>
        <img :src="ciudad.imagen"/>
        <button @click="sumarLikes">Dale al like</button>
        <p>Tiene {{ likes }} likes estupendos</p>
    </div>
</template>

<script>
export default {
    props: {
/*         ciudad: {
            type: String,
            required: true,
            default: "Sin ciudad"
        },
        imagen: {
            type: String,
            required: false,
            default: "https://picsum.photos/50/100.webp"
        } */

        ciudad: {
            type: Object,
            required: true,
            default: {
                id:100,
                name: "Sin ciudad",
                imagen: "https://picsum.photos/50/100.webp"
            }
        }
    },
    data(){
        return{
            likes: 0,
            urlImagen: "https://picsum.photos/50/100.webp"
        }
    },
    methods: {
        sumarLikes(){
            this.likes++;
            this.$emit("sumar-likes");
        }
    }

}

</script>