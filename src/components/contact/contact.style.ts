"use client"
import styled from "styled-components";

export const Contact = styled.section`
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .heading {
    margin-top: 20px;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
    width: 270px;
  }

  li {
    transition: 0.3s;
  }

  li:hover {
    margin-top: -5px;
  }

  h4 {
    font-family: 'TT Norms Pro',sans-serif;
    text-transform: initial;
    color: #ffffff;
    font-weight: 10;
    font-size: 25px;
    text-align: center;
    -webkit-letter-spacing: -0.02em;
    -moz-letter-spacing: -0.02em;
    -ms-letter-spacing: -0.02em;
    letter-spacing: -0.02em;
  }

  h2 {
    text-transform: uppercase;
    color: #65ffd1;
    font-weight: 600;
    font-size: 45px;
    text-align: center;
    -webkit-letter-spacing: -0.02em;
    -moz-letter-spacing: -0.02em;
    -ms-letter-spacing: -0.02em;
    letter-spacing: -0.02em;
    font-family: 'TT Norms Pro',sans-serif;
  }

  hr {
    margin-top: 40px;
    width: 60%;
    border-radius: 50px;
    border: none;
    height: 2px;
    margin-bottom: 10px;
    background-image: linear-gradient(to right, transparent, #65ffd1, transparent);
  }

  p {
    font-family: 'TT Norms Pro',sans-serif;
    text-transform: initial;
    color: #ffffff;
    font-size: 20px;
    text-align: center;
    -webkit-letter-spacing: -0.02em;
    -moz-letter-spacing: -0.02em;
    -ms-letter-spacing: -0.02em;
    letter-spacing: -0.02em;
  }

  span {
    color: #65ffd1;
  }
`;