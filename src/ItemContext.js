import { createContext, useContext, useState } from "react";
import CartModal from "./components/CartModal";

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
    const [showCart,setShowCart] = useState(false);
    const [addItemToCart,setAddItemToCart] = useState([]);

    // Add item
  const handleAdd = (itemData) => {
    setTotal(total+itemData.price);
    setItem(item+1);
    let ind = undefined;
    addItemToCart.forEach((element,index) => {
        if(element.id===itemData.id){
            ind = index;
        }
    });

    // there will be 2 cases either data will be present then we just have to increase the quantity else create new item and add them to addItemToCart 
    if(ind>=0){
        addItemToCart[ind].quantity++;
        setAddItemToCart(addItemToCart);
    }else{
        itemData.quantity = 1;
        setAddItemToCart([...addItemToCart,itemData]);
    }
  };

    // remove Item 
  const handleRemove = (itemId,price) => {
    if(total===0) return;

    let ind = undefined;
    addItemToCart.forEach((element,index) => {
        if(element.id===itemId){
            ind = index;
        }
    });
    if(ind>=0){
        if(addItemToCart[ind].quantity>1){
            addItemToCart[ind].quantity--;
            setAddItemToCart(addItemToCart);
        }else{
            const newData = addItemToCart.filter((ele,index)=>{
                return ind !==index;
            })
            setAddItemToCart(newData);
        }  
        setItem(item-1);
        setTotal(total-price);
    }
  };

    //   reset Total
  const resetHandler = ()=>{
    setItem(0);
    setTotal(0);
    setAddItemToCart([]);
  }

  const handleCart = () =>{
    setShowCart(!showCart);
  }
    return(
        <ItemContext.Provider
        value={{   
                total,
                item,
                handleAdd,
                handleRemove,
                resetHandler,
                handleCart,
                showCart,
                addItemToCart
                }}>
            {/* Passing children to the provider */}

            {/* if show cart is false the only children else show CartModule */}
            {(showCart && <CartModal/>) || children}
        </ItemContext.Provider>
    )
}

export {ItemContext,ItemProvider,useValue};