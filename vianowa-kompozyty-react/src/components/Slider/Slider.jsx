import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Slide, SlideImage, StyledSwiper } from "./Slider.styled";

export const Slider = () => {
  return (
    <StyledSwiper
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
    >
      <Slide>
        <SlideImage src="/img/balie1/balia-1.jpg" alt="Баня 1" />
      </Slide>
      <Slide>
        <SlideImage src="/img/balie1/balia-2.jpg" alt="Баня 2" />
      </Slide>
      <Slide>
        <SlideImage src="/img/balie1/balia-3.webp" alt="Баня 3" />
      </Slide>
      <Slide>
        <SlideImage src="/img/balie1/balia-1.jpg" alt="Баня 1" />
      </Slide>
      <Slide>
        <SlideImage src="/img/balie1/balia-2.jpg" alt="Баня 2" />
      </Slide>
      <Slide>
        <SlideImage src="/img/balie1/balia-3.webp" alt="Баня 3" />
      </Slide>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </StyledSwiper>
  );
};
