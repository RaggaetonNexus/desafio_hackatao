"use client"

import React, { useEffect } from 'react';
import styles from "./servico.module.css";
import { useRouter } from 'next/navigation';
import { Service } from '../../page';
import Link from 'next/link';

export default function Servico({ params }: { params: { serviceId: string[]} }) {
  const [servico, setServico] = React.useState<Service>();

  const getServico = () => {
    fetch("http://localhost:4000/services/"+params.serviceId[0], {  
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data: Service) => {
        console.log("Success:", data);
        setServico(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });  
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(getServico, []);

  return (
    <div className={styles.servico}>
      <div className={styles.conteudo}>
        <h1>Serviço:</h1>
        <h2>{servico?.title}</h2>
        <p className={styles.p} ><strong>Descrição: </strong>{servico?.description}</p>
        <div>
        <h3 className={styles.p} ><strong>Provedor: </strong>{servico?.provider.name}</h3>
        </div> 
        <label className={styles.p} ><strong>Tipo de serviço: </strong>{servico?.serviceType.typename || ''}</label>
        <div className={styles.p} ><strong>Status do serviço: </strong>{servico?.status}</div>
        <label className={styles.p} ><strong>Data de início:</strong> </label>
        <label className={styles.p} >{(() => {  
          const parsedDate = new Date(servico?.dateInit + '');
          // generate a day/month/year Hour:minute string
          if (parsedDate.toString() !== 'Invalid Date') {
            return parsedDate.getDate() + '/' + parsedDate.getMonth() + '/' + parsedDate.getFullYear() + ' ' + parsedDate.getHours() + ':' + parsedDate.getMinutes();
          }
          return '';
        })()}</label>
        <br />
        <label className="p"><strong>Data de fim:</strong> </label>
        <label className="p">{(servico?.dateEnd) ? (() => {
          const parsedDate = new Date(servico?.dateEnd + '');
          // generate a day/month/year Hour:minute string
          if (parsedDate.toString() !== 'Invalid Date') {
            return parsedDate.getDate() + '/' + parsedDate.getMonth() + '/' + parsedDate.getFullYear() + ' ' + parsedDate.getHours() + ':' + parsedDate.getMinutes();
          }
          return '';
        })() : 'Data de fim indefinida'}</label>
        <br />
        <Link className={styles.link} href={"/adicionarDemanda/"+servico?._id}><button>Adicionar demanda</button></Link>

      </div>
    </div>
  );
};
