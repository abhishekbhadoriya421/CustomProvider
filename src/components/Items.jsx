import styles from "../styles/Item.module.css";
import ItemCard from "./ItemCard";
import data from '../data/itemData';

function Items() {
  const items = data;
  return (
    <div className={styles.wrapper}>
      {items.map((ele,index)=>{
        return <ItemCard key={index} itemData={ele} />
      })}
    </div>
  );
}

export default Items;
