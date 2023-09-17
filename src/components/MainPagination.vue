<script setup>
import { ref } from 'vue'
const pages = ref(10)
const activePage = ref(4)

const prevPage = () => {
    if (activePage.value > 1) {
        activePage.value--
    }
}

const nextPage = () => {
    if (activePage.value < pages.value) {
        activePage.value++
    }
}
</script>




<template>
  
</template>