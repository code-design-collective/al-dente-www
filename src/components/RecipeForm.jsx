import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { RecipeContext } from '@/contexts/RecipeContext';

import IconBack from '@/components/icons/IconBack';

const RecipeForm = () => {
    const { createRecipe } = useContext(RecipeContext);

    // Methods
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const recipeData = Object.fromEntries(formData);

        console.log('Form:', form);
        console.log('Form Data:', formData);
        console.log('Recipe Data:', recipeData);
        // createRecipe(recipeData);
    };

    return (
        <div className='flex-col-2 p-[1rem]'>
            <Link to='/dashboard' className='flex items-center gap-x-[0.2rem]'>
                <IconBack />
                <span className='uppercase text-[14px]'>Back</span>
            </Link>
            <h2 className='h4'>New Recipe</h2>
            <form onSubmit={handleSubmit} action="submit">
                <div className='flex-col-2 gap-y-[1rem]'>
                    <div className='flex-col-05 gap-y-[0.5rem]'>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" className='border' />
                    </div>

                    <div className='flex-col-05 gap-y-[0.5rem]'>
                        <label htmlFor="ingredients">Ingredients</label>
                        <textarea id="ingredients" name="ingredients" className='border'></textarea>
                    </div>
                    <div className='flex-col-05 gap-y-[0.5rem]'>
                        <label htmlFor="instructions">Instructions</label>
                        <textarea id="instructions" name="instructions" className='border'></textarea>
                    </div>
                    <button type="submit" className='bg-blue-500 text-white py-2 rounded'>Create</button>
                </div>
            </form>
        </div>
    )
}

export default RecipeForm