import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_API_URL;

export const userSignup = async (data) => {
  try {
    const response = await axios.post(`${baseURL}/users/signup`, data);

    return response;
  } catch (error) {
    throw error;
  }
};
export const userLogin = async (data) => {
  try {
    const response = await axios.post(`${baseURL}/users/login`, data);

    return response;
  } catch (error) {
    throw error;
  }
};