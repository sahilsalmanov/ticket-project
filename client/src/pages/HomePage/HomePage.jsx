import { useSelector } from "react-redux";
import Category from "../../components/Category/Category";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Slider } from "../../swiper/Swiper";
import "./homepage.scss";
import { Fragment } from "react";
export function HomePage() {
  const { categories } = useSelector((state) => state.categoryReducer);

  // 6 category
  // 3 data per category
  return (
    <>
      <Header />
      <section>
        {categories.length > 0 &&
          categories?.map(({ _id, type }) => (
            <Fragment key={_id}>
              <Category title={type} />
              <Slider id={_id} />
            </Fragment>
          ))}
      </section>
      <Footer />
    </>
  );
}
