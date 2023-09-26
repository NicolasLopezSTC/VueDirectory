<script setup>
import { useAuth } from '@/composables/useAuth'
const { login } = useAuth()
</script>


<template>
    <h1>Login Page</h1>
    <button class="bg-green-400 px-4 py-4" @click="login">Log In</button>
</template>
