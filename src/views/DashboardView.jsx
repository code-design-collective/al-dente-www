import React, { useContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { RecipeContext } from '@/contexts/RecipeContext';

import RecipeForm from '@/components/RecipeForm';
import RecipeDetail from '@/components/RecipeDetail';

const DashboardPage = () => {
  const { recipes, loading } = useContext(RecipeContext);

  return (
    <div className="container flex-col-2 justify-center items-center">
      <h1 className='h2'>Let's get cookin!</h1>
      <div className='w-full grid lg:grid-cols-12 gap-[4rem]'>
        <div className='lg:col-span-3 flex-col-2'>
          <h2 className='h4'>Recipes</h2>
          <Link className="btn w-max" to='/dashboard/recipes/new'>New</Link>
          <ul className='flex-col-1'>
            {!recipes?.length ? (
              <p>0 Recipes</p>
            ) : (
              recipes.map((recipe, index) => (
                <li key={recipe.id}>
                  <Link to={`/dashboard/recipes/${recipe.id}`}>
                    <span>{recipe.title}</span>
                  </Link>
                </li>
              ))
            )}
          </ul>
        </div>
        <div className='lg:col-span-9'>
          <Routes>
            <Route path="/" element={<div>Select a recipe or create a new one</div>} />
            <Route path="/recipes/new" element={<RecipeForm />} />
            <Route path="/recipes/:id" element={<RecipeDetail />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage;