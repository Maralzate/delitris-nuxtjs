<!-- pages/contact.vue -->
<template>
    <div class="max-w-2xl mx-auto p-6">
      <h1 class="text-2xl font-bold mb-6">Formulario de Contacto</h1>
      
      <UForm :schema="schema" @submit="onSubmit" class="space-y-4">
        <UFormGroup label="Nombre" name="name" class="mb-4">
          <UInput v-model="state.name" placeholder="Tu nombre" />
        </UFormGroup>
        
        <UFormGroup label="Correo electrónico" name="email" class="mb-4">
          <UInput v-model="state.email" placeholder="tu@email.com" type="email" />
        </UFormGroup>
        
        <UFormGroup label="Asunto" name="subject" class="mb-4">
          <UInput v-model="state.subject" placeholder="Asunto del mensaje" />
        </UFormGroup>
        
        <UFormGroup label="Mensaje" name="message" class="mb-4">
          <UTextarea v-model="state.message" placeholder="Escribe tu mensaje aquí..." rows="5" />
        </UFormGroup>
        
        <div class="flex justify-end">
          <UButton type="submit" color="primary" :loading="loading">
            Enviar mensaje
          </UButton>
        </div>
      </UForm>
      
      <UModal v-model="showModal">
        <UCard>
          <template #header>
            <div class="text-xl font-medium">{{ modalTitle }}</div>
          </template>
          <div>{{ modalMessage }}</div>
          <template #footer>
            <UButton @click="showModal = false" color="primary">Cerrar</UButton>
          </template>
        </UCard>
      </UModal>
    </div>
  </template>
  
  <script setup>

  const state = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const loading = ref(false)
  const showModal = ref(false)
  const modalTitle = ref('')
  const modalMessage = ref('')
  

  const onSubmit = async (event) => {
    try {
      loading.value = true
      
      // Aquí iría tu lógica para enviar el formulario a un servidor
      // Por ejemplo:
      // await $fetch('/api/contact', {
      //   method: 'POST',
      //   body: state.value
      // })
      
      // Simulando una espera de red
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      modalTitle.value = '¡Mensaje enviado!'
      modalMessage.value = 'Gracias por contactarnos. Te responderemos lo antes posible.'
      showModal.value = true
      
      // Limpiar el formulario
      state.value = {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    } catch (error) {
      modalTitle.value = 'Error'
      modalMessage.value = 'Hubo un problema al enviar tu mensaje. Por favor, intenta nuevamente.'
      showModal.value = true
    } finally {
      loading.value = false
    }
  }
  </script>