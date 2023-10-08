"use client";

import Link from "next/link";
import styles from "./demandaStyle.module.css";

export default function Info({ params } : { params: { service: string }}) {
  let url = `/denuncia/${params.service}`;
  return (
    <div className={styles.div}>
      
     <h1>Título do serviço</h1>
     <br />
     <p>A Prefeitura de [Nome da Cidade] oferece uma agenda de coleta de resíduos domésticos que abrange todos os bairros da cidade. Os horários e dias de coleta são claramente definidos para que os residentes possam se preparar.</p>
     <br />
     <p><b>Provedor: </b>Prefeitura</p>
     <br />
     <p><b>Tipo de serviço: </b>Médico</p>
     <br />
     <p><b>Status: </b>encaminhado</p>
     <br />
     <p><b>Data de início: </b>12/12/2024</p>
     <br />
     <p><b>Data de fim: </b>20/12/2024</p>
     <br />

     <Link href={url} > <button>  Criar requisição</button></Link>
    </div>
  );
}


