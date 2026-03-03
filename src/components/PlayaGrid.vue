<template>
    <div class="grilla">
        <PlayaCard v-for="playa in playas" :key="playa.id" :playa="playa" />
    </div>
</template>

<script setup>
import PlayaCard from './PlayaCard.vue';
import { defineProps } from 'vue';

defineProps({
    playas: {
        type: Array,
        required: true
    }

})
</script>

<style scoped>

</style>