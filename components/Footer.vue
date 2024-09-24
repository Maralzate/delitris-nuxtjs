<script setup lang="ts">
import type { _backgroundColor } from '#tailwind-config/theme';

const form = reactive({ email: 'mail@example.com', password: 'password' })
</script>

<template>
  <div class="container mx-auto gap-y-4 pb-16 md:flex md:flex-col rounded-lg text-tris-dark ">
    <UCard :ui="{ body: { base: 'md:grid md:grid-cols-3 rounded-lg border-tris  ', background:'bg-white ' }}" >
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
      <div class="flex justify-center items-center">
          <img class="w-64 my-16 md:my-1" src="/images/Logo-Delitris-Circle.png"
            alt="Delitris">
      </div>
      
      <div class="space-y-4 md:flex md:flex-col ">
        <h3 class="my-4 md:text-3xl text-xl sm:justify-center flex justify-center items-center">Síguenos En: </h3>
        <div class="flex flex-wrap gap-4 justify-center">
          <ULink
            to="https://www.facebook.com/profile.php?id=10008493500078"
            active-class="text-tris bg-tris"
            inactive-class="text-tris dark:text-logodark hover:text-tris-light dark:text-logolight dark:hover:text-logodark"
          >
          <Icon name="brandico:facebook-rect" size="3em"  />
          </ULink>
          <ULink
            to="https://www.instagram.com/delitrismascotasreposteria/"
            active-class="text-tris bg-tris"
            inactive-class="text-tris dark:text-logodark hover:text-tris-light dark:text-logolight dark:hover:text-logodark"
          >
          <Icon name="brandico:instagram" size="3em"   /> 
          </ULink>
          <ULink
            to="https://wa.me/573144905895"
            active-class="text-tris bg-tris"
            inactive-class="text-tris dark:text-logodark hover:text-tris-light dark:text-logolight dark:hover:text-logodark"
          >
          <Icon name="streamline:whatsapp" size="3em"   />
          </ULink>
        </div>
      </div>
    </UCard>
  </div>
</template>