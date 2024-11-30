import React, { useContext, useEffect } from 'react';
import { useRecipe } from '@/contexts/RecipeContext';
const DashboardPage = () => {
  const { recipes } = useRecipe();

  return (
    <div className="container flex-col-2 justify-center items-center">
      <h1>Dashboard</h1>
      <h2>{recipes}</h2>
    </div>
  )
}

export default DashboardPage