<template>
    <Swiper
    :slidesPerView="3"
      :grid="{
        rows: 1,
      }"
      :spaceBetween="50"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <SwiperSlide v-for="card in productB" key="card">
        
        <div :class="`flex flex-row border-2 rounded-md h-auto max-h-fit w-64 min-w-64 max-w-64 mx-1  mx-2 ${card.style} transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300`">
          <div class="bg-tris-soft dark:bg-tris-dim rounded-md p-2 hide-scroll-bar " >
              <div class="flex flex-colubm justify-center items-center ">
                <div class="">
                  <img class="rounded-lg bg-transparent size-52 max-w-52 max-h-52" :src="`/images/${card.image1}.png`">
                </div>
              </div>
                <div class="min-h-16 max-h-16 mx-4">
                  <h2 class="text-xl uppercase">{{ card.title }}</h2>
                </div>
                <div class="min-h-12 max-h-12 mx-4">
                  <p class="py-1 text-sm break-words" >{{ card.ingredients }}</p>                
                </div>
                <div class="min-h-16 max-h-16 mx-4">
                  <p class="pt-4 text-2xl md:text-tris-dim font-bold dark:text-tris-soft break-words">{{ card.price }}</p>
                  
                </div>
              </div>
          </div>
      </SwiperSlide>
    </Swiper>
</template>
  
<script setup lang="ts">
  import {productB} from '~/data/product-es.json'
  import { Grid, Pagination } from 'swiper/modules'

  const  modules = [Grid, Pagination]

  

</script>
  