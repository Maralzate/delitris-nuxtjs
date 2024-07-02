<template >
    <div :class="`flex flex-row border-2 rounded-md h-96 max-h-fit w-64 min-w-64 max-w-64 mx-1  mx-2 ${style} transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300`">
        <div class="bg-tris-soft dark:bg-tris-dim rounded-md p-2" >
            <div class="flex flex-colubm justify-center items-center ">
                <div class="">
                    <img class="rounded-full bg-transparent size-52 max-w-52 max-h-52" :src="`/images/${image1}.png`">
                    </div>
            </div>
            <h2 class="uppercase">{{ title }}</h2>
           <div class="text-left pt-1 pb-2">
                
                <p class="py-1 text-sm break-words" >{{ ingredients }}</p>
                <p class="py-1 text-xl text-tris-dim dark:text-tris-soft break-words">{{ price }}</p>
            </div>
       </div>
    </div>
    
 </template>
 
 <script setup lang="ts">
    import { defineProps, ref } from 'vue'
 
    defineProps({
        id: Number,
        code:String,
        title: String,
        description: String,
        miniDescriprion: String,
        ingredients: String,
        price:String,
        discount:String,
        productType:String,
        style:String,
        background:String,
        image1:String,
        image2:String,
        imageBack:String,
        value:String
})
 
    const showFront = ref(false)
 
    const toggle = () => {
       showFront.value = !showFront.value
    };
 </script>
  
<style scoped>
  .card-inner {
     cursor: pointer;
     transition: transform 0.5s ease;
  }

  .card-inner:hover {
     transform: scale(1.06);
  }

</style>