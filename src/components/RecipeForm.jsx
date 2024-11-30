import React from 'react'

const RecipeForm = () => {
    return (
        <div className='flex-col-2 p-[1rem]'>
            <h2 className='h4'>New Recipe</h2>
            <form action="submit">
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