import "./nav.scss";
import logo from "./logo.png";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Favorites from "../../pages/Favorites/Favorites";
export default function InnerNav() {
  const { categories } = useSelector((state) => state.categoryReducer);
  return (
    <ul className="menu">
      <NavLink className="menu__logo" to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <ul className="menu__list">
      <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/all-events">All Events</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
         <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </ul>
  );
}
