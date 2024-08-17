<template>

    <div class="container mx-auto p-2">
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
        <h1 class="pt-8 m-2 text-center text-7xl sm:text-4xl text-tris dark:text-tris-soft">{{ $t('indexH1') }}</h1>
        <h2 class="pb-16 text-center text-7xl text-tris dark:text-tris-soft">DeliTris</h2>

        <h2 class="px-4 text-4xl text-tris-dim dark:text-tris-soft">{{ $t('bakeryCom') }}</h2>
        <div class="flex flex-wrap mb-4">
            <div class="lg:w-1/2 p-16 relative">
                <p class="pt-12 px-4 text-tris text-5xl">{{ $t('bakeryP1') }}</p>
            </div>
            <div class="lg:w-1/2 relative">
                <Bakery ></Bakery>
            </div>
        </div>
        <h2  class="text-3xl text-tris dark:text-tris-soft">{{ $t('cakeCom') }}</h2>
        <div class="flex flex-wrap mb-4">
            <div class="lg:w-1/2 p-16 relative">
                <SwiperCake></SwiperCake>
            </div>
            <div class="lg:w-1/2 relative">
                <p class="pt-12 px-4 text-5xl ">{{ $t('cakeP1') }}</p>
            </div>
        </div> 
        <h2  class="text-3xl text-tris dark:text-tris-soft">{{ $t('frozenCom') }}</h2>
        <div class="flex flex-wrap mb-4">
            <div class="lg:w-1/2 p-16 relative">
                <p class="pt-12 px-4 text-5xl ">{{ $t('frozenP1') }}</p>
            </div>
            <div class="lg:w-1/2 relative">
                <SwiperFrozen></SwiperFrozen>
            </div>
        </div>  
    </div>


</template>

<script setup lang="ts">

</script>
