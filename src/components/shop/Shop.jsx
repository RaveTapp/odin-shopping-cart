import Product from "../product/Product";
import Styles from "./shop.module.css";

let products = fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
    console.log(json);
    products = json;
  });

export default function Shop() {
  let productCards = products.map((prod) => (
    <Product product={prod} key={prod.id} />
  ));

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.cards}>{productCards}</div>
    </div>
  );
}
