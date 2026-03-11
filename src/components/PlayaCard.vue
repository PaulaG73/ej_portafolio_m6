<template>
    <div class="col-12 col md-4 col-lg-3">
         <div class="card mt-4" id="p1">
        
       <img :src="playa.img" class="card-img-top card-img-fixed"/>
        
        <div class="card-body">
            <h6 class="card-title fw-bold fs-7">{{ playa.name }} <img :src="playa.flag" height="20px"></h6>

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



.card-img-fixed{

    height: 200px;
    object-fit: cover;
}
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