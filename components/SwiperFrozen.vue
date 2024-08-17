<template>
    <Swiper
    class="swiper-cards"
      :width="240"
      :modules="[SwiperAutoplay, SwiperEffectCards]"
      :slides-per-view="1"
      :loop="true"
      :effect="'cards'"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true
      }"
    >
      <SwiperSlide v-for="card in productC" key="card">
        
        <div :class="`flex flex-row border-2 rounded-md h-96 max-h-fit w-64 min-w-64 max-w-64 mx-1  mx-2 ${card.style} transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300`">
          <div class="bg-tris-soft dark:bg-tris-dim rounded-md p-2 hide-scroll-bar " >
              <div class="flex flex-colubm justify-center items-center ">
                  <div class="">
                      <img class="rounded-full bg-transparent size-52 max-w-52 max-h-52" :src="`/images/${card.image1}.png`">
                      </div>
              </div>
              <h2 class="uppercase">{{ card.title }}</h2>
                  <div class="text-left pt-1 pb-2">
                      <p class="py-1 text-sm break-words" >{{ card.ingredients }}</p>
                      <p class="py-1 text-xl text-tris-dim dark:text-tris-soft break-words">{{ card.price }}</p>
                  </div>
              </div>
          </div>
      </SwiperSlide>
    </Swiper>
  
       
  </template>
  
  <script setup lang="ts">
      import { productC } from '~/data/product-es.json'
      import Carousel from 'primevue/carousel'
  
  </script>
  