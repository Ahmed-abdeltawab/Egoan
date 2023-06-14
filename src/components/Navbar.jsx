import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { BsFillPersonFill } from 'react-icons/bs'
import logo from '../assets/icons/logo.png'
import { ProductsContext } from '../contexts/productsContext'

const style = {
  nav: `text-black px-7 py-1 flex justify-between  border-b-2`,
  logo: `w-20 h-20`,
  icons: `flex items-center gap-x-6 text-text`
}
const Navbar = () => {
  const { purchases } = useContext(ProductsContext)
  return (
    <div className={style.nav}>
      <Link to='/'>
        <img className={style.logo} src={logo} alt='logo' />
      </Link>
      <div className={style.icons}>
        <Link to='cart' className='relative'>
          <HiOutlineShoppingBag size={45} />
          {purchases.length > 0 ? (
            <span className='absolute bg-red-600 text-white rounded-full px-[7px] left-[-5px] bottom-[-10px]'>
              {purchases.length}
            </span>
          ) : (
            ''
          )}
        </Link>
        <BsFillPersonFill size={45} />
      </div>
    </div>
  )
}

export default Navbar
