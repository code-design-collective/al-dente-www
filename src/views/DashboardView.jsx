import React, { useContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { RecipeContext } from '@/contexts/RecipeContext';

import RecipeForm from '@/components/RecipeForm';
import RecipeDetail from '@/components/RecipeDetail';

const DashboardPage = () => {
  const { recipes } = useContext(RecipeContext);

  return (
    <div className="container flex-col-2 justify-center items-center">
      <div className='w-full grid lg:grid-cols-12 gap-[2rem]'>
        <div className='lg:col-span-3 flex-col-2'>
          <div className="flex-col-1">
            <h2 className='h4'>Recipes</h2>
            <ul className='flex-col-05'>
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
        </div>
        <div className='lg:col-span-9'>
          <Routes>
            <Route path="/" element={
              <div>
                <h1 className='h2'>Let's get cookin!</h1>
                <p>Select a recipe or create a new one</p>
              </div>
            } />
            <Route path="/recipes/new" element={<RecipeForm />} />
            <Route path="/recipes/:id" element={<RecipeDetail />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage;