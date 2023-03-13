"use client"
import styled from "styled-components";


export const About = styled.section`
  @media (max-width: 600px) {
    padding: 100px 10px 100px 10px;
  }

  padding: 100px;

  h4 {
    text-transform: initial;
    color: #ffffff;
    font-weight: 300;
    font-size: 25px;
    text-align: center;
    letter-spacing: -0.02em;
  }

  h2 {
    text-transform: uppercase;
    color: #65ffd1;
    font-weight: 600;
    font-size: 45px;
    text-align: center;
    letter-spacing: -0.02em;
  }

  p {
    color: #ffffff;
    font-family: 'Poppins', sans-serif;
    font-weight: 10;
    font-size: 20px;
    text-align: left;
    margin-bottom: 15px;
  }
`;


export const Heading = styled.div`
  width: 100%;
`;

export const ContainerText = styled.div`
  padding: 0 10px;
  margin-top: 15px;
`;