import styles from "./adicionarServico.module.css";
import Link from "next/link";
export default function novoServico(){
    return(
      <div className={styles.div}>
      <h1 className={styles.h1}>Adicionar serviço</h1>
      <form className={styles.form}>
        <label className={styles.label}>Nome do serviço</label>
        <input
          className={styles.input}
          type="text"
          name="nome"
          placeholder="Digite o nome do serviço"
        />
        <label className={styles.label}>Digite a descrição do serviço</label>
        <input
          className={styles.input}
          type="text"
          name="senha"
          placeholder="Digite a descrição"
        />

        <label className={styles.label}>Digite o provedor</label>
        <input
          className={styles.input}
          type="text"
          name="provedor"
          placeholder="Digite o provedor"
        />

        <label className={styles.label}>Digite o tipo do serviço</label>
        <input
          className={styles.input}
          type="text"
          name="tipo"
          placeholder="Digite o tipo do serviço"
        />
        <label className={styles.label}>Status do serviço</label>

            <form>
                <input type="checkbox" id="planned" name="planned" value="planned"/>
                <label htmlFor="planned"> Planejado </label>
                <input type="checkbox" id="ongoing" name="ongoing" value="ongoing"/>
                <label htmlFor="ongoing"> Pendente </label>
                <input type="checkbox" id="finished" name="finished" value="finished"/>
                <label htmlFor="finished"> Finalizado </label>
            </form>

        <label className={styles.label}>Data inicial</label>    

        <input type="datetime-local" id="dataInicial" name="dataInicial"/>

        <label className={styles.label}>Data Final</label>
        <input type="datetime-local" id="dataFinal" name="dataFinal"/>        



        <div className={styles.buttonDiv}>
          <Link href="/home">
            <button className={styles.button} type="submit">
              Enviar
            </button>
          </Link>
          
        </div>
      </form>
    </div>
    )
}
