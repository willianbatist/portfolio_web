"use client"
import { SetStateAction, useContext, useState } from "react";
import { AppContext } from "../../contexts/contextProvider";
import * as H from "./header.style";


export default function Header() {
  const { menuIsVisible, setMenuIsVisible } = useContext(AppContext);

  const handleMenu = (setState: { (value: SetStateAction<boolean>): void; (arg0: boolean): void; }) => {
    if (menuIsVisible === false) {
      setState(true)
    } else {
      setState(false)
    }
  }

  return(
    <H.Header isVisible={menuIsVisible}>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#sobre-mim">Sobre mim</a>
          </li>
          <li>
            <a href="#tecnologias">Tecnologias</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
          <li>
            <a href="#contatos">Contato</a>
          </li>
        </ul>
      </nav>
      <div className="mobile-menu-icon" onClick={() => handleMenu(setMenuIsVisible)}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
      </div>
    </H.Header>
  )
}