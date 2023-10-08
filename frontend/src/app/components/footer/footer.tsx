import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  text: string;
}

export default function Footer() {
  return (
    <div id={styles.footer}>
      <footer className={styles.footerTexto}>
        <Image
          className={styles.Imagens}
          src={"/footericon.png"}
          width={100}
          height={100}
          alt="prefeitura"
        />

        <div className={styles.secaoLinks}>
          <Link
            href="https://www.google.com.br/"
            target="_blank"
            className={styles.links}
          >
            Privacidade
          </Link>
          <span>|</span>

          <Link
            href="https://www.google.com.br/"
            target="_blank"
            className={styles.links}
          >
            Termos
          </Link>

          <span>|</span>

          <Link
            href="https://www.google.com.br/"
            target="_blank"
            className={styles.links}
          >
            Copyright
          </Link>
        </div>
      </footer>
    </div>
  );
}
