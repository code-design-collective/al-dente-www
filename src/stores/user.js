import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

const BASE_API_URL = import.meta.env.BASE_API_URL;

export const useUserStore = defineStore('user', () => {
  // Methods
  const login = async (credentials) => {
    try {
      const response = await axios.post(`${BASE_API_URL}/login/`, credentials);
      const { token, user } = response.data;

      console.log(user);
      localStorage.setItem('token', token);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return {
    login
  };
});
