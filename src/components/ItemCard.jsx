import React from "react";
import styles from "../styles/ItemCard.module.css";
import { useContext } from "react";
import { itemContext } from "../ItemContext";
import { TotalContext } from "../TotalContext";


function ItemCard({ name, price }) {
  const {setItem,item,} = useContext(itemContext);
  const {total,setTotal} = useContext(TotalContext);

  const handleAdd = () => {
    setTotal(total+price);
    setItem(item+1);
  };

  const handleRemove = () => {
    if(total===0) return;
    setItem(item-1);
    setTotal(total-price);
  };

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd()}>
          Add
        </button>
        <button className={styles.itemButton} onClick={() => handleRemove()}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
