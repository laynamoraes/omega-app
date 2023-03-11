import React, { useState } from "react"
import {
  FaCreditCard,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcDinersClub,
} from "react-icons/fa"
import { SiPix } from "react-icons/si"
import { ImPriceTags } from "react-icons/im"
import HiperIcon from "../../assets/hipercard.svg"
import EloIcon from "../../assets/elo-icon.svg"

import {
  Row,
  Seamaster,
  TitleProduct,
  Text,
  CutPrice,
  ParcelaPrice,
  TextPay,
  ModalWrapper,
  ModalTitle,
  ModalSubtitle,
  ContainerPay,
  RowModalLight,
  RowModalDark,
  TextModalRight,
  TextModalLeft,
  TextCards,
  Cards,
  ImageCard,
  ButtonClose,
  ButtonGreen,
} from "./styles"
import "react-responsive-modal/styles.css"
import { Modal } from "react-responsive-modal"

const Price = ({
  title,
  subtitle,
  cutPrice,
  parcelaPrice,
  valorTotal,
  valor2x,
  valor3x,
  valor4x,
  valor5x,
  valor6x,
  valor7x,
  valor8x,
  valor9x,
  valor10x,
  valor11x,
  valor12x,
  valorPix,
}) => {
  const [open, setOpen] = useState(false)

  const onOpenModal = () => setOpen(true)
  const onCloseModal = () => setOpen(false)

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
      <TextPay onClick={onOpenModal}>Ver opções de pagamento</TextPay>

      <Modal open={open} onClose={onCloseModal} center>
        <ModalWrapper>
          <ModalTitle>Formas de Pagamento</ModalTitle>
          <ContainerPay>
            <FaCreditCard />
            <ModalSubtitle>Cartão de crédito</ModalSubtitle>
          </ContainerPay>
          <ContainerPay>
            <SiPix />
            <ModalSubtitle>Pix</ModalSubtitle>
          </ContainerPay>
          <div id="credito-pay">
            <RowModalLight>
              <TextModalLeft>
                <strong>1x</strong> de <strong>R$ {valorTotal} </strong>sem
                juros
              </TextModalLeft>
              <TextModalRight>
                Total: <strong>R$ {valorTotal}</strong>
              </TextModalRight>
            </RowModalLight>
            <RowModalDark>
              <TextModalLeft>
                <strong>2x</strong> de <strong>R$ {valor2x} </strong>sem juros
              </TextModalLeft>
              <TextModalRight>
                Total: <strong>R$ {valorTotal}</strong>
              </TextModalRight>
            </RowModalDark>
            <RowModalLight>
              <TextModalLeft>
                <strong>3x</strong> de <strong>R$ {valor3x} </strong>sem juros
              </TextModalLeft>
              <TextModalRight>
                Total: <strong>R$ {valorTotal}</strong>
              </TextModalRight>
            </RowModalLight>
            <RowModalDark>
              <TextModalLeft>
                <strong>4x</strong> de <strong>R$ {valor4x} </strong>sem juros
              </TextModalLeft>
              <TextModalRight>
                Total: <strong>R$ {valorTotal}</strong>
              </TextModalRight>
            </RowModalDark>
            <RowModalLight>
              <TextModalLeft>
                <strong>5x</strong> de <strong>R$ {valor5x} </strong>sem juros
              </TextModalLeft>
              <TextModalRight>
                Total: <strong>R$ {valorTotal}</strong>
              </TextModalRight>
            </RowModalLight>
            <RowModalDark>
              <TextModalLeft>
                <strong>6x</strong> de <strong>R$ {valor6x} </strong>sem juros
              </TextModalLeft>
              <TextModalRight>
                Total: <strong>R$ {valorTotal}</strong>
              </TextModalRight>
            </RowModalDark>
            <RowModalLight>
              <TextModalLeft>
                <strong>7x</strong> de <strong>R$ {valor7x} </strong>sem juros
              </TextModalLeft>
              <TextModalRight>
                Total: <strong>R$ {valorTotal}</strong>
              </TextModalRight>
            </RowModalLight>
            <RowModalDark>
              <TextModalLeft>
                <strong>8x</strong> de <strong>R$ {valor8x} </strong>sem juros
              </TextModalLeft>
              <TextModalRight>
                Total: <strong>R$ {valorTotal}</strong>
              </TextModalRight>
            </RowModalDark>
            <RowModalLight>
              <TextModalLeft>
                <strong>9x</strong> de <strong>R$ {valor9x} </strong>sem juros
              </TextModalLeft>
              <TextModalRight>
                Total: <strong>R$ {valorTotal}</strong>
              </TextModalRight>
            </RowModalLight>
            <RowModalDark>
              <TextModalLeft>
                <strong>10x</strong> de <strong>R$ {valor10x} </strong>sem juros
              </TextModalLeft>
              <TextModalRight>
                Total: <strong>R$ {valorTotal}</strong>
              </TextModalRight>
            </RowModalDark>
            <RowModalLight>
              <TextModalLeft>
                <strong>11x</strong> de <strong>R$ {valor11x} </strong>sem juros
              </TextModalLeft>
              <TextModalRight>
                Total: <strong>R$ {valorTotal}</strong>
              </TextModalRight>
            </RowModalLight>
            <RowModalDark>
              <TextModalLeft>
                <strong>12x</strong> de <strong>R$ {valor12x} </strong>sem juros
              </TextModalLeft>
              <TextModalRight>
                Total: <strong>R$ {valorTotal}</strong>
              </TextModalRight>
            </RowModalDark>
            <TextCards>
              <strong>Cartões aceitos</strong>
            </TextCards>
            <Cards>
              <FaCcVisa fill="blue" />
              <FaCcMastercard />
              <ImageCard src={HiperIcon} />
              <FaCcAmex fill="#73C9EA" />
              <FaCcDinersClub fill="#004A97" />
              <ImageCard src={EloIcon} />
            </Cards>
          </div>
          <div id="pix-pay" style={{ display: "none" }}>
            <ParcelaPrice>R$ {valorPix}</ParcelaPrice>
            <Text>
              À vista com <strong>Pix</strong>
            </Text>
            <ButtonGreen>
              <ImPriceTags />
              12.02% OFF no Pix
            </ButtonGreen>
            <Text>
              O pagamento é instantâneo e não pode ser parcelado. Após a
              finalização da sua compra, será gerado um QR Code para pagamento.
            </Text>
          </div>
          <ButtonClose onClick={onCloseModal}>FECHAR</ButtonClose>
        </ModalWrapper>
      </Modal>
    </main>
  )
}

export { Price }
