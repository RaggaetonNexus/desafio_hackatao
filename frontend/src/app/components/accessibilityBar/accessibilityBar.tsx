'use client';

import styles from "./acessibilityBar.module.css";
import { useFontSize } from "../fontSizeProvider/fontSizeProvider";

export default function AccessibilityBar() {
  const { FontSize, setFontSize } = useFontSize();

  return (
    <nav id={styles.accessibilityBar}>
      <button className={styles.button}>Contraste</button>
      <button className={styles.button} onClick={() => {
        if (Number(FontSize) > 0.5 && Number(FontSize) <= 2) setFontSize(Number(FontSize) + 0.1);
      }}>Aumentar Fonte</button>
      <button className={styles.button} onClick={() => {
        if (Number(FontSize) > 0.6 && Number(FontSize) <= 2.1) setFontSize(Number(FontSize) - 0.1);
      }}>Diminuir Fonte</button>
      <button className={styles.button} onClick={() => {
        // @ts-ignore
        new window.VLibras.Widget('https://vlibras.gov.br/app');
        // @ts-ignore
        window.onload();
      }}>Libras</button>
    </nav>
  );
}
