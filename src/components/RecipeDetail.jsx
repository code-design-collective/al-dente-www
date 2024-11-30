import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';

import { RecipeContext } from '@/contexts/RecipeContext';

import IconBack from '@/components/icons/IconBack';

const RecipeDetail = () => {
    const { fetchRecipe } = useContext(RecipeContext);

    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetch = async () => {
            try {
                const recipe = await fetchRecipe(id);
                setRecipe(recipe);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetch();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading recipe</div>;
    }

    return (
        <section className='flex-col-1'>
            <Link to='/dashboard' className='flex items-center gap-x-[0.2rem] w-max'>
                <IconBack />
                <span className='uppercase text-[14px]'>Back</span>
            </Link>
            <article className='flex-col-2'>
                <h2>{recipe.title}</h2>
                <div className="flex-col-2">
                    <div className="flex-col-05">
                        <span className="label">Ingredients</span>
                        <p>{recipe.ingredients}</p>
                    </div>
                    <div className="flex-col-05">
                        <span className="label">Instructions</span>
                        <p>{recipe.instructions}</p>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default RecipeDetail;