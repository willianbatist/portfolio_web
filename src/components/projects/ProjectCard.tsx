"use client"
import * as P from "./projects.style";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";


interface Props {
  img: StaticImageData[],
  name: string,
  tag: string[],
  link: string,
}


export default function ProjectCard({img, name, tag, link}: Props) {

  return(
    <P.ProjectCard>
      <Link className="a" href={link} target="_blank">
        <Image className="img-static" src={img[1]} alt={name} width={246} height={148}/>
        <Image className="img-move" src={img[0]} alt={name} width={246} height={148}/>
        <h3>{name}</h3>
        <p>{tag[0]}<span>{` / `}</span>{tag[1]}</p>
      </Link>
    </P.ProjectCard>
  );
}