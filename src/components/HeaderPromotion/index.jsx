import React from "react";

import { Wrapper, TextPromotion } from "./styles";

const HeaderPromotion = () => {
  return (
    <Wrapper>
      <TextPromotion>
        <strong>PROMOÇÃO 50% OFF+FRETE GRÁTIS</strong>
        <br />
        <strong>DESCONTO </strong>
        VÁLIDO SOMENTE PARA ESSA
        <strong> SEMANA !</strong>
      </TextPromotion>
    </Wrapper>
  )

}

export { HeaderPromotion }