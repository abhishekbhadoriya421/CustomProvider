import React from "react";
import styles from "../styles/CartModal.module.css";
import { useValue } from "../ItemContext";

function CartModal() {

    const {addItemToCart,total,resetHandler,handleCart} = useValue();

  return (
    <div className={styles.cartModal}>
      <div className={styles.closeButton} onClick={handleCart}>
        Close
      </div>
      <div className={styles.clearButton} onClick={resetHandler}>
        Clear
      </div>
      <div className={styles.itemContainer}>
        {
            addItemToCart.map((ele,ind)=>{
                return(
                        <div key={ind} className={styles.cartCard}>
                            <p>{ele.name}</p>
                            <p>{ele.quantity}</p>
                            <p>{ele.price}</p>
                        </div>
                )
            })
        }
        
      </div>
      <div className={styles.total}>
        <div className={styles.totalText}>Total</div>
        <div className={styles.totalPrice}>${total}</div>
      </div>
    </div>
  );
}

export default CartModal;
