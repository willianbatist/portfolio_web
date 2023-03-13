'use client'
import styled from "styled-components";


export const Title = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    text-transform: uppercase;
    color: #f9f9f9;
    font-weight: 400;
    font-size: 5em;
    display: flex;
    text-align: center;
    margin: 5px;
    font-family: 'TT Norms Pro', sans-serif;
    scroll-behavior: smooth;
  }

  span {
    margin-left: 15px;
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
    margin-top: 10px;
  }

  .Typewriterwrapper {
  }
  .Typewritercursor {
    margin-left: -15px;
  }

  @keyframes slide-bottom{0%{transform:translateY(0)}100%{transform:translateY(15px)}}
  a {
    animation: slide-bottom 2s ease-in-out infinite alternate 0.5s both;
    position: relative;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 2px;
    transition-duration: 0.5s;
    background-color: #375C80;
    color: #ffffff;
    font-family: 'TT Norms Pro', sans-serif;
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    border: none;
    border-radius: 40px;
    padding: 10px 80px;
    margin-top: 10px;
    cursor: pointer;
    z-index: 1;
  }

  a:hover {
    animation: none;
  }

  @media (max-width: 950px) {
    h1 {
      font-size: 4em;
    }

    h3 {
      font-size: 1.7em;
    }

    a {
      font-size: 15px;
    }
  }

  @media (max-width: 750px) {
    h1 {
      font-size: 3em;
    }

    h3 {
      font-size: 1.5em;
    }

    a {
      font-size: 13px;
    }
  }

  @media (max-width: 580px) {
    h1 {
      flex-direction: column;
    }
  }

  @media (max-width: 440px) {
    h1 {
      font-size: 2.5em;
    }

    h3 {
      font-size: 1.3em;
      padding-left: 7px;
      padding-right: 7px;
    }

    a {
      font-size: 11px;
    }
  }
`;