import itemCloseupImg from "../../assets/items-closeup.jpg";
import paymentImg from "../../assets/credit-cards.jpg";
import deliveryImg from "../../assets/delivery.jpg";
import styles from "./homepage.module.css";

export default function Homepage() {
  return (
    <>
      <section className={styles.homepage}>
        <div className={styles.materials}>
          <img
            src={itemCloseupImg}
            alt="closeup of elegant shirt and shoes"
            className={styles.img}
          />
          <h2>High quality materials</h2>
        </div>
        <div className={styles.delivery}>
          <h2>Fast worldwide deliveries</h2>
          <img
            src={deliveryImg}
            alt="Happy delivery man giving package out of car window"
            className={styles.img}
          />
        </div>
        <div className={styles.payment}>
          <img
            src={paymentImg}
            alt="closeup of credit cards on a table next to a full wallet"
            className={styles.img}
          />
          <h2>Payments made easy</h2>
        </div>
      </section>
    </>
  );
}
