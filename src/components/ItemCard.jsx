import React from "react";
import styles from "../styles/ItemCard.module.css";
import { useValue } from "../ItemContext";


function ItemCard({ itemData }) {
  
  const { handleAdd,handleRemove} = useValue();
  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{itemData.name}</div>
      <div className={styles.itemPrice}>&#x20B9; {itemData.price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd(itemData)}>
          Add
        </button>
        <button className={styles.itemButton} onClick={() => handleRemove(itemData.id,itemData.price)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
