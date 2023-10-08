"use client";

import Link from "next/link";
import styles from "./demandaStyle.module.css";
export default function Demanda({ params } : { params: { service: string }}) {
  return (
    <div className={styles.div}>
      <h1>Reclamação - { params.service }</h1>
      <p>Faça sua reclamação: </p>
      <form action="">
        <div className={styles.divFather}>
          <div className={styles.container}>
            <p>Nome:</p>
            <input className={styles.inputStyle} id="inputNome" type="text" placeholder="Nome" />
          </div>
          <div className={styles.container}>
            <p>Endereço:</p>
            <input className={styles.inputStyle} type="text" placeholder="Endereço:ex. Rua Hugor Alberto" />
          </div>
          <div className={styles.container}>
            <p>Reclamação:</p>
            <textarea className={styles.textArea} name="reclamacao" id="reclamacaoInput" ></textarea>
          </div>
          <div className={styles.buttonDiv}>
            <input className={styles.submitButton} type="submit" ></input>
          </div>
          
        </div>
      </form>
    </div>
  );
}
