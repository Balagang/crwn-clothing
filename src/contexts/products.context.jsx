import { createContext, useState } from "react";

import PRODOCTS from '../shop-data.json'

export const ProductsContext = createContext({
    products:[], 
})

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(PRODOCTS)
    const value = { products } //array in side obj  using in import file
    console.log(value)
    return <ProductsContext.Provider value={value}> {children} </ProductsContext.Provider>
}

export default ProductsProvider