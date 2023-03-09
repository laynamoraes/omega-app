import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
  background: #00ac69;
  color: #ffffff;
  border: none;
  border-radius: 1.5rem;

  height: 50px;
  width: 100%;
  max-width: 330px;
  margin: 10px;
  padding: 10px 20px;
  position: relative;

  font-size: 1.1rem;
  font-weight: 700;

  transition: all 0.5s ease-out;

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }


  ${({ variant }) =>
    variant !== "primary" &&
    css`
      background: #000000;
    `}
`