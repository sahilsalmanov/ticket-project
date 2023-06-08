import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import test from "../../assets/img/Rectangle 12.png";
export const Slider = () => {
  return (
    <div className="">
      <Swiper
        spaceBetween={15}
        slidesPerView={4}
        autoplay={{
          delay: 2500,
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
        <SwiperSlide>
          <img src={test} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
