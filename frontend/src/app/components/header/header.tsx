import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header id={styles.mainHeader}>
      <div className={styles.esquerda}>
        <div id={styles.serviceLogoContainer}>
          <Image className={styles.logo} src="/logocz.png" alt="Logo" width={128} height={128}/>
        </div>
      </div>

      <div className={styles.direita}>
        <Link href="/login"><button className={styles.buttonDireita}>Sair</button></Link>
      </div>
    </header>
  );
}
