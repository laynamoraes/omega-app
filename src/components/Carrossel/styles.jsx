import styled from "styled-components";

export const CarrosselContainer = styled.div`
  width: 100%;
  max-width: 450px;
  margin: 5px;
  position: relative;
`

export const ImageMain = styled.img`
  width: 100%;
  height: auto;
  max-height: 540px;
  object-fit: contain;
  cursor: pointer;
`

export const ThumbsContainer = styled.div`
  width: 100%;
  height: auto;
  max-height: 90px;
  background-color: red;
  display: flex;
  // gap: 0.5rem;
  align-itens: center;
  justify-content: center;
`

export const ImageThumbs = styled.img`
  width: 100%;
  height: auto;
  max-height: 90px;
  border: 1px solid #c4c4c4;
  border-radius: 6px;
  object-fit: contain;
  cursor: pointer;
`