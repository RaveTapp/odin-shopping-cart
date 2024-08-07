import Styles from "./product.module.css";

export default function Product({ product }) {
  return (
    <div className={Styles.product}>
      <img src={product.image} alt={product.title} className={Styles.image} />
      <h3>{product.title}</h3>
      <input type="number" min="0" />
      <button className={Styles.button}>Add to cart</button>
    </div>
  );
}
