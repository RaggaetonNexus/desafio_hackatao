import Image from "next/image";
import type { Metadata } from "next";
import styles from "./page.module.css";
import Cards from "./components/cards/cards";

export const metadata: Metadata = {
  title: "CidadaniaConectada",
  description:
    "Um aplicativo que permite a participação cidadã na forma de relatos de problemas e descobrimento de ofertas de serviços públicos.",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <Cards />
    </main>
  );
}
