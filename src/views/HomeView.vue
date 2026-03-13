<template>
  <nav class ="navbar bg-dark">
  <div class="container-fluid">
    <a id="inicio" class="navbar-brand text-light fs-1">Playas soñadas de América</a>


<select class="btn btn-outline-success" v-model="escalaTemp">
<option value="" disabled>Seleccione Escala de T°</option>
<option value="°C">°C</option>
<option value="°F">°F</option>

</select>

    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Busca por país" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Buscar</button>
    </form>
  </div>
</nav>
  <div class="home">
    
    <PlayaGrid :playas="playas" />

    <footer id="Footer" class="footer mt-2">

      <div class="card text-center">
        <div class="card-footer bg-dark text-light fs-5">
          Agencia de Turismo
        </div>
        <div class="card-body">
          <h5 class="card-title">Comercialización y Servicios Vinologa SpA</h5>
          <div class="card-derechos">

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-c-circle-fill mt-1" viewBox="0 0 16 16">
              <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c.961 0 1.641.633 1.729 1.512h1.295v-.088c-.094-1.518-1.348-2.572-3.03-2.572-2.068 0-3.269 1.377-3.269 3.638v1.073c0 2.267 1.178 3.603 3.27 3.603 1.675 0 2.93-1.02 3.029-2.467v-.093H9.875c-.088.832-.75 1.418-1.729 1.418-1.224 0-1.927-.891-1.927-2.461v-1.06c0-1.583.715-2.503 1.927-2.503" />
            </svg>
            <p>Todos los Derechos Reservados</p>
          </div>
          <a href="#inicio" class="btn btn-dark">Volver al Inicio</a>
        
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
const escalaTemp =ref("")


</script>

<style>
.card-derechos{

  display: flex;
  justify-content: center;
  gap: 5px;
}



</style>