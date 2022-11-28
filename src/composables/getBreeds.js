import { ref, isRef, watchEffect } from 'vue'

export const getBreeds = (url) => {
  const data = ref([])
  const error = ref(null)

  const load = async() => {
    try {
    	const res = await fetch(url);
      if (!res.ok) {
        throw Error("No Data Available");
      }
	    data.value = await res.json()
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  }

  if (isRef(url)) {
    watchEffect(load)
  } else {
    load()
  }

  return { data, error, load }
}
