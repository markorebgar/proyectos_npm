<template>
    <div>

        <p>Tenemos un total de {{ totalLikes }} likes</p>

        <!-- <Paisaje
        v-for="c in cities"
        :key="c.name"
        :imagen="c.imagen"
        @sumar-likes="incrementarTotal"
    /> -->

        <Paisaje v-for="c in cities" :key="c.name" :ciudad="c" @sumar-likes="incrementarTotal" />
    </div>

</template>

<script>
import Paisaje from './Paisaje.vue';

export default {

    components: { Paisaje },
    props: {
        cities: {
            type: Array,
            required: true,
            default: []
        },
    },
    data() {
        return {
            totalLikes: 0,
        };
    },
    methods: {
        incrementarTotal() {
            this.totalLikes++;
        }
    }
};
</script>