<template>
    <div id="login" class="h-screen flex justify-center items-center">
        <div class="flex flex-col gap-y-[2rem] bg-green-400 px-[6rem] py-[4rem] rounded-md">
            <h1 class="text-center text-[3rem]">Login</h1>
            <form @submit.prevent="userStore.login(formData)" class="flex flex-col gap-y-[1rem]">
                <div class="flex flex-col gap-y-[0.5rem]">
                    <label for="username">Username</label>
                    <input type="text" id="username" v-model="formData.username" class="border" />
                </div>
                <div class="flex flex-col gap-y-[0.5rem]">
                    <label for="password">Password</label>
                    <input type="password" id="password" v-model="formData.password" class="border" />
                </div>
                <button class='pt-[1rem] border rounded-md hover:bg-yellow-400' type="submit">Login</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '../stores/user'

// Store
const userStore = useUserStore();

// State
const formData = ref({
    username: '',
    password: '',
});
</script>
