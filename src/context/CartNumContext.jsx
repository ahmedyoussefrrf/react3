import { Children, createContext, useState } from "react";


export let CartNums = createContext(0)

export default function CartNumsProvider({children})

{

    let [cartNum,setCartNum] = useState(0)
 return<CartNums.Provider value={{cartNum,setCartNum}} >
   {children} 


 </CartNums.Provider>

}