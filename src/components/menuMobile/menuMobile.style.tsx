'use client'
import styled, { css } from "styled-components";

interface Props {
    isVisible: boolean;
  }

export const MenuMobile = styled.section<Props>`
  display: none;
  position: fixed;
  width: -webkit-fill-available;
  height: 100vh;
  transition: 0.7s;

  nav {
    width: 50%;
    background-color: #09031B;
    z-index: 7;
  }

  div {
    width: 50%;
    height: 100vh;
    background-color: black;
    opacity: 0.5;
    z-index: 5;
  }

  ul {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: #ffffff;
    transition: 0.7s;
  }
  a:hover {
    color: #65ffd1;
  }

  ${({ isVisible }) => isVisible && css`
    display: flex;
  `}

  @keyframes menuLeft {
    0% {
      menu-left: -80%;
    }
    100% {
      menu-left: 0%
    }
  }
`;