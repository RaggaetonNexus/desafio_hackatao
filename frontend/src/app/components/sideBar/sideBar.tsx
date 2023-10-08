import React from 'react';
import Link from 'next/link'
import styles from "./styleSideBar.module.css";

export default function SideBar() {
  return (
    <nav className={styles.nav}>
        <ul className={styles.ul}>     
              <Link className={styles.link} href="/">Início</Link>
              <Link className={styles.link} href="/perfil">Perfil</Link>
              <p className={styles.p}><div className={styles.line}/><span>Recursos Admin</span><div className={styles.line}/></p>
              <Link className={styles.link} href="/adicionarServico">Adicionar Serviço</Link>
              <Link className={styles.link} href="/reclamacoes">Visualizar Requisições</Link>
        </ul>
        
    </nav>
  );  
}
