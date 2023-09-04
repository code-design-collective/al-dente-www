<template>
    <div id="signup" class="flex justify-center items-center">
        <div class="flex flex-col gap-y-[2rem] bg-blue-400 px-[6rem] py-[4rem] rounded-md">
            <h1>Sign Up</h1>
            <form @submit.prevent="userStore.signup(formData)">
                <div>
                    <label for="email">Email:</label>
                    <input type="email" id="email" v-model="formData.email" />
                </div>
                <div>
                    <label for="password">Password:</label>
                    <input type="password" id="password" v-model="formData.password" />
                </div>
                <div>
                    <label for="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" v-model="formData.confirmPassword" />
                </div>
                <button type="submit">Sign Up</button>
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
    email: '',
    password: '',
    confirmPassword: '',
});
</script>

