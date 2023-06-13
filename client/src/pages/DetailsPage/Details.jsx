import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "./details.scss";
import { useDispatch, useSelector } from "react-redux";

import {
  addToFavorites,
  removeFromFavorites,
} from "../../store/CategorySlice/categorySlice";
import InnerNav from "../../components/Nav/InnerNav";
import moment from "moment";
import SignOutNav from "../../components/Nav/SignOutNav";

function Details() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
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

  const img = event?.imagePath.split("3000").join("3000/");
  const check = favorites?.find((q) => q._id == id);
  const localDate = moment(event?.date).local();
  console.log("localdate", localDate);
  const locationHTML = event.location;
  const srcRegex = /src="(.*?)"/;
  const match = locationHTML.match(srcRegex);
  const src = match && match[1];

  return (
    <>
      {isLoggedIn ? <SignOutNav /> : <InnerNav />}
      {event && (
        <div className="event-details">
          <div className="event-info">
            <h2>{event?.name}</h2>
            <p className="event-date">
              {localDate?.format("YYYY-MM-DD")} {event?.startTime}-
              {event.finishTime}
            </p>
            <p className="event-description">{event?.description}</p>

            <div className="ticket-section">
              <p className="ticket-heading">
                <p>
                  Price range: {event.minimumPrice} - {event?.maxsimumPrice}AZN
                </p>
              </p>
              {/* <ul className="ticket-prices">
              {event?.seats.map((ticket, index) => (
                <li key={index} className="ticket-item">
                  <span className="ticket-category">{ticket.category}:</span>{" "}
                  <span className="ticket-price">{ticket.price}</span>
                  <button>Add to Basket</button>
                </li>
              ))}
            </ul> */}
            </div>
            <button
              style={{
                cursor: "pointer",
                backgroundColor: "purple",
                color: "white",
                padding: "10px",
                borderRadius: "10px",
              }}
              onClick={() => AddFav(id)}
            >
              {!check ? "Add to Favorites" : "Remove from Favorites"}
            </button>
            <p style={{ marginTop: "20px" }}>Location: {event?.locationName}</p>
            <iframe src={src}></iframe>
          </div>
          <div className="img-cont">
            <img src={img} alt="" />
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Details;
