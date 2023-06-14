import React from 'react'
import Aside from '../components/Aside'
import Products from '../components/Products'

const Home = () => {
  return (
    <div className='flex'>
      <Aside />
      <Products />
    </div>
  )
}

export default Home
