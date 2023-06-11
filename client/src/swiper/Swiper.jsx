import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "./slider.scss";
import { PropTypes } from "prop-types";
import test from "../../assets/img/test.png";
import ContentOverlay from "./ContentOverlay";
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
