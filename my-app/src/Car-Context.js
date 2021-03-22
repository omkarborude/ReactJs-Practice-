import { createContext } from "react";

export const CartContext = createContext()

export function Cartprovider ({children}) {
     
    return (
        <CartContext.Provider value={{cartitems:4}}>
            {children}
        </CartContext.Provider>
    )
     
}