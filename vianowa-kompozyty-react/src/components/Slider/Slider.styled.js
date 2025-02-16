import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

// Стили для контейнера слайдера
export const StyledSwiper = styled(Swiper)`
  width: 100%;
  border: 2px solid var(--accent); /* Левый акцентный бордер */
  border-radius: 10px;

  .swiper-pagination {
    bottom: 10px;
  }

  .swiper-pagination-bullet {
    background-color: #ff8c00;
  }

  .swiper-pagination-bullet-active {
    background-color: var(--accent);
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: white;
  }

  /* Для изменения стрелок */
  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 24px;
  }
`;

// Стили для слайдов
export const Slide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Стили для изображений
export const SlideImage = styled.img`
  width: 100%;
  height: 500px;
`;
