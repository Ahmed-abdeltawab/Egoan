import React, { useContext } from 'react'
import { ProductsContext } from '../contexts/productsContext'
const Product = ({ product }) => {
  const { addToCart } = useContext(ProductsContext)

  return (
    <div className='border rounded-lg pb-3'>
      <img
        src={product.images[0]}
        alt={product.title}
        className='w-full h-[60%] rounded-t-lg'
      />
      <p className='px-4 text-text h-1/5 text-xl font-semibold my-3'>
        {product.title}
      </p>
      <div className='flex justify-between items-center px-4'>
        <p className='text-xl font-semibold'>${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className='border-dark-gray border px-6 py-2 font-semibold rounded-lg hover:bg-purple hover:text-white transition-all '
        >
          Add
        </button>
      </div>
      {/* <p className='text-red-500 text-xl text-center'>
        {product.category.name}
      </p> */}
    </div>
  )
}

export default Product
