<template>
  <el-table :data="data" stripe style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  name: "DogsList",
  props: {},
  setup() {
    const data = ref(null);
    const loading = ref(true);
    const error = ref(null);

    const getAllBreeds = async () => {
      const res = await fetch("https://api.thedogapi.com/v1/breeds");
      const data = await res.json();
      console.log(data);
    };

    onMounted(() => {
      getAllBreeds();
    });

    return {
      data,
      loading,
      error,
    };
  },
};
</script>
