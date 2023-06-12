import "./nav.scss";
import logo from "./logo.png";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Favorites from "../../pages/Favorites/Favorites";
export default function Nav() {
  const { categories } = useSelector((state) => state.categoryReducer);
  return (
    <ul className="menu">
      <NavLink className="menu__logo" to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <ul className="menu__list">
        <li>
          <Link to="/all-events">All Events</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
        {categories.map(({ _id, type }) => (
          <li key={_id}>
            <a href={`#${type}`}>{type}</a>
          </li>
        ))}
         <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </ul>
  );
}
