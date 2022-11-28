<script setup>

const props = defineProps({
    data: Array,
    error: String,
    load: Function
});

</script>

<template>
    <div v-if="error">
        <p>Oops! Error encountered: {{ error.message }}</p>
    </div>
    <div v-else-if="data">
        <div v-for="breed in data" :key="breed.id">{{ breed.name }}</div>
    </div>
    <div v-else>Loading...</div>
</template>



  
