import "./poster.scss";
export default function Poster() {
  return (
    <div className="poster">
      <div className="poster__img">{/* <img src={img} alt="" /> */}</div>
      <div className="poster__details">
        <div className="poster__details-title">
          <h1>SBS MTV The Kpop Show Ticket Package</h1>
        </div>
        <div className="poster__details-description">
          <p>
            Look no further! Our SBS The Show tickets are the simplest way for
            you to experience a live Kpop recording.
          </p>
        </div>
        <div className="poster__details-btns">
          <button className="poster__details-btns-ticket">Get Ticket</button>
          <button className="poster__details-btns-info">Learn More</button>
        </div>
      </div>
    </div>
  );
}
