"use client";


import react, { useState, useEffect, useRef } from 'react';
import styles from "./adicionarServico.module.css";
import { ProvedorType, ServicetypeType } from '../page'
import { useRouter } from 'next/navigation';


export default function NovoServico() {
  const router = useRouter();

  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [provedor, setProvedor] = useState<ProvedorType>();
  const [provedores, setProvedores] = useState<ProvedorType[]>([]);
  const [tipo, setTipo] = useState<ServicetypeType>();
  const [tipos, setTipos] = useState<ServicetypeType[]>([]);
  const [status, setStatus] = useState("");
  const [dataInicial, setDataInicial] = useState("");
  const [dataFinal, setDataFinal] = useState("");
  const [inputVisivel, setInputVisivel] = useState(false);
  const [inputTipoVisivel, setInputTipoVisivel] = useState(false);
  const novoProvedorRef = useRef<HTMLInputElement>(null);
  const novoTypeRef = useRef<HTMLInputElement>(null);
  const [customInputs, setCustomInputs] = useState<{
    name: string;
    nameInputRef?: react.RefObject<HTMLInputElement>;
    type: string;
    typeInputRef?: react.RefObject<HTMLInputElement>;
  }[]>([]);

  const getProvedores = () => {
    fetch("http://127.0.0.1:4000/providers/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        const newProvedores = data.map((d: ProvedorType) => ({ _id: d._id, name: d.name }));
        setProvedores(newProvedores);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  const getTipos = () => {
    fetch("http://127.0.0.1:4000/services/types", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        const newTipos = data.map((d: ServicetypeType) => ({ _id: d._id, typename: d.typename }));
        setTipos(newTipos);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  useEffect(getProvedores, []);
  useEffect(getTipos, []);


  const criarNovoProvedor = (novoProvedorAdd: string) => {
    setInputVisivel(false);
    fetch(`http://127.0.0.1:4000/providers/?name=${novoProvedorAdd}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
    getProvedores();

  }

  async function criarNovoTipo(novoTipoAdd: string) {
    setInputVisivel(false);
    await fetch(`http://127.0.0.1:4000/services/types?name=${novoTipoAdd}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
    getTipos();

  }
  function handleSubmit(event: react.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = {
      title: nome,
      description: descricao,
      provider: provedor?._id,
      serviceType: tipo?._id,
      status: status,
      dateInit: dataInicial,
      ...(dataFinal ? { dateEnd: dataFinal } : {}),
      otherArgs: customInputs.map((customInput) => customInput.name),
    };
    console.log(data);
    fetch("http://127.0.0.1:4000/services/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        router.push('/')
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
        <label className={styles.label}>Nome do serviço</label>
        <input
          className={styles.input}
          type="text"
          name="nome"
          placeholder="Digite o nome do serviço"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
        <label className={styles.label}>Digite a descrição do serviço</label>
        <input
          className={styles.input}
          type="text"
          name="descricao"
          placeholder="Digite a descrição"
          value={descricao}
          onChange={(event) => setDescricao(event.target.value)}
        />

        <label className={styles.label}>Selecione o provedor</label>
        <>
          {provedores.map((p) => (
            <label key={p._id}>
              <input
                type="radio"
                name="provedor"
                value={p._id}
                onChange={() => setProvedor(p)}
                className={styles.valueTextInput}
              />
              {p.name}
            </label>
          ))}
        </>


        <button type='button' onClick={toggleInput}>Adicionar novo provedor</button>
        {inputVisivel && (
          <div>
            <input ref={novoProvedorRef} type="text" placeholder="Digite o novo provedor" />
            <input type='button' onClick={() => { criarNovoProvedor('' + novoProvedorRef.current?.value) }} value={"Enviar"} />
          </div>
        )}

        <label className={styles.label}>Selecione o tipo do serviço</label>
        <>
          {tipos.map((p) => (
            <label key={p._id}>
              <input
                type="radio"
                name="tipo"
                value={p._id}
                onChange={() => { setTipo(p) }}
              />
              {p.typename}
            </label>
          ))}
        </>

        <button type='button' onClick={toggleInputType}>Adicionar novo tipo de serviço</button>
        {inputTipoVisivel && (
          <div>
            <input ref={novoTypeRef} type="text" placeholder="Digite o novo tipo" />
            <button onClick={() => { criarNovoTipo('' + novoTypeRef.current?.value) }} type='button' >Enviar</button>
          </div>
        )}


        <label className={styles.label}>Status do serviço</label>

        <form>
          <input
            type="checkbox"
            id="planned"
            name="status"
            value="planned"
            checked={status === "planned"}
            onChange={(event) => setStatus(event.target.value)}
          />
          <label htmlFor="planned"> Planejado </label>
          <input
            type="checkbox"
            id="ongoing"
            name="status"
            value="ongoing"
            checked={status === "ongoing"}
            onChange={(event) => setStatus(event.target.value)}
          />
          <label htmlFor="ongoing"> Pendente </label>
          <input
            type="checkbox"
            id="finished"
            name="status"
            value="finished"
            checked={status === "finished"}
            onChange={(event) => setStatus(event.target.value)}
          />
          <label htmlFor="finished"> Finalizado </label>
        </form>

        <label className={styles.label}>Data inicial</label>

        <input
          type="datetime-local"
          id="dataInicial"
          name="dataInicial"
          value={dataInicial}
          onChange={(event) => setDataInicial(event.target.value)}
        />

        <label className={styles.label}>Data Final</label>
        <input
          type="datetime-local"
          id="dataFinal"
          name="dataFinal"
          value={dataFinal}
          onChange={(event) => setDataFinal(event.target.value)}
        />

        <div>
          <h3>Campos customizados do serviço:</h3>
          {customInputs.map((customInput, index) => (
            <div key={index}>
              <label>Nome do campo:</label>
              <input ref={customInput.nameInputRef} type='text' onChange={(event) => {
                const newCustomInputs = [...customInputs];
                newCustomInputs[index] = { ...customInput, name: event.target.value };
                setCustomInputs(newCustomInputs);
              }} />
              <label>Tipo do campo:</label>
              <input ref={customInput.typeInputRef} type='text' onChange={(event) => {
                const newCustomInputs = [...customInputs];
                newCustomInputs[index] = { ...customInput, type: event.target.value };
                setCustomInputs(newCustomInputs);
              }} />
            </div>
          ))}

          <button type='button' onClick={() => {
            setCustomInputs([...customInputs, { name: '', type: '' }])
          }}>+</button>
        </div>

        <div className={styles.buttonDiv}>
          <button className={styles.button} type="submit">
            Enviar
          </button>
        </div>
      </form >
    </div >
  );
}
