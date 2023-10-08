"use client";

import styles from "./page.module.css";
import Cards from "./components/cards/cards";
import react ,{ useState, useEffect } from "react";
import Modal from "./components/modal/modal";

export type ProvedorType = {
  _id: number;
  name: string;
};
export type ServicetypeType = {
  _id: number;
  typename: string;
};
export interface Service {
  _id: number;
  title: string;
  description: string;
  provider: ProvedorType;
  serviceType: ServicetypeType;
  status: 'planned' | 'ongoing' | 'finished';
  dateInit: string;
  dateEnd?: string;
  otherArgs?: string[];
}



const Home = () => {
  const [servicos, setServicos] = useState<Service[]>([]);
  
  const getServicos = () => {
    fetch("http://localhost:4000/services/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setServicos(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(getServicos, []);

  return (
    <main className={styles.main}>
      {
        <div>
          {servicos.map((servico) => (
            <Cards
              key={servico._id}
              id={servico._id}
              title={servico.title}
              description={servico.description}
            />

          ))}
        </div>
      }
    </main>
  );
}

 export default Home;
