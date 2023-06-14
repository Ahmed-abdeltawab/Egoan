import React, { useEffect, useContext } from 'react'
import { ProductsContext } from '../contexts/productsContext'
import Product from './Product'

const Products = () => {
  const { getAllProducts, products, filteredProducts } = useContext(
    ProductsContext
  )

  useEffect(() => {
    getAllProducts()
  }, [])
  return (
    <div className='px-10 grid grid-cols-4 gap-16'>
      {filteredProducts.length
        ? filteredProducts.map((product, index) => (
            <Product  key={index} product={product} />
          ))
        : products.map((product, index) => (
            <Product  key={index} product={product} />
          ))}
    </div>
  )
}

export default Products
