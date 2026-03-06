<template>
  <div class="home">
    <h1>Playas soñadas de América</h1>
   <PlayaGrid :playas="playas" />
      
    <footer id="Footer" class="footer">

      <div class="card text-center">
        <div class="card-footer">
          AGENCIA DE TURISMO
        </div>
        <div class="card-body">
          <h5 class="card-title">Comercialización y Servicios Vinologa SpA</h5>
          <div class="card__derechos">
            <p class="card-text">Todos los derechos reservados</p>
            <i class="fa-regular fa-copyright"></i>
          </div>
          <a href="#nav" class="btn btn-dark">Volver al Inicio</a>
        </div>
      </div>
    </footer>
  </div>

</template>

<script setup>
import PlayaGrid from '../components/PlayaGrid.vue';
import playasData from '../data/playas.json';
import { ref } from 'vue'

const playas = ref(playasData)


</script>

<style></style>