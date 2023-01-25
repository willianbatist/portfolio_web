"use client"
import * as T from "./technologies.style";
import Image from "next/image";


interface Props {
  img: string,
  name: string,
}


export default function TechnologyCard({ img, name }: Props) {
  return(
    <T.TechnologyCard>
      <Image src={img} alt={name} width={50} height={50}/>
      <p>{name}</p>
    </T.TechnologyCard>
  );
}
