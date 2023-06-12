import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function Cards({
  _id,
  name,
  description,
  startTime,
  finishTime,
  imagePath,
}) {
  const navigate = useNavigate();

  imagePath = imagePath.split("3000").join("3000/");
  return (
    <div>
      <div className="container_card" key={_id}>
        <div className="container_card-img">
          <span className="span">
            <p>{startTime}</p>
            <p>{finishTime}</p>
          </span>
          <img src={imagePath} alt="img" />
        </div>
        <div className="container_card-text">
          <span>
            <h1>{name}</h1>
            <p>{description.substring(0, 20).concat("...")}</p>
          </span>
          <button onClick={() => navigate(`/details/${_id}`)}>Details</button>
          {/* <div className="container_card-text-desc">
            <h2>{item.subtitle}</h2>
            <p>{item.description}</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
