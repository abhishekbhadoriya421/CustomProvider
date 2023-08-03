import React from "react";
import styles from "../styles/Total.module.css";
import { useContext } from "react";
import { itemContext } from "../ItemContext";
import { TotalContext } from "../TotalContext";

function Navbar() {
  const {item} = useContext(itemContext);
  const {total} = useContext(TotalContext);
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
    </div>
  );
}

export default Navbar;
