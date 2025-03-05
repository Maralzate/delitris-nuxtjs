<script setup lang="ts">
import {productA} from '~/data/product-es.json'
const route = useRoute()

console.log(route.params.id)

const {data} = await useFetch(productA,{
  pick:["id","title","description","price","image1"]
}
)

const articulo = await productA.find(item => productA.id === route.params.id) 
const datos = ref(data)

console.log("DATOS: " + datos)
console.log(articulo)
console.log(await productA.data)


</script>

<template>
  <div>

    <pre>ss {{ datos }}</pre>
    <pre>WW {{ productA }}</pre>
  </div>
</template>

<style scoped></style>