import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_API_URL;

export const fetchPosts = async (userId) => {
  try {
    const response = await axios.get(`${baseURL}/posts`, {
      params: {
        userId: userId,
      },
    });
    return response;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};
export const createPost = async (newPost) => {
  try {
    const response = await axios.post(`${baseURL}/posts`, newPost);
    return response;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};