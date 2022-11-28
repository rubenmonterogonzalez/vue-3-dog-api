<script setup>
import { getBreeds } from '../composables/getBreeds';
import DogTable from '../components/DogTable.vue';

const url = 'https://api.thedogapi.com/v1/breeds'

const { data, error, load } = getBreeds(url);

</script>

<template>
   <DogTable :data="data" :error="error" :load="load"/>
</template>




