<template>
    <div class="bg-[#ffffff] dark:bg-[#16180c]">
        <Navbar />
        <div class="">
            <div class="card p-3">
                <div :style="{ position: 'fixed', height: '350px' }">
                    <SpeedDial :model="items" direction="up" :style="{ right: '1em', bottom: '1em' }" />
                </div>
            </div>
        </div>
        <slot></slot>
        
        <div class="mx-4">
            <Footer/>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import { useRouter } from 'vue-router';

const toast = useToast();
const router = useRouter();

const items = ref([
    {
        label: 'Whatsapp',
        icon: 'pi pi-whatsapp',
        command: () => {
            toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
            window.location.href = ' https://wa.me/573332850072';
        }
    },
    {
        label: 'Teléfono}',
        icon: 'pi pi-phone',
        command: () => {
            toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            window.location.href = 'tel:3332850072';
        }
    }    
])
</script>
