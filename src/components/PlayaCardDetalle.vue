<template>
    <div class="card">
        <h6 class="card-title">{{ detalle.dia }}</h6>
        <p class="icon-temp"> 🌡️</p>
        <p class="card-temp"> máx {{ detalle.max }}°C</p>
        <p class="card-temp"> mín {{ detalle.min }}°C</p>
        <p class="card-temp"> prom {{ (detalle.min + detalle.max) / 2 }}°C</p>
        <div class="card-estado d-flex">
            <span>{{ detalle.icon }}</span>
            <h6 class="card-subtitle mb-2 text-body-secondary">{{ detalle.estado }}</h6>

        </div>
    </div>



</template>

<script setup>
import { defineProps } from "vue"
defineProps({
    detalle:
    {
        type: Object

    }

})




</script>

<style scoped>
.card {
    margin: 5px;
    padding: 5px;
    border-radius: solid;
    border-color: black;
    border-radius: 1px;
    min-width: 150px;
}

.card-title {
    font-weight: bold;
}
</style>