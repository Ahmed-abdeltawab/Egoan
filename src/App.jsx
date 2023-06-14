import React from 'react'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
