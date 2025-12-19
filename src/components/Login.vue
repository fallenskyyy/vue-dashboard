<script setup>
import { useAuthStore } from '@/stores/auth';
import { onMounted, reactive, ref } from 'vue';
import {login} from "@/services/auth"
import { useRoute, useRouter } from 'vue-router';

const store = useAuthStore()
const route = useRoute()
const router = useRouter()

const formLogin = ref()
const formPassword = ref()
const isCorrect = ref(true)


const onSubmit = async () => {
    
    try{
        const user = await login(formLogin.value, formPassword.value)
        store.token = user.token
        localStorage.setItem("token", user.token)
        router.push("/dashboard")
    }
    catch(e){
        isCorrect.value = false
    }
}
</script>

<template>
    <div class="flex justify-center items-center w-screen h-screen">
        <div class="card">
            <h1>Welcome!</h1>
            <form class="m-3" @submit.prevent="onSubmit" action="" style="display: flex; flex-direction: column; gap: 10px;">
                <label for="login">Login</label>
                <input v-model="formLogin" name="login" type="text">
                <label for="password">Password</label>
                <input v-model="formPassword" name="password" type="text">
                <button class="btn-primary" type="submit">Enter</button>
            </form>
            <div class="err-login" v-if="!isCorrect">Wrong login or password!</div>
        </div>
    </div>
</template>

<style scoped>

</style>