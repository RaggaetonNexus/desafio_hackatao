import styles from "./cadastro.module.css";
import Link from "next/link";

export default function Cadastro() {
  return (
    <div className={styles.div}>
      <h1 className={styles.h1}>Cadastro</h1>
      <form className={styles.form}>
        <label className={styles.label}>Cpf</label>
        <input
          className={styles.input}
          type="text"
          name="cpf"
          placeholder="Digite seu cpf"
        />
        <label className={styles.label}>Digite sua senha</label>
        <input
          className={styles.input}
          type="password"
          name="senha"
          placeholder="Digite sua senha"
        />
        <label className={styles.label}>Confirme sua senha</label>
        <input
          className={styles.input}
          type="password"
          name="senha"
          placeholder="Digite sua senha"
        />

        <div className={styles.cadastroButtons}>
          <Link href="/">
            <button className={styles.button} type="submit">
              Cadastrar
            </button>
          </Link>
          <Link href="/login">
            <button className={styles.button} type="submit">
              Login
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
