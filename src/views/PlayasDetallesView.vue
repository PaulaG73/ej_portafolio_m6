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
                   
   </div>
                    
                </div>
            </div>
        </div>
        

<div class="pronSem d-flex justify-content-around">
<PlayaCardDetalle v-for="dia in playa.pronSem"
:detalle="dia"
:key="dia.dia"/>


</div>

    <router-link to="/" class="btn btn-secondary">Volver</router-link>
</template>

<script setup>
    import {ref, computed} from "vue";
    import {useRoute} from "vue-router";
    import Allplayas from "../data/playas.json";
import PlayaCardDetalle from "../components/PlayaCardDetalle.vue"



    const playas = ref(Allplayas);
    const route = useRoute();
    const playa= computed (()=>playas.value.find (playa =>playa.id === route.params.id))

    // Acá va la lógica del array del pronSem para el promedio de temperatura//


</script>

<style scoped>

</style>