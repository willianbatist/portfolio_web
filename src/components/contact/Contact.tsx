"use client"
import Link from "next/link";
import Image from "next/image";
import * as C from "./contact.style";
import linkedin from "../../assets/linkedin.svg";
import email from "../../assets/email.svg";
import github from "../../assets/github.svg";

export default function Contact() {
  return(
    <C.Contact>
      <hr></hr>
      <div>
        <h4>meus</h4>
        <h2>CONTATOS</h2>
      </div>
      <ul>
        <li>
          <Link href="https://www.linkedin.com/in/willian-alves-batista/" target="_blank">
            <Image src={linkedin} alt="icone do linkedin" width={50} height={50}/>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/willianbatist" target="_blank">
            <Image src={github} alt="icone do github" width={50} height={50}/>
          </Link>
        </li>
        <li>
          <Link href="willian.alves.b15@gmail.com" target="_blank">
            <Image src={email} alt="icone do email" width={50} height={50}/>
          </Link>
        </li>
      </ul>
      <hr></hr>
    </C.Contact>
  );
}
