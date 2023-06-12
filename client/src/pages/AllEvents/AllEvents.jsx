import { useSelector } from "react-redux";
import Cards from "../../components/Cards/Cards";

export default function AllEvents() {
  const { events } = useSelector((state) => state.categoryReducer);
  return (
    <>
      {events.map((event) => {
        return <Cards key={event._id} {...event} />;
      })}
    </>
  );
}
