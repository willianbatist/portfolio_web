"use client"
import * as P from "./projects.style";
import Image, { StaticImageData } from "next/image";


interface Props {
  img: StaticImageData[],
  name: string,
  tag: string[],
}


export default function ProjectCard({img, name, tag}: Props) {
  return(
    <P.ProjectCard>
      <Image className="img-static" src={img[1]} alt={name} width={246} height={148}/>
      <Image className="img-move" src={img[0]} alt={name} width={246} height={148}/>
      <p>{tag[0]}<span>{` / `}</span>{tag[1]}</p>
    </P.ProjectCard>
  );
}