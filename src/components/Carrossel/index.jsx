import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Thumbs } from "swiper"
import "swiper/css"
import "swiper/css/bundle"
import "swiper/css/thumbs"


import {
  CarrosselContainer,
  ImageMain,
  ThumbsContainer,
  ImageThumbs
} from "./styles"

const Carrossel = ({image1, image2, image3, image4}) => {

  const [activeThumb, setActiveThumb] = useState();

  return (
    <CarrosselContainer>
      <Swiper
        modules={[Navigation, Thumbs]}
        slidesPerView={1}
        navigation={true}
        thumbs={{ swiper: activeThumb }}
        loop={true}
      >
        <SwiperSlide>
          <ImageMain src={image1} alt="Imagem" />
        </SwiperSlide>
        <SwiperSlide>
          <ImageMain src={image2} alt="Imagem" />
        </SwiperSlide>
        <SwiperSlide>
          <ImageMain src={image3} alt="Imagem" />
        </SwiperSlide>
        <SwiperSlide>
          <ImageMain src={image4} alt="Imagem" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setActiveThumb}
        watchSlidesProgress
        modules={[Navigation, Thumbs]}
        slidesPerView={4}
        spaceBetween={30}
        navigation
        loop="true"
      >
        <ThumbsContainer>
          <SwiperSlide>
            <ImageThumbs src={image1} alt="Imagem" />
          </SwiperSlide>
          <SwiperSlide>
            <ImageThumbs src={image2} alt="Imagem" />
          </SwiperSlide>
          <SwiperSlide>
            <ImageThumbs src={image3} alt="Imagem" />
          </SwiperSlide>
          <SwiperSlide>
            <ImageThumbs src={image4} alt="Imagem" />
          </SwiperSlide>
        </ThumbsContainer>
      </Swiper>
    </CarrosselContainer>
  )
}

export { Carrossel }
