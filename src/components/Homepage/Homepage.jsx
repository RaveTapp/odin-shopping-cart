import itemCloseup from "../../assets/items-closeup.jpg"
import styles from "./homepage.module.css"

export default function Homepage(){
    return <>
        <header></header>
        <section>
            <img src={itemCloseup} alt="closeup of elegant shirt and shoes" className={styles.closeup} />
        </section>
    </>
}