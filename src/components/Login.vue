<script setup>

</script>

<template>
    <div class="flex justify-center items-center w-screen h-screen">
        <div class="card">
            <h1>Welcome!</h1>
            <form action="post" style="display: flex; flex-direction: column; gap: 10px;">
                <label for="login">Login</label>
                <input name="login" type="text">
                <label for="password">Password</label>
                <input name="password" type="text">
                <button class="btn-primary" type="submit">Enter</button>
            </form>
        </div>
    </div>
</template>

<style scoped>

</style>