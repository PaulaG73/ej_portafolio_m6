<template>
    <div class="container mt-4">
        <div>
            <h1 class="text-capitalize">{{ playa.name }}</h1>
            <h2>{{ playa.país }}</h2>
            <div class="row">
                <div class="col-md-6">
                    <img :src="playa.img" :alt="playa.name" class="img-fluid rounded">
                </div>

                <div class="col-md-6">
                    <p>{{ playa.desc }}</p>
                   
    <!-- aquí tengo que mostrar el pronóstico semanal -->

                    <router-link to="/" class="btn btn-secondary">Volver</router-link>
                </div>
            </div>
        </div>
        

    </div>
</template>

<script setup>
    import {ref, computed} from "vue";
    import {useRoute} from "vue-router";
    import Allplayas from "../data/playas.json"


    const playas = ref(Allplayas);
    const route = useRoute();
    const playa= computed (()=>playas.value.find (playa =>playa.id === route.params.id))
    


</script>

<style scoped>

</style>