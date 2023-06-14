import React from 'react'
import { useContext } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { GrAdd, GrSubtract } from 'react-icons/gr'
import { ProductsContext } from '../contexts/productsContext'
const Cart = () => {
  const { purchases, calcTotalCost, totalCost } = useContext(ProductsContext)

  return (
    purchases && (
      <div className='w-[80%] mx-auto mt-10'>
        <div className='flex items-center gap-7 mb-10'>
          <h2 className='text-xl font-semibold'>Total Cost:{totalCost}$</h2>
          <p className='text-lg text-white bg-purple p-5 py-2 rounded-md'>
            Clear ({purchases.length})
          </p>
        </div>
        {purchases.map((pro, index) => (
          <div
            key={index}
            className='bg-light-gray h-[26vh] border border-b-black  px-7 py-8 flex items-center justify-between'
          >
            <img src={pro.images[0]} className='h-full' />
            <div className=''>
              <p className='font-semibold'>{pro.title}</p>
              <p className='text-sm text-dark-gray'>2002/11/2</p>
            </div>
            <div className='flex items-center gap-x-3 '>
              <GrSubtract
                size={20}
                className='font-semibold cursor-pointer'
                onClick={() => {
                  calcTotalCost(pro.price, '-')
                  pro.amount--
                }}
              />
              <p className='text-xl font-semibold py-1  px-5 border rounded-md border-dark-gray'>
                {pro.amount}
              </p>
              <GrAdd
                size={20}
                className='font-semibold cursor-pointer'
                onClick={() => {
                  calcTotalCost(pro.price, '+')
                  pro.amount++
                }}
              />
            </div>
            <p className='font-semibold text-xl'>{pro.price}$</p>
            <AiOutlineClose
              size={25}
              fontWeight={800}
              className='cursor-pointer'
            />
          </div>
        ))}
      </div>
    )
  )
}

export default Cart
