import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./popular.scss";
import { useSelector } from "react-redux";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Link } from "react-router-dom";
export default function Popular() {
  const { events } = useSelector((state) => state.categoryReducer);
  const popular = events.filter((q) => q.popular);
  return (
    <Swiper
      className="popular__slider"
      spaceBetween={15}
      autoplay={{
        delay: 1800,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {popular.map((item) => {
        const img = item.imagePath.split("3000").join("3000/");
        return (
          <SwiperSlide key={item._id} style={{ transform: "scale(1.2)" }}>
            <Link to={`/details/${item._id}`}>
              <img
                src={img}
                style={{ objectFit: "contain", transform: "scale(1.2)" }}
              />
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
