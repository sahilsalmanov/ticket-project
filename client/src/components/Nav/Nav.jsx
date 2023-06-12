import "./nav.scss";
import logo from "./logo.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Favorites from "../Favorites/Favorites";
export default function Nav() {
  const { categories } = useSelector((state) => state.categoryReducer);
  return (
    <ul className="menu">
      <div className="menu__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="menu__list">
        <li>
          <Link to="/all-events">All Events</Link>
        </li>
        <li>
          <Favorites />
        </li>
        {categories.map(({ _id, type }) => (
          <li key={_id}>
            <a href={`#${type}`}>{type}</a>
          </li>
        ))}
      </div>
    </ul>
  );
}
