"use client"
import * as T from "./title.style";
import Image from "next/image";
import copo from "../../assets/copo.png";


export default function Title() {
  return(
    <T.Title>
      <Image
        src={copo}
        alt="foto de um copo"
        width={200}
        height={175}
      />
      <h1>
        {`OI, EU SOU O `}
        <span>WILLIAN</span>  
      </h1>
      <h3>Desenvolvedor Web Full Stack</h3>
      <a href="#about">Saiba mais</a> 
    </T.Title>
  );
}