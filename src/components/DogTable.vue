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
        <ul v-for="breed in data" :key="breed.id">
            <li>
                {{ breed.name }}
                {{breed.temperament}}
                {{breed.origin}}
                {{breed.image.url}}
            </li>
        </ul>
    </div>
    <div v-else>Loading...</div>
</template>



  
