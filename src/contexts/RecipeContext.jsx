import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

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
            // setRecipes([...recipes, response.data]);
            fetchRecipes();
        } catch (error) {
            console.error('Error creating recipe:', error);
        }
    };

    const updateRecipe = async (id, recipeData) => {
        try {
            await axios.put(`/recipes/edit/${id}/`, recipeData);
            // setRecipes(recipes.map(recipe => (recipe.id === id ? response.data : recipe)));
            fetchRecipes();
        } catch (error) {
            console.error('Error updating recipe:', error);
        }
    };

    const deleteRecipe = async (id) => {
        try {
            await axios.delete(`/recipes/delete/${id}/`);
            // setRecipes(recipes.filter(recipe => recipe.id !== id));
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