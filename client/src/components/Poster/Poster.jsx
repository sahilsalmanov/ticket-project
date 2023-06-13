import { useNavigate } from "react-router-dom";
import "./poster.scss";
export default function Poster() {

  let navigate = useNavigate()
  return (
    <div className="poster">
      <div className="poster__details">
        <div className="poster__details-title">
          <h1>Get the tickets and lets the fun begin on one click</h1>
        </div>
        <div className="poster__details-description">
          <p>
            Look no further! Our SBS The Show tickets are the simplest way for
            you to experience a live Kpop recording.
          </p>
        </div>
        <div className="poster__details-btns">
          <button onClick={() => navigate('/favorites')}  className="poster__details-btns-ticket">Get Ticket</button>
          <button onClick={() => navigate('/all-events')} className="poster__details-btns-info">Learn More</button>
        </div>
      </div>
    </div>
  );
}
