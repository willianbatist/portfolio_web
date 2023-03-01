"use client"
import * as P from "./projects.style";
import Image, { StaticImageData } from "next/image";
import Freezeframe from 'freezeframe';
import { useEffect } from "react";


interface Props {
  img: StaticImageData[],
  name: string,
  tag: string[],
}


export default function ProjectCard({img, name, tag}: Props) {

  useEffect(() => {
    new Freezeframe({
      selector: '.gif',
      trigger: 'hover',
      overlay: false, // false =  disable play icon on image container.
      responsive: false,
      warnings: false
    });
  })

  return(
    <P.ProjectCard>
      <Image className="gif" src={img[0]} alt={name} width={246} height={148}/>
      <p>{tag[0]}<span>{` / `}</span>{tag[1]}</p>
    </P.ProjectCard>
  );
}