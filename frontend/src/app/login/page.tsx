"use client";

import Link from "next/link";
import styles from "./styleLogin.module.css";

export default function Login() {
  return (
    <div className={styles.div}>
      <h1 className={styles.h1}>Autenticação</h1>
      <form className={styles.form}>
        <label className={styles.label}>CPF</label>
        <input
          className={styles.input}
          type="text"
          name="cpf"
          placeholder="Digite seu cpf"
        />
        <label className={styles.label}>Senha</label>
        <input
          className={styles.input}
          type="password"
          name="senha"
          placeholder="Digite sua senha"
        />
        <div className={styles.buttonDiv}>
          <Link href="/">
            <button className={styles.button} type="submit">
              Entrar
            </button>
          </Link>
          <Link href="/cadastro">
            <button className={styles.button} type="submit">
              Cadastrar
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
