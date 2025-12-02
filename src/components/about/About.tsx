"use client"
import * as A from "./about.style";


export default function About() {
  return (
    <A.About id="sobre-mim">
      <A.Heading>
        <h4>Quem sou eu?</h4>
        <h2>Sobre mim</h2>
      </A.Heading>
      <A.ContainerText>
        <p>
          Sou Willian Alves Batista, desenvolvedor Full Stack com dois anos de experiência prática,
          formado pela Trybe, onde adquiri conhecimentos técnicos abrangentes para desenvolvimento
          web completo. Minha trajetória inclui graduação em Arquivologia, experiência que me
          introduziu à Ciência da Informação e despertou meu interesse pela programação.
        </p>
        <p>
          Minha paixão pela tecnologia começou quando ganhei meu primeiro computador na
          adolescência, ver a interface e como ela reagia com a minha interação, me deixou fascinado
          por tecnologia. Hoje dedico a aprender sobre novas tecnologias e aplicá-las em meu
          trabalho. Acredito que a tecnologia é uma das principais ferramentas para o progresso
          humano e estou sempre ansioso para ver o que ela trará no futuro.
        </p>
        <p>
          Tenho conhecimento e experiência em JavaScript, TypeScript, Jest, Docker, Node.js,
          Nest.js, Express, React, Next.js, MySQL, MongoDB, Arquitetura Rest, Restful, programação
          orientada a objetos, teste unitário e teste automatizado. Busco sempre novas tecnologias e
          novas linguagens, no momento estou dando os primeiros passos em Python.
        </p>
      </A.ContainerText>
    </A.About>
  );
}