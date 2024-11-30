import axios from 'axios';
import React, { createContext, useState, useEffect, useContext } from 'react';

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchRecipes();
    }, []);

    const fetchRecipes = async () => {
        try {
            const response = await axios.get('/recipes/');
            console.log('Recipes:', response.data);
            setRecipes(response.data);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchRecipe = async (id) => {
        try {
            const response = await axios.get(`/recipes/${id}/`);
            return response.data;
        } catch (error) {
            console.error('Error fetching recipe:', error);
        }
    };

    const createRecipe = async (recipeData) => {
        try {
            await axios.post('/recipes/new/', recipeData);
            fetchRecipes();
        } catch (error) {
            console.error('Error creating recipe:', error);
        }
    };

    const updateRecipe = async (id, recipeData) => {
        try {
            await axios.put(`/recipes/edit/${id}/`, recipeData);
            fetchRecipes();
        } catch (error) {
            console.error('Error updating recipe:', error);
        }
    };

    const deleteRecipe = async (id) => {
        try {
            await axios.delete(`/recipes/delete/${id}/`);
            fetchRecipes();
        } catch (error) {
            console.error('Error deleting recipe:', error);
        }
    };

    return (
        <RecipeContext.Provider value={{
            recipes,
            loading,
            fetchRecipe,
            createRecipe,
            updateRecipe,
            deleteRecipe
        }}>
            {children}
        </RecipeContext.Provider>
    );
};

export const useRecipe = () => useContext(RecipeContext);