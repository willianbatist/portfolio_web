"use client"
import * as T from "./technologies.style";
import Image from "next/image";
import next from "../../assets/next.svg";
import { iconsTec } from "../../utils";
import TechnologyCard from "./TechnologyCard";


export default function Technologies() {
  return(
    <T.Technologies id="tecnologias">
      <T.Heading>
        <h4>Skills</h4>
        <h2>Habilidades</h2>
      </T.Heading>
      <T.Skills>
        { iconsTec.map((tec) => (
          <TechnologyCard
            key={tec.id}
            name={tec.name}
            img={tec.img}
          />
        )) }
      </T.Skills>
      <hr></hr>
    </T.Technologies>
  );
}