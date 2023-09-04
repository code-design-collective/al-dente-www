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
                <button :class="['pt-[1rem] border rounded-md', loadingClass]" :disabled="isLoading" type="submit">{{ buttonText }}</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from '../stores/user'

// Store
const userStore = useUserStore();

// State
const { isLoading } = storeToRefs(userStore);
const formData = ref({
    email: '',
    password: '',
    confirmPassword: '',
});

// Computed
const buttonText = computed(() => {
    return isLoading.value ? 'Loading...' : 'Sign Up';
})
const loadingClass = computed(() => ({
    'hover:cursor-not-allowed bg-gray-400': isLoading.value,
}))
</script>

