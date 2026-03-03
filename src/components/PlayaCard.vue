<template>
    <div class="card" id="p1">
        <img src="/imagenes/Bahía Inglesa_Chile.jpg" class="card-img-top" height="200">
        <div class="card-body">
            <h5 class="card-title">Bahía Inglesa <img src="/imagenes/B_Chile.jpg" height="20px"> </h5>
            <div class="card__temp">
                <i class="fa-solid fa-temperature-full"></i>
                <p>21°C</p>
            </div>
            <div class="card__estado">
                <i class="fa-solid fa-cloud-sun"></i>
                <p>Parcialmente nublado</p>
            </div>
          <router-link class="btn btn-dark" :to="`/detalle_playas/${playa.id}`" >Ver detalle</router-link>
        </div>
    </div>
</template>

<script setup>


import { defineProps } from 'vue';
defineProps({
 playa: {
        type: Object,
        required: true
    }

})
</script>

<style scoped></style>