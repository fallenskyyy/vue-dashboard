<script setup>
import { useAuthStore } from '@/stores/auth';
import { reactive, ref } from 'vue';
import {login} from "@/services/auth"
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()
const store = useAuthStore()

const formLogin = ref()
const formPassword = ref()

const onSubmit = async () => {
    try{
        const user = await login(formLogin.value, formPassword.value)
        localStorage.setItem("token", user.token)
        alert(user.id)
        router.push(route.query.redirect || "/dashboard")
    }
    catch(e){
        alert(e)
    }
}
</script>

<template>
    <div class="flex justify-center items-center w-screen h-screen">
        <div class="card">
            <h1>Welcome!</h1>
            <form @submit.prevent="onSubmit" action="" style="display: flex; flex-direction: column; gap: 10px;">
                <label for="login">Login</label>
                <input v-model="formLogin" name="login" type="text">
                <label for="password">Password</label>
                <input v-model="formPassword" name="password" type="text">
                <button class="btn-primary" type="submit">Enter</button>
            </form>
        </div>
    </div>
</template>

<style scoped>

</style>