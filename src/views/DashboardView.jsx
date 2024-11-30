import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RecipeContext } from '@/contexts/RecipeContext';

const DashboardPage = () => {
  const { recipes, loading } = useContext(RecipeContext);

  return (
    <div className="container flex-col-2 justify-center items-center">
      <h1 className='h2'>Let's get cookin!</h1>
      <div className='w-full grid lg:grid-cols-12 gap-[4rem]'>
        <div className='lg:col-span-3 flex-col-2'>
          <h2 className='h4'>Recipes</h2>
          <Link className="btn w-max" to='/dashboard/new'>New</Link>
          <ul className='flex-col-1'>
            {!recipes?.length ? (
              <p>0 Recipes</p>
            ) : (
              recipes.map((recipe) => (
                <li key={recipe.id}>{recipe.name}</li>
              ))
            )}
          </ul>
        </div>
        <div className='lg:col-span-9'>
          {/* <p>No Recipes</p> */}
        </div>
      </div>
    </div>
  )
}

export default DashboardPage;