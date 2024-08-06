import { Outlet } from "react-router-dom";
import styles from "./app.module.css";
import { NavLink } from "react-router-dom";

export default function App() {
  return (
    <>
      <header className={styles.header}>
        <NavLink to="/" className={styles.navlink} >Home</NavLink>
        <NavLink to="/shop" className={styles.navlink} >Shop</NavLink>
        <NavLink to="/cart" className={styles.navlink} >Cart</NavLink>
      </header>
      <Outlet />
    </>
  );
}
