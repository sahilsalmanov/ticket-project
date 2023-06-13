import { useSelector } from "react-redux";
import Category from "../../components/Category/Category";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Slider } from "../../swiper/Swiper";
import "./homepage.scss";
import { Fragment } from "react";
import HeaderOut from "../../components/Header/HeaderOut";
import Popular from "../../components/Popular/Popular";
export function HomePage() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const { categories } = useSelector((state) => state.categoryReducer);
  console.log("isloggen", isLoggedIn);

  // 6 category
  // 3 data per category
  return (
    <>
      {isLoggedIn ? <HeaderOut /> : <Header />}
      <section>
        {/* {categories.length > 0 &&
          categories?.map(({ _id, type }) => (
            <Fragment key={_id}>
              <Category title={type} />
              <Slider id={_id} />
            </Fragment>
          ))} */}
        <h2>Popular Now</h2>
        <Popular />
        {categories.length > 0 &&
          categories?.map(({ _id, type }) => (
            <Fragment key={_id}>
              <Category title={type.charAt(0).toUpperCase() + type.slice(1)} />
              <Slider id={_id} />
            </Fragment>
          ))}
      </section>
      <Footer />
    </>
  );
}
