import Styles from "./product.module.css";
import { useOutletContext } from "react-router-dom";

export default function Product({ product }) {
  const [numItems, setNumItems] = useOutletContext();

  function handleClick(event) {
    let num = Number(event.target.previousSibling.value);
    if (num > 0) {
      setNumItems(numItems + num);
    }
  }

  return (
    <div className={Styles.product}>
      <img src={product.image} alt={product.title} className={Styles.image} />
      <h3>{product.title}</h3>
      <input type="number" min="0" className={Styles.input} />
      <button className={Styles.button} onClick={handleClick}>
        Add To Cart
      </button>
    </div>
  );
}
