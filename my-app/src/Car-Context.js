import { createContext, useContext, useState } from "react";

export const CartContext = createContext()

export function Cartprovider ({children}) {
     const [ item , setitem ] = useState([])
    return (
        <CartContext.Provider value={{cartitems:4,item , setitem}}>
            {children}
        </CartContext.Provider>
    )
     
}

export function useCart () {
    return useContext(CartContext)
}