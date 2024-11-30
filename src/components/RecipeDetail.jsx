import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';

import { RecipeContext } from '@/contexts/RecipeContext';

import IconBack from '@/components/icons/IconBack';

const RecipeDetail = () => {
    // Context
    const { fetchRecipe, deleteRecipe, recipeData } = useContext(RecipeContext);

    // State
    const { id } = useParams();

    // Methods
    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this recipe?')) {
            deleteRecipe(id);
        }
    }

    // Lifecycle
    useEffect(() => {
        fetchRecipe(id);
    }, [id]);

    return (
        <section className='flex-col-1'>
            <div className="flex justify-between items-center">
                <Link to='/dashboard' className='flex items-center gap-x-[0.2rem] w-max'>
                    <IconBack />
                    <span className='label'>Back</span>
                </Link>
                <div className="flex gap-x-[0.5rem]">
                    <Link to={`/dashboard/recipes/edit/${id}`} className='label btn'>Edit</Link>
                    <button onClick={handleDelete} className='label btn'>Delete</button>
                </div>
            </div>
            <article className='flex-col-2'>
                <h2>{recipeData?.title}</h2>
                <div className="flex-col-2">
                    <div className="flex-col-05">
                        <span className="label">Ingredients</span>
                        <p>{recipeData?.ingredients}</p>
                    </div>
                    <div className="flex-col-05">
                        <span className="label">Instructions</span>
                        <p>{recipeData?.instructions}</p>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default RecipeDetail;