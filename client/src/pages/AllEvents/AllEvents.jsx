import { useSelector } from "react-redux";
import Cards from "../../components/Cards/Cards";
import "../../components/cards/cards.scss"
export default function AllEvents() {
  const { events } = useSelector((state) => state.categoryReducer);
  return (
    <div className="container">
      {events.map((event) => {
        return <Cards key={event._id} {...event} />;
      })}
    </div>
  );
}
