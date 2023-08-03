import { createContext, useState } from "react";

const ItemContext = createContext();

// Creating custom Provider 
function ItemProvider({children}){
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);
    console.log(children)
    return(
        <ItemContext.Provider value={{total,setTotal,item,setItem}}>
            {/* Passing children to the provider */}
            {children}
        </ItemContext.Provider>
    )
}

export {ItemContext,ItemProvider};