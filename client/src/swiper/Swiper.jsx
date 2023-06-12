/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "./slider.scss";
import ContentOverlay from "./ContentOverlay";
import { breakpoints } from "../constants/consts";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export const Slider = ({ id }) => {
  const { events } = useSelector((state) => state.categoryReducer);
  const filtered = events.filter((q) => q.category._id === id);
  const delay = Math.floor(Math.random() * 1500 + 2000);

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
        {filtered.map((item) => {
          const img = item.imagePath.split("3000").join("3000/");
          return (
            <SwiperSlide key={item._id}>
              <Link to={`/details/${item._id}`}>
                <div className="overlay">
                  <ContentOverlay item={item} />
                </div>
                <img src={img} />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
