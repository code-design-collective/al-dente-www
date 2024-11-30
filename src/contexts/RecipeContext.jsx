import axios from 'axios';
import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
    const navigate = useNavigate();

    // State
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    // Methods
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
            console.log('Creating recipe:', recipeData);
            const response = await axios.post('/recipes/new/', recipeData);

            if (response.status === 201) {
                fetchRecipes();
                navigate(`/dashboard/recipes/${response.data.id}`);
            }
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

    // Lifecycle
    useEffect(() => {
        fetchRecipes();
    }, []);

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