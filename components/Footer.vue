<script setup lang="ts">
import type { _backgroundColor } from '#tailwind-config/theme';

const form = reactive({ email: 'mail@example.com', password: 'password' })
</script>

<template>
  <div class="container mx-auto w-full flex flex-col gap-y-4 pb-16 rounded-lg text-tris-dark">
    <UCard :ui="{ body: { base: 'grid grid-cols-3 rounded-lg border-tris', background:'bg-white ' }}" >
      <div class="space-y-4">
        <h3 class="mb-4 text-3xl">Número de domicilio </h3>
        <div  class="flex flex-nowrap">
            
            <div class=" border rounded-lg bg-tris ">

            </div>
            <Icon name="solar:phone-calling-rounded-line-duotone" size="1.6em" class="text-white " style="color: black" />
            <h4 class="text-xl pl-4">314 490 5895</h4>
        </div>

        <div  class="flex flex-nowrap">
            <Icon name="solar:letter-line-duotone" size="1.6em" class="text-white " style="color: black" />
            <h4 class="text-xl pl-4">contacto@delitris.pet</h4>
        </div>

        
      </div>

      <UDivider label="DeliTris" orientation="vertical" :ui="{ label: 'text-tris-dark ' }"/>

      <div class="space-y-4 flex flex-col justify-center">

      </div>
    </UCard>
  </div>
</template>