'use client'
import styled from "styled-components";


export const Title = styled.section`
  min-height: 100vh;
  border: 2px solid yellow;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    text-transform: uppercase;
    color: #f9f9f9;
    font-weight: 400;
    font-size: 5em;
    text-align: center;
    margin: 5px;
    font-family: 'TT Norms Pro', sans-serif;
    scroll-behavior: smooth;
  }

  span {
    font-weight: 600;
    color: #65ffd1;
    font-family: 'TT Norms Pro', sans-serif;
    scroll-behavior: smooth;
  }

  h3 {
    color: #ffffff;
    font-weight: 300;
    font-size: 2em;
    text-align: center;
  }
`;