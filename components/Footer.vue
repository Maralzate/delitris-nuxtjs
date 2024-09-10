<script setup lang="ts">
import type { _backgroundColor } from '#tailwind-config/theme';

const form = reactive({ email: 'mail@example.com', password: 'password' })
</script>

<template>
  <div class="container mx-auto w-full gap-y-4 pb-16 md:flex md:flex-col rounded-lg text-tris-dark">
    <UCard :ui="{ body: { base: 'grid grid-cols-3 rounded-lg border-tris  ', background:'bg-white ' }}" >
      <div class="space-y-4 md:flex md:flex-col">
        <h3 class="mb-4 md:text-3xl text-xl">Número de Domicilios </h3>
        <div  class="flex flex-nowrap">
            
            <Icon name="solar:phone-calling-rounded-line-duotone" size="1.6em" class="text-white " style="color: black" />
            <h4 class="text-xl pl-4">3144905895</h4>
        </div>

        <div  class="flex flex-nowrap">
            <Icon name="solar:letter-line-duotone" size="1.6em" class="text-white " style="color: black" />
            <h4 class="text-xl pl-4">contacto@delitris.pet</h4>
        </div>
        
      </div>

      <UDivider label="DeliTris" orientation="vertical" :ui="{ label: 'text-tris-dark ' }"/>

      <div class="space-y-4 md:flex md:flex-col justify-center">
        <div class="flex flex-wrap gap-4 justify-center">
          <Button as="a" outlined class=" border-tris rounded-lg bg-tris p-2" href="https://www.facebook.com/profile.php?id=10008493500078" target="_blank" rel="noopener">
            <Icon name="brandico:facebook-rect" size="2em"  class="text-white hover:text-tris" />
          </Button>
          <Button as="a" outlined class=" border-tris rounded-lg bg-tris p-2" href="https://www.instagram.com/delitrismascotasreposteria/" target="_blank" rel="noopener">
            <Icon name="brandico:instagram" size="2em"  class="text-white hover:text-tris" />
          </Button>
          <Button as="a" outlined class=" border-tris rounded-lg bg-tris p-2 transition-all" href="https://wa.me/573144905895" target="_blank" rel="noopener">
            <Icon name="streamline:whatsapp" size="2em"  class="text-white hover:text-tris" />
          </Button>
        </div>
      </div>
    </UCard>
  </div>
</template>