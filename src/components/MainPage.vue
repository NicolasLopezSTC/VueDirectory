<script setup>
import MainSearch from '@/components/MainSearch.vue'
import MainCards from '@/components/MainCards.vue'
import MainPagination from '@/components/MainPagination.vue'
</script>

<template>
    <div class="wrapper">
    <MainSearch />
     <MainCards />
     <MainPagination />
   </div>
</template>

<style scoped lang="postcss">
.wrapper{
@apply flex flex-col container mx-auto py-4 gap-4;
}

</style>