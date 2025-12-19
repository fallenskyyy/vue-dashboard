<script setup>
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()
const route = useRoute()

const onClick = () =>{
  localStorage.removeItem("token")
  router.push("/login")
}


</script>

<template>
  <div>
    <h1>Main page</h1>
    <button class="btn-primary" @click="onClick">Logout</button>
  </div>
</template>

<style scoped>

</style>
