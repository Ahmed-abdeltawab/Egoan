import { useState } from 'react'
import { createContext } from 'react'
import axios from 'axios'

export const ProductsContext = createContext()

const ProductsContextProvider = props => {
  const [purchases, setPurchases] = useState([])
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [totalCost, setTotalCost] = useState(0)

  const getAllCategories = () => {
    axios.get(`https://api.escuelajs.co/api/v1/categories`).then(res => {
      setCategories(res.data)
    })
  }
  const getAllProducts = () => {
    axios.get(`https://api.escuelajs.co/api/v1/products`).then(res => {
      setProducts(res.data)
    })
  }
const removeFromCart = (id, price) => {
  const newPurchases = purchases.filter(purchase => purchase.id !== id)
  setPurchases(newPurchases)
  calcTotalCost(price, '-')
}
const clearCart = () => {
  setPurchases([])
  setTotalCost(0)
}
  const getFilteredProducts = (checkedCategories = []) => {
    if (checkedCategories) {
      let filteredProducts = []
      checkedCategories.map(category => {
        axios
          .get(
            `https://api.escuelajs.co/api/v1/categories/${category.value}/products`
          )
          .then(res => {
            console.log(filteredProducts)
            filteredProducts.push(res.data)
          })
          .then(() => {
            console.log(filteredProducts.flat())
            setFilteredProducts(filteredProducts.flat())
          })
      })
    } else setFilteredProducts([])
  }
  const addToCart = pro => {
    pro.amount = 1
    calcTotalCost(pro.price, '+')
    setPurchases([...purchases, pro])
  }
  const calcTotalCost = (price, operation) => {
    operation === '+'
      ? setTotalCost(totalCost + price)
      : setTotalCost(totalCost - price)
  }
  return (
    <ProductsContext.Provider
      value={{
        categories,
        getAllCategories,
        products,
        getAllProducts,
        getFilteredProducts,
        filteredProducts,
        addToCart,
        purchases,
        setPurchases,
        calcTotalCost,
        totalCost,
        removeFromCart,
        clearCart
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  )
}

export default ProductsContextProvider
