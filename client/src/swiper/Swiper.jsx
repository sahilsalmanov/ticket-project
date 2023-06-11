import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "./slider.scss";
import { PropTypes } from "prop-types";
import test from "../../assets/img/test.png";
import ContentOverlay from "./ContentOverlay";
export const Slider = ({ delay }) => {
  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  };
  return (
    <div>
      <Swiper
        breakpoints={breakpoints}
        spaceBetween={15}
        autoplay={{
          delay: delay,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <div className="overlay">
            <ContentOverlay />
          </div>
          <img src={test} />
        </SwiperSlide>
        <SwiperSlide>
          <div className="overlay">
            <ContentOverlay />
          </div>
          <img src={test} />
        </SwiperSlide>
        <SwiperSlide>
          <div className="overlay">
            <ContentOverlay />
          </div>
          <img src={test} />
        </SwiperSlide>
        <SwiperSlide>
          <div className="overlay">
            <ContentOverlay />
          </div>
          <img src={test} />
        </SwiperSlide>
        <SwiperSlide>
          <div className="overlay">
            <ContentOverlay />
          </div>
          <img src={test} />
        </SwiperSlide>
        <SwiperSlide>
          <div className="overlay">
            <ContentOverlay />
          </div>
          <img src={test} />
        </SwiperSlide>
        <SwiperSlide>
          <div className="overlay">
            <ContentOverlay />
          </div>
          <img src={test} />
        </SwiperSlide>
        <SwiperSlide>
          <div className="overlay">
            <ContentOverlay />
          </div>
          <img src={test} />
        </SwiperSlide>
        <SwiperSlide>
          <div className="overlay">
            <ContentOverlay />
          </div>
          <img src={test} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
Slider.propTypes = {
  delay: PropTypes.Number,
};
