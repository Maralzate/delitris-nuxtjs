<template>

    <div class="container mx-auto p-8">
        <div class="flex justify-center items-center">
            <img class=" w-auto" src="/images/Logo-Delitris-Circle.png"
              alt="Delitris">
        </div>
        <h1 class="pt-8 m-2 text-center text-5xl text-tris-dim dark:text-tris-soft">{{ $t('indexH1') }}</h1>
        <h2 class="pb-16 text-center text-7xl text-tris-dim dark:text-tris-soft">Delitris</h2>
        <Bakery></Bakery>
        <Frozen></Frozen>
    </div>


</template>

<script setup lang="ts">

</script>
