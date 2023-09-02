import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

export const useUserStore = defineStore('user', () => {
  // State
  const user = ref(null);

  // Setters
  const setUser = (value) => {
    user.value = value;
  };

  // Methods
  const login = async (credentials) => {
    try {
      const response = await axios.post(
        `${BASE_API_URL}/users/login/`,
        credentials
      );
      const { token, user } = response.data;

      setUser(user);
      localStorage.setItem('token', token);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  const signup = async (formData) => {
    try {
      if (formData.password !== formData.confirmPassword) {
        console.error('Passwords do not match');
        return;
      }

      const response = await axios.post(`${BASE_API_URL}/users/signup/`, {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      console.log(response);
    } catch (error) {
      console.error('Sign Up failed:', error);
    }
  };

  return {
    user,
    login,
    signup,
  };
});
