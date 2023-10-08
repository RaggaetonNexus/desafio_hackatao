import styles from "./cards.module.css";
import Image from "next/image";

export default function Cards() {
  return (
    <div className={styles.card}>
      {/* <div className={styles.card__image}>
        <Image src="/next.svg" alt="img" width={128} height={128} />
      </div> */}
      <div className={styles.card__content}>
        <h3>Card Title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum.
        </p>
        <button className={styles.button}>Click</button>
      </div>
    </div>
  );
}
