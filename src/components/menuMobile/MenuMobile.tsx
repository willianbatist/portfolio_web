'use client'
import { useContext } from 'react';
import * as M from '../menuMobile/menuMobile.style';
import { AppContext } from '../../contexts/contextProvider';


export default function MenuMobile() {
  const { menuIsVisible, setMenuIsVisible } = useContext(AppContext);

  return(
    <M.MenuMobile id='menu-left' isVisible={menuIsVisible}>
      <nav>
        <ul>
          <li>
            <a href="#home" onClick={() => setMenuIsVisible(false)}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={() => setMenuIsVisible(false)}>Sobre mim</a>
          </li>
          <li>
            <a href="#technologies" onClick={() => setMenuIsVisible(false)}>Tecnologias</a>
          </li>
          <li>
            <a href="#projects" onClick={() => setMenuIsVisible(false)}>Projetos</a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuIsVisible(false)}>Contato</a>
          </li>
        </ul>
      </nav>
      <div onClick={() => setMenuIsVisible(false)}>
      </div>
    </M.MenuMobile>
  );
}