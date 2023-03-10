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
            <a href="#about">Sobre mim</a>
          </li>
          <li>
            <a href="#technologies">Tecnologias</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
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