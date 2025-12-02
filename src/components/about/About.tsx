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
          Sou Willian Alves Batista, desenvolvedor Full Stack com mais de dois anos de experiência
          prática no mercado, formado pela Trybe, onde adquiri uma base sólida em desenvolvimento
          web completo. Minha trajetória acadêmica inclui graduação em Arquivologia, área que me
          aproximou da Ciência da Informação e reforçou meu interesse pela tecnologia.
        </p>
        <p>
          Minha relação com a tecnologia começou na adolescência, quando tive meu primeiro contato
          com computadores e descobri o impacto que interfaces e interações digitais podem gerar na
          vida das pessoas. Desde então, mantenho-me em constante evolução, buscando aprimorar
          minhas habilidades e acompanhar os avanços do setor.
        </p>
        <p>
          Possuo experiência sólida em JavaScript, TypeScript, Jest, Docker, Node.js, Nest.js,
          Express, React, Next.js, MySQL e MongoDB, além de domínio de arquiteturas REST/RESTful,
          programação orientada a objetos e testes automatizados. Atualmente, estou ampliando meu
          repertório técnico por meio de cursos de C# e Cibersegurança, fortalecendo minha atuação e
          me preparando para novos desafios profissionais.
        </p>
      </A.ContainerText>
    </A.About>
  );
}
