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
            <a href="#sobre-mim" onClick={() => setMenuIsVisible(false)}>Sobre mim</a>
          </li>
          <li>
            <a href="#tecnologias" onClick={() => setMenuIsVisible(false)}>Tecnologias</a>
          </li>
          <li>
            <a href="#projetos" onClick={() => setMenuIsVisible(false)}>Projetos</a>
          </li>
          <li>
            <a href="#contatos" onClick={() => setMenuIsVisible(false)}>Contato</a>
          </li>
        </ul>
      </nav>
      <div onClick={() => setMenuIsVisible(false)}>
      </div>
    </M.MenuMobile>
  );
}