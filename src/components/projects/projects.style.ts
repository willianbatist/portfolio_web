"use client"
import styled from "styled-components";


export const Projects = styled.section`
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
  padding: 20px;

  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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


export const ProjectCard = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 15px;
  width: 30%;

  a {
    text-decoration: none;
    color: #ffffff;
    text-align: center;
  }

  span {
    color: #65ffd1;
  }

  .img-move, .img-static {
    border-radius: 10px;
    -webkit-box-shadow: 3px 2px 40px 3px rgba(0,0,0,1);
    -moz-box-shadow: 3px 2px 40px 3px rgba(0,0,0,1);
    box-shadow: 3px 2px 40px 3px rgba(0,0,0,1);
  }

  .img-move {
    display: none;
    /* margin-left: 39px; */
  }
  &&:hover {
    .img-static {
      display: none;
    }
    .img-move {
    display: block;
    width: 256px;
    height: 158px;
    transition: ease 0.5s;
    }
  }
`;