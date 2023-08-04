import { createContext, useContext, useState } from "react";

const ItemContext = createContext();

// custom useEffect
function useValue(){
    const value = useContext(ItemContext);
    return value;
}

// Creating custom Provider 
function ItemProvider({children}){
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);

    // Add item
  const handleAdd = (price) => {
    setTotal(total+price);
    setItem(item+1);
  };

    // remove Item 
  const handleRemove = (price) => {
    if(total===0) return;
    setItem(item-1);
    setTotal(total-price);
  };
    return(
        <ItemContext.Provider value={{total,setTotal,item,setItem, handleAdd,handleRemove}}>
            {/* Passing children to the provider */}
            {children}
        </ItemContext.Provider>
    )
}

export {ItemContext,ItemProvider,useValue};