'use client';

import styles from "./reclamacoes.module.css";
import { useEffect, useState } from "react";

export default function Reclamacoes() {
  const [demandas, setDemandas] = useState<any[]>([]);

  const getDemandas = async () => {
    await fetch("http://127.0.0.1:4000/request/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setDemandas(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://127.0.0.1:4000/request/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        console.log("Success:", data);
        setDemandas(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={styles.dashboard}>
      <div className={styles.reclamacoes}>
        <h1>Reclamações</h1>
        <div className={styles.cardsDashboard}>
          <h1>Buraco na rua</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
            laudantium officiis, cupiditate temporibus magnam, corrupti sed vero
            modi culpa, error a suscipit fugiat odio! Deserunt obcaecati natus
            recusandae repellat nemo?
          </p>
        </div>
        {demandas.map((demanda: any) => {
          return (
            <div key={Math.random()} className={styles.cardsDashboard}>
              <h2>Reclamação de {demanda.service} - Status: {demanda.status}</h2>
              <h1>{demanda.title}</h1>
              <p>
                {demanda.desciption}
              </p>
              <p>
                {demanda.author}
              </p>
              <p>
                {demanda.optionalArgs.map((text: string) => {
                  return (
                    <div key={Math.random()}>
                      <p>{text}</p>
                    </div>
                  );
                })}
              </p>
            </div>
          );
        })}
      </div>
      <div className={styles.ofertas}>
        <h1>Ofertas</h1>
        <div className={styles.cardsDashboard}>
          <h1>Trabalho</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
            laudantium officiis, cupiditate temporibus magnam, corrupti sed vero
            modi culpa, error a suscipit fugiat odio! Deserunt obcaecati natus
            recusandae repellat nemo?
          </p>
        </div>
      </div>
    </div>
  );
}
