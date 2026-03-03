<template>
    <div class="card" id="p1">
        
       <div><img :src="playa.img" height="200px"/></div>
        
        <div class="card-body">
            <h5 class="card-title">{{ playa.name }} <img :src="playa.flag" height="20px"></h5>

            <div class="card__temp__hum">
                <p>{{ playa.temp }}</p> /
                <p>{{ playa.hum }}</p>
            </div>
            <div class="card__estado">
                <!-- tengo que poner el ícono en el json para  hacerlo dinámico -->
                <p>{{ playa.íconoEst }}</p>
                <p>{{ playa.estado }}</p>
            </div>
            <router-link class="btn btn-dark" :to="`/detalle_playas/${playa.id}`">Ver detalle</router-link>
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

<style scoped>
.card__estado {
    display: flex;
    justify-content: center;
    gap: 5px;
}

.card__temp__hum {

    display: flex;
    justify-content: center;
    gap: 20px;
}
</style>