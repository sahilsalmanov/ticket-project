import Category from "../../components/Category/Category";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Slider } from "../../swiper/Swiper";
import "./homepage.scss";
export function HomePage() {
  return (
    <>
      <Header />
      <section>
        <Category title="Test" />
        <Slider delay={3000} />
        <Category title="Test" />
        <Slider delay={2000} />
        <Category title="Test" />
        <Slider delay={2500} />
        <Category title="Test" />
        <Slider delay={4000} />
      </section>
      <Footer/>
    </>
  );
}
