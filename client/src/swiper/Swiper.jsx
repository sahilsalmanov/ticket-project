import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "./slider.scss";
import test from "../../assets/img/test.png";
export const Slider = ({ delay }) => {
  return (
    <div>
      <Swiper
        spaceBetween={15}
        slidesPerView={3}
        autoplay={{
          delay: delay,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <img src={test} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={test} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={test} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={test} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={test} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
