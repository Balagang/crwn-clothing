import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
    categoriesMap: {}, 
})

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({})
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments()
          
            setCategoriesMap(categoryMap)
        }
        getCategoriesMap()
    }, [])
    const value = { categoriesMap } //array in side obj  using in import file
    return <CategoriesContext.Provider value={value}> {children} </CategoriesContext.Provider>
}

export default CategoriesProvider