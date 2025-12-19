<script setup>
    import Header from "../components/Header.vue"
    import Sidebar from "@/components/Sidebar.vue";
</script>

<template>
    <div>
        <header>
            <Sidebar/>
            <Header/>
        </header>
        <main>
            <RouterView/>
        </main>
    </div>
</template>

<style scoped>
  
</style>