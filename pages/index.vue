<template>

    <div class="container mx-auto my-24 p-2">
        <div class="flex flex-wrap justify-center items-center">
            <div class="pb-8 md:mr-8 justify-center items-center">
                <img class=" w-auto" src="/images/Logo-Delitris-Circle.png"
                  alt="Delitris">
            </div>
            <div class="">
                <img class="rounded-3xl w-auto" src="/images/tristan2-min.jpeg"
                  alt="Delitris">
            </div>

        </div>

        <h1 class="pt-24 mx-2 text-center text-3xl lg:text-7xl  text-tris dark:text-tris-soft">{{ $t('indexH1') }}</h1>
        <h2 class="pb-4 md:pb-32 text-center text-7xl lg:text-9xl text-tris dark:text-tris-soft">DeliTris</h2>

        <div class="flex flex-wrap my-24">
            <div class="lg:w-1/2 relative">
                <h2 class="px-4 text-5xl text-tris dark:text-tris-soft">{{ $t('bakeryCom') }}</h2>
                <p class="pt-12 pb-4 px-4 text-xl md:text-2xl dark:text-tris-soft">{{ $t('bakeryP1') }}</p>
            </div>
            <div class="lg:w-1/2 pl-4 relative">
                <SwiperBakery ></SwiperBakery>
            </div>
        </div>
        
        <h2  class="text-5xl pl-4 text-tris dark:text-tris-soft">{{ $t('cakeCom') }}</h2>
        <div class="flex flex-wrap my-24">
            <div class="lg:w-1/2 pl-4 pr-16 relative">
                <SwiperCake></SwiperCake>
            </div>
            <div class="lg:w-1/2 relative">
                <p class="pt-12 pb-4 px-4 text-xl md:text-2xl dark:text-tris-soft">{{ $t('cakeP1') }}</p>
            </div>
        </div> 
        
        <div class="flex flex-wrap my-24">
            <div class="lg:w-1/2 pl-4 pr-16 relative">
                <h2  class="text-5xl text-tris dark:text-tris-soft">{{ $t('frozenCom') }}</h2>
                <p class="pt-12 pb-4 px-4 text-xl md:text-2xl dark:text-tris-soft">{{ $t('frozenP1') }}</p>
            </div>
            <div class="lg:w-1/2 pl-4 relative">
                <SwiperFrozen></SwiperFrozen>
            </div>
        </div>  
    </div>


</template>

<script setup lang="ts">

</script>
