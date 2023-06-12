/* eslint-disable react/prop-types */
import "./cards.scss";
export default function Cards({ _id, name, description, imagePath }) {
  imagePath = imagePath.split("3000").join("3000/");
  return (
    <div className="container">
      <div className="container_card" key={_id}>
        <div className="container_card-img">
          <img src={imagePath} alt="img" />
        </div>
        <div className="container_card-text">
          <span>
            <p>{description}</p>
            <h1>{name}</h1>
          </span>

          {/* <div className="container_card-text-desc">
            <h2>{item.subtitle}</h2>
            <p>{item.description}</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
