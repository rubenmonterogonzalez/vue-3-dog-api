<script setup>
import { getBreeds } from '../composables/getBreeds';
import Header from '../components/Header.vue';
import DogTable from '../components/DogTable.vue';

const url = 'https://api.thedogapi.com/v1/breeds'

const { data, error, load } = getBreeds(url);

</script>

<template>
    <Header />
    <DogTable :data="data" :error="error" :load="load" />
</template>




