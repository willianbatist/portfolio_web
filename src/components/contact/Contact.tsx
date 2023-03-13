"use client"
import Link from "next/link";
import Image from "next/image";
import * as C from "./contact.style";
import linkedin from "../../assets/linkedin.svg";
import email from "../../assets/email.svg";
import github from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";


export default function Contact() {
  return(
    <C.Contact>
      <hr></hr>
      <div className="heading">
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
          <Link href="mailto:willian.alves.b15@gmail.com" target="_blank">
            <Image src={email} alt="icone do email" width={50} height={50}/>
          </Link>
        </li>
        <li>
          <Link href="https://api.whatsapp.com/send?phone=5527997366918&text=" target="_blank">
            <Image src={whatsapp} alt="icone do email" width={50} height={50}/>
          </Link>
        </li>
      </ul>
      <p>Gostou <span>?</span> Bora trocar uma ideia <span>!</span></p>
      <hr></hr>
    </C.Contact>
  );
}
