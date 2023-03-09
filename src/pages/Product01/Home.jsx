import React from "react"
import { Row } from "./styles"
import { Button } from "../../components/Button"
import { HeaderPromotion } from "../../components/HeaderPromotion"
import { LogoRed } from "../../components/LogoRed"
import { GlobalStyle } from "../../styles/global"
import { Carrossel } from "../../components/Carrossel"
import { Price } from "../../components/Price"

const Home = () => {
  return (
    <div>
      <GlobalStyle />
      <HeaderPromotion />
      <LogoRed />
      <Row>
        <Carrossel
          image1="https://cdn.shopify.com/s/files/1/0685/7965/5974/files/Imagen_Product_Original_01_d02bec1a-8769-4d16-bec0-ba9195de2488.png?v=1675102471"
          image2="https://cdn.shopify.com/s/files/1/0685/7965/5974/files/Imagen_Product_Original_02_d63ccabe-a077-4620-b39a-4dcac18da1cf.png?v=1675102471"
          image3="https://cdn.shopify.com/s/files/1/0685/7965/5974/files/Imagen_Product_Original_03_090372b1-9b97-4d18-9481-b800db4fd5b3.png?v=1675102471"
          image4="https://cdn.shopify.com/s/files/1/0685/7965/5974/files/product_04.png?v=1671491933"
        />
        <Price
          title="CO‑AXIAL MASTER EDIÇÃO 007"
          subtitle="+ ESTOJO PREMIUM DE LUXO"
          cutPrice="1.589,90"
          parcelaPrice="76,42"
          valorTotal="917,13"
        />
      </Row>
      <Button title="COMPRAR AGORA" />
      <br />
      <Button title="EU QUERO AGORA" variant="second" />
    </div>
  )
}

export default Home
