"use client"
import styled from "styled-components";


export const Technologies = styled.section`
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  hr {
    margin-top: 40px;
    width: 60%;
    border-radius: 50px;
    border: none;
    height: 2px;
    margin-bottom: 10px;
    background-image: linear-gradient(to right, transparent, #65ffd1, transparent);
  }
`;


export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    font-family: 'TT Norms Pro', sans-serif;
    text-transform: initial;
    color: #ffffff;
    font-weight: 10;
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
    font-family: 'TT Norms Pro', sans-serif;
  }
`;

export const Skills = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 15px;
`;

export const TechnologyCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;


  background: #efe9e930;
  backdrop-filter: blur(3px);
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  text-align: center;
  font-weight: 600;
  font-style: italic;


  &:hover {
    background-color: #efe9e954;
    transition: 0.7s;
  }

  img {
    overflow-clip-margin: content-box;
    overflow: clip;
    width: 130px;
  }

  p {
    color: white;
    margin-top: 15px;
  }
`;