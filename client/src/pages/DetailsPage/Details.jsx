import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";
import "./details.scss";
import { useDispatch, useSelector } from "react-redux";

import {
  addToFavorites,
  removeFromFavorites,
} from "../../store/CategorySlice/categorySlice";

function Details() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { events, favorites } = useSelector((state) => state.categoryReducer);
  const event = events?.find((q) => q._id == id);
  const AddFav = (id) => {
    const check = favorites.find((q) => q._id == id);
    if (!check) {
      dispatch(addToFavorites(id));
    } else {
      dispatch(removeFromFavorites(id));
    }
  };
  const check = favorites.find((q) => q._id == id);
  return (
    <>
      <div className="event-details">
        <div className="event-info">
          <h2>{event?.name}</h2>
          <p className="event-date">Tarih: {event?.date}</p>
          <p className="event-description">Açıklama: {event?.description}</p>
          <p>Price range</p>
          <div className="ticket-section">
            <p className="ticket-heading">Bilet Fiyatları:</p>
            <ul className="ticket-prices">
              {/* {event?.ticketPrices.map((ticket, index) => (
                <li key={index} className="ticket-item">
                  <span className="ticket-category">{ticket.category}:</span>{" "}
                  <span className="ticket-price">{ticket.price}</span>
                </li>
              ))} */}
            </ul>
          </div>
          <button style={{ cursor: "pointer" }} onClick={() => AddFav(id)}>
            {!check ? "Add to Favourites" : "Remove from Favorites"}
          </button>
          {event?.location}
        </div>
        <div className="event-image"></div>
      </div>
      <Footer />
    </>
  );
}

export default Details;
