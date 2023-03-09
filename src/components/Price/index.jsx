import React from "react";

import {
  Row,
  Seamaster,
  TitleProduct,
  Text,
  CutPrice,
  ParcelaPrice,
} from "./styles"

const Price = ({ title, subtitle, cutPrice, parcelaPrice, valorTotal }) => {
  return (
    <main>
      <Seamaster>Seamaster</Seamaster>
      <TitleProduct>
        {title}
        <br />
        {subtitle}
      </TitleProduct>
      <Text>
        apenas <strong>12x sem juros </strong>de:
      </Text>
      <Row>
        <CutPrice>
          <s>R${cutPrice}</s>
        </CutPrice>
        <ParcelaPrice>R$ {parcelaPrice}</ParcelaPrice>
      </Row>
      <Text>
        Ou <strong>R$ {valorTotal} à vista</strong>
      </Text>
    </main>
  )
}

export { Price }
