import React, { useContext, useEffect, useMemo } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';

import { RecipeContext } from '@/contexts/RecipeContext';

import IconBack from '@/components/icons/IconBack';

const RecipeForm = () => {
    // Hooks
    const location = useLocation();
    const { createRecipe, updateRecipe, fetchRecipe, recipeData, setRecipeData } = useContext(RecipeContext);

    // State
    const { id } = useParams();

    const isEdit = useMemo(() => {
        return location.pathname.includes('edit');
    }, [location]);

    // Methods
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        if (id && recipeData) {
            updateRecipe(recipeData.id, data);
        }
        else {
            createRecipe(data);
        }
    };


    useEffect(() => {
        if (id && !recipeData) {
            fetchRecipe(id);
        }
    }, [id, recipeData]);

    useEffect(() => {
        if (location.pathname.includes('new')) {
            setRecipeData(null);
            console.log('hello???', isEdit)
        }
    }, [location]);
    return (
        <div className='flex-col-2 p-[1rem]'>
            <Link to={id ? `/dashboard/recipes/${id}` : '/dashboard'} className='flex items-center gap-x-[0.2rem] w-max'>
                <IconBack />
                <span className='uppercase text-[14px]'>Back</span>
            </Link>
            {id ? <h2 className='h4'>Edit Recipe</h2> : <h2 className='h4'>New Recipe</h2>}
            <form onSubmit={handleSubmit} action="submit">
                <div className='flex-col-2 gap-y-[1rem]'>
                    <div className='flex-col-05 gap-y-[0.5rem]'>
                        <label htmlFor="title">Name</label>
                        <input required type="text" id="title" name="title" className='border' defaultValue={isEdit ? recipeData?.title : ''} />
                    </div>

                    <div className='flex-col-05 gap-y-[0.5rem]'>
                        <label htmlFor="ingredients">Ingredients</label>
                        <textarea id="ingredients" name="ingredients" className='border h-[8rem]' defaultValue={isEdit ? recipeData?.ingredients : ''}></textarea>
                    </div>
                    <div className='flex-col-05 gap-y-[0.5rem]'>
                        <label htmlFor="instructions">Instructions</label>
                        <textarea id="instructions" name="instructions" className='border h-[8rem]' defaultValue={isEdit ? recipeData?.instructions : ''}></textarea>
                    </div>
                    <button type="submit" className='btn'>{id ? 'Update' : 'Create'}</button>
                </div>
            </form>
        </div>
    )
}

export default RecipeForm;