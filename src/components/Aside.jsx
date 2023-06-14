import React, { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../contexts/productsContext'

const style = {
  filterBnt: `bg-black text-white px-8 py-2 rounded-lg w-full my-3 text-lg hover:bg-purple transition-all`
}
const Aside = () => {
  const { getAllCategories, categories,getFilteredProducts } = useContext(ProductsContext)
  const handleSubmit = e => {
    e.preventDefault()
    const inputs = Array.from(e.target)
    const checkboxInput = inputs.filter(inp => inp.type === 'checkbox')
    const checkedCategories = checkboxInput.filter(inp => inp.checked === true)
    console.log(checkedCategories)
    getFilteredProducts(checkedCategories)
  }
  
  useEffect(() => {
    getAllCategories()
  }, [])

  return (
    <div className='border-r-2 px-6 py-3 w-1/6'>
      <h1 className='text-4xl font-bold text-text mb-3'>Categories</h1>
      <form onSubmit={handleSubmit}>
        <div className='pl-4'>
          {categories.map(category => (
            <p
              key={category.id}
              className='text-dark-gray text-lg mb-2  hover:text-text transition-all cursor-pointer'
            >
              <input
                type='checkbox'
                id={category.name}
                name='category'
                value={category.id}
                className='hover:ml-3 transition-all'
              />
              <label className='cursor-pointer' htmlFor={category.name}>
                {category.name}
              </label>
            </p>
          ))}
        </div>
        <button type='submit' className={style.filterBnt}>
          Filter
        </button>
      </form>
    </div>
  )
}

export default Aside
