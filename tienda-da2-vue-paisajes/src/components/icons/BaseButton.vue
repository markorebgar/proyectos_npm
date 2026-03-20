<template>
  <div>
        <button @click="handleClick">
            {{ label }}
        </button>
        

<button @click="incrementar">
    Sumar
</button>
<hr>
<p>{{ mensaje }}</p>
<p></p>

    <ul>
        <li v-for="c in ciudades" :key="c">{{ c }}</li>
    </ul>


  </div>



</template>
<script>
export default{

    name: "BaseButton",
    props: {
        label:{
            type: String,
            required: true,
        }


    },

    data(){
        return{
            contador: 0,
            mensaje: "",
            ciudades: ["Cádiz", "Ramnicu", "Guadalajara"],
            inidice: 0,
            nuevaCiudad: "",
        }
    },
    emits: ["decir-algo"],
    methods: {

    handleClick(){
        console.log("handleClick" + this.label);
        this.$emit("decir-algo");

    },
    incrementar(){

    },
    agregarCiudad(){
        if(this.nuevaCiudad.trim() !== ""){
            this.ciudades.push(this.nuevaCiudad);


        }
    }

    }




}
</script>

<style scoped>
</style>
