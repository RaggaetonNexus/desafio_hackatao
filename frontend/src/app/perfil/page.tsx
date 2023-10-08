'use client';

import styles from "./stylePerfil.module.css"
import Image from 'next/image'
export default function Perfil() {
   return(
    
    <div className={styles.drapper}>
        <h1 id={styles.titulo}> Bem vindo, usuario!</h1>
    
        <div className={styles.wrapper}>           
            <div className={styles.container}>
                <div className={styles.imagemPerfil}>
                    <Image
                    src= {'/next.svg'}
                    width={150}
                    height={150}
                    alt='prefeitura'
                    />
                </div>    
            </div>   
        </div>
        <div className={styles.contentDiv}>
            <div className={styles.dadosCidadaoDiv}>
                <h3>Seus dados</h3>
                <ul className={styles.dadosCidadaoDivUL}>
                    <li className={styles.dadosCidadaoDivLI}>Nome: Mario Ruby on Rails</li>
                    <li className={styles.dadosCidadaoDivLI}>Endereço: Rua da programação não tipada</li>
                    <li className={styles.dadosCidadaoDivLI}>CPF: 1569876856</li>
                    <li className={styles.dadosCidadaoDivLI}>Email: alksnjakhskaljs</li>
                </ul>
            </div>
            <div className={styles.servicosDiv}>
                <h3>Serviços</h3>
                <ul className={styles.servicosDivUL}>
                    <li><button className={styles.button}>Visualizar serviços</button></li>
                    <li><button className={styles.button}>Ver serviços pendentes</button></li>
                </ul>
            </div>
        </div>
            {/* <div className={styles.listagem}>
                <p className={styles.atributoL}> Nome: José Soares da Conceição Fonseca </p>     
                    <button className={styles.atributoL}> Visualizar serviços </button> 
                    <button className={styles.atributoL}> Ver serviços pendentes</button>
                    <button className={styles.atributoL}> Endereço</button> 
                    <button className={styles.atributoL}> CPF</button>
                    <button className={styles.atributoL}> Email</button>
            </div>     */}


    </div>    
    
    
   
   ) 
    

  
}
