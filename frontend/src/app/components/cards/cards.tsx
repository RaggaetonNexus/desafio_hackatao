import styles from "./cards.module.css";
import Image from "next/image";
import Link from "next/link";

interface CardsProps {
  key: number;
  id: number;
  title: string;
  description: string;
}

const Cards: React.FC<CardsProps> = ({ id, title, description }) => {
  return (
    <div className={styles.card} >
      <h3>{title}</h3>
      <div className={styles.card__content}>
        <p>{description}</p>
        <Link href={{
          pathname: '/servico/'+id,
        }}  className={styles.button}>Detalhes</Link>
      </div>
    </div>
  );
}

 export default Cards;
