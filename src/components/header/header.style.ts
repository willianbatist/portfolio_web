"use client"
import styled, { css } from "styled-components";


interface Props {
  isVisible: boolean;
}


export const Header = styled.header<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 119px;
  position: fixed;
  z-index: 6;
  width: -webkit-fill-available;
  width: 20%;
  margin-left: 80%;


  ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 580px;
    height: 39px;
    background-color: rgba(255, 255, 255, 0.401);
    padding: 10px 20px;
    border: none;
    border-radius: 40px;
  }

  a {
    display: inline-block;
    margin: 0 15px;
    color: #ffffff;
    text-decoration: none;
  }

  a:hover  {
    color: #5ad5e4;
    transition: 0.7s;
  }

  .mobile-menu-icon {
    display: none;
  }

  @media(max-width: 750px) {
    justify-content: flex-end;

    nav {
      display: none;
    }

    .mobile-menu-icon {
      display: block;
      cursor: pointer;
      margin-right: 20px;
      z-index: 20 !important;
    }

    .line1 {
      width: 32px;
      height: 2px;
      background-color: rgb(255, 255, 255);
      margin: 8px;
      transition: 0.7s;
    }

    .line2 {
      width: 32px;
      height: 2px;
      background-color: rgb(255, 255, 255);
      margin: 8px;
    }

    .line3 {
      width: 32px;
      height: 2px;
      background-color: rgb(255, 255, 255);
      margin: 8px;
      transition: 0.7s;
    }
  }

  ${({ isVisible }) => isVisible && css`
  .line1 {
    transform: rotate(-45deg) translate(-8px, 8px);
    }
    .line2 {
      opacity: 0;
    }
    .line3 {
      transform: rotate(45deg) translate(-5px, -7px);
    }

    .mo {
      position: absolute;
      margin-top: 100px;
      background-color: black;
      width: -webkit-fill-available;
      height: -webkit-fill-available;
    }
  `}
`;
