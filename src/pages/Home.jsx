import { useEffect, useState } from "react";
import Section from "../components/Section";
import Card from "../components/Card";

export default function Home() {
  
  const [eletronicos, setEletronicos] = useState([])
  const [masculinas, setMasculinas] = useState([])
  const [joias, setJoias] = useState([])
  const API = import.meta.env.VITE_GITHUB_API

  
  useEffect(() => {
    fetch(`${API}electronics`)
    .then(res => res.json())
    .then(data => setEletronicos(data))
  }, [])

  useEffect(() => {
    fetch(`${API}men's clothing`)
    .then(res => res.json())
    .then(data => setMasculinas(data))
  }, [])

  useEffect(() => {
    fetch(`${API}jewelery`)
    .then(res => res.json())
    .then(data => setJoias(data))
  }, [])
  

  

  return (
    <div>
        <h2 className="text-2xl font-bold mb-4">Bem-vindo ao Fiap Comerce!</h2>
        <Section titulo="Eletrônico" >
          {eletronicos.map(pegaItem => (
             <Card {...pegaItem} />
          ))}
        </Section>
        <Section titulo="Jóias" >
          {joias.map(pegaItem => (
             <Card {...pegaItem} />
          ))}
        </Section>
        <Section titulo="Roupas Masculinas" >
          {masculinas.map(pegaItem => (
             <Card {...pegaItem} />
          ))}
        </Section>
    </div>
  );
}