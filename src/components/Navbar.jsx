import React from "react";
import styles from "../styles/Total.module.css";
import sty from '../styles/ItemCard.module.css'
import { useValue } from "../ItemContext";

function Navbar() {
  const {item,total,resetHandler,handleCart} = useValue();
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
      <div>
        <button className={sty.itemButton} onClick={resetHandler}>Reset</button>
      </div>
      <div>
        <button className={sty.itemButton} onClick={handleCart}>Cart</button>
      </div>
    </div>
  );
}

export default Navbar;
