import { useSelector } from "react-redux";
import Cards from "../../components/Cards/Cards";
import "../../components/cards/cards.scss"
import InnerNav from "../../components/Nav/InnerNav";
import Footer from "../../components/Footer/Footer";
export default function AllEvents() {
  const { events } = useSelector((state) => state.categoryReducer);
  return (
  <>
   <InnerNav/>
   <div className="container">
   {events.map((event) => {
     return <Cards key={event._id} {...event} />;
   })}
 </div>
 <Footer/>
  </>
  );
}
