/* eslint-disable react-hooks/exhaustive-deps */
"use client";


import react, { useState, useEffect, useRef } from 'react';
import styles from "./adicionarDemanda.module.css";
import {ProvedorType, ServicetypeType, Service} from '../../page'


export default function NovoDemanda({ params }: { params: { serviceId: string[]} }) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [endereco, setEndereco] = useState("");
  const [servico, setServico] = useState<Service>();
  const [inputVisivel, setInputVisivel] = useState(false);
  const [inputTipoVisivel, setInputTipoVisivel] = useState(false);
  const [otherArgsInputValues, setOtherArgsInputValues] = useState<string[]>([]);

  const getServico = async () => {
    await fetch("http://127.0.0.1:4000/request/"+params.serviceId[0], {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setServico(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  
  useEffect(() => {
    async function fetchData() {
      await getServico();
    }
    fetchData();
  }, []);


  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = {
      service: servico?._id,
      title: titulo,
      desciption: descricao,
      status: "sent",
      author: "13254376599",
      optionalArgs: otherArgsInputValues,
    };
    console.log(data);
    await fetch("http://localhost:4000/request/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }



  const toggleInput = () => {
    setInputVisivel(!inputVisivel);
  };
  const toggleInputType = () => {
    setInputTipoVisivel(!inputTipoVisivel);
  };



  return (
    <div className={styles.div}>
      <h1 className={styles.h1}>Adicionar serviço</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>Título da demanda: </label>
        <input
          className={styles.input}
          type="text"
          name="titulo"
          placeholder="Digite o titulo da demanda"
          value={titulo}
          onChange={(event) => setTitulo(event.target.value)}
        />
        <label className={styles.label}>Digite a descrição da demanda</label>
        <input
          className={styles.input}
          type="text"
          name="descricao"
          placeholder="Digite a descrição"
          value={descricao}
          onChange={(event) => setDescricao(event.target.value)}
        />

        {servico?.otherArgs && servico?.otherArgs.map((arg, index) => {
          return (
            <div key={Math.random()}>
              <label className={styles.label} htmlFor={`input-${arg}`}>{arg}</label>
              <input
                id={`input-${arg}`}
                className={styles.input}
                type="text"
                value={otherArgsInputValues[index] ?? ''}
                onChange={(event) => {
                  const newOtherArgsInputValues = [...otherArgsInputValues];
                  newOtherArgsInputValues[index] = event.target.value;
                  setOtherArgsInputValues(newOtherArgsInputValues);
                }}
              />
            </div>
          );
        })}
        
        <div className={styles.buttonDiv}>
          <button className={styles.button} type="submit">
            Enviar
          </button>
        </div>
      </form >
    </div >
  );
}
