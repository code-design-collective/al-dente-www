import axios from 'axios';
import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
    const navigate = useNavigate();

    // State
    const [recipes, setRecipes] = useState([]);
    const [recipeData, setRecipeData] = useState(null);
    const [loading, setLoading] = useState(true);

    // Methods
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
            setRecipeData(response.data);
        } catch (error) {
            console.error('Error fetching recipe:', error);
        }
    };
    const createRecipe = async (recipeData) => {
        try {
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
            const response = await axios.put(`/recipes/edit/${id}/`, recipeData);
            if (response.status === 200) {
                fetchRecipes();
                navigate(`/dashboard/recipes/${id}`);
            }
        } catch (error) {
            console.error('Error updating recipe:', error);
        }
    };
    const deleteRecipe = async (id) => {
        try {
            await axios.delete(`/recipes/delete/${id}/`);
            fetchRecipes();
            navigate('/dashboard');
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
            recipeData,
            loading,
            fetchRecipe,
            createRecipe,
            updateRecipe,
            deleteRecipe,
            setRecipeData,
        }}>
            {children}
        </RecipeContext.Provider>
    );
};

export const useRecipe = () => useContext(RecipeContext);