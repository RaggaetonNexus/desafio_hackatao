import React from 'react';
import Head from 'next/head';
import styles from './admin.module.css';

export default function Admin() {
 return (
    <div className={styles.container}>
      <Head>
        <title>Admin Page</title>
        
      </Head>

      
        <h1 className={styles.title}>
         Bem vindo a pagina do admin
        </h1>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h2>butao &rarr;</h2>
            <p>clique</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>butao 2 &rarr;</h2>
            <p>clique</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>butao 3 &rarr;</h2>
            <p>clique</p>
          </a>
        </div>
      </div>
 )
}
