<script setup lang="ts">
import type { _backgroundColor } from '#tailwind-config/theme';

const form = reactive({ email: 'mail@example.com', password: 'password' })
</script>

<template>
  <div class="container mx-auto w-full flex flex-col gap-y-4 pb-16 rounded-lg">
    <UCard :ui="{ body: { base: 'grid grid-cols-3 rounded-lg border-tris', background:'bg-tris' }}" >
      <div class="space-y-4">
        <h3 class="mb-4 text-3xl">Número de domicilio y servicio al cliente</h3>
        <div  class="flex flex-nowrap">
            <UAvatar icon="i-heroicons-phone" size="sm" />
            <h4 class="text-xl pl-4">314 490 5895</h4>
        </div>
        
      </div>

      <UDivider label="DeliTris" orientation="vertical" :ui="{ label: 'text-tris-soft ' }"/>

      <div class="space-y-4 flex flex-col justify-center">

      </div>
    </UCard>
  </div>
</template>