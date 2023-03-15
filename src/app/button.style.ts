"use client"
import styled, {css} from "styled-components";

interface Props {
  isVisible: boolean
}

export const Button = styled.div<Props>`
  display: none;
  width: 40px;
  height: 40px;
  margin-right: 32px;
  margin-bottom: 32px;
  border-radius: 12px;
  box-shadow: none;
  color: rgb(55, 92, 128);
  background-color: rgb(55, 92, 128);
  position: fixed;
  outline: none;
  bottom: 0px;
  right: 0px;
  cursor: pointer;
  text-align: center;
  border: 2px solid currentcolor;

  ${({ isVisible }) => isVisible && css`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

