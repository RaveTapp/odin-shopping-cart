import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import styles from "./app.module.css";

export default function App() {
  const [numItems, setNumItems] = useState(0);

  return (
    <>
      <header className={styles.header}>
        <NavLink to="/" className={styles.navlink}>
          Home
        </NavLink>
        <NavLink to="/shop" className={styles.navlink}>
          Shop
        </NavLink>
        <h2>{numItems} in cart</h2>
      </header>
      <Outlet context={[numItems, setNumItems]} />
    </>
  );
}
