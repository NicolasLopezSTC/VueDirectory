<script setup>
import { faker } from '@faker-js/faker'
const firstName = faker.name.firstName()
const lastName = faker.name.lastName()
const fullName = `${firstName} ${lastName}`

const selectCard = () => {
    console.log(`${fullName} selected`)
}

</script>

<template>  
<div class="card" @click="selectCard">
<div class="card-image">
    <img :src="faker.internet.avatar()"  alt="" srcset="">
</div>


<div class="card-details">
    <p class="card-details-name">{{ fullName }}</p> 
    <p class="card-details-job">{{ faker.name.jobTitle()}}, {{ faker.name.jobArea()}} </p>
    <p class="card-details-quote">"{{  faker.lorem.paragraph() }}"</p>
</div>
</div>
</template>

<style scoped lang="postcss">
    .card {
        @apply cursor-pointer overflow-hidden rounded-md bg-slate-100 p-8 shadow-md hover:scale-110 transition-transform duration-300 hover:shadow-slate-900 hover:shadow-2xl;
        &-image {
            img{
            @apply mx-auto rounded-full object-contain;
        }
    }
    &-details {
        @apply flex flex-col gap-2  pt-6 text-center;

    &-name{
        @apply text-3xl font-thin text-blue-800 tracking-wider;
    }
    &-job {
        @apply -mt-2 text-xs  text-yellow-700 font-extrabold;
    }
   
    &-quote{
        @apply italic text-pink-800 text-lg pt-4;
    }
 }
}


</style>