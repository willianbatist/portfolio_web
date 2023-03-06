'use client'
import styled from "styled-components";


export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 119px;
  position: fixed;
  width: -webkit-fill-available;


  ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 514px;
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
`;
