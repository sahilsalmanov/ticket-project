import "./nav.scss";
import logo from "./logo.png";
import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Favorites from "../../pages/Favorites/Favorites";
export default function SignOutNav() {
    let navigate = useNavigate()
  const { categories } = useSelector((state) => state.categoryReducer);

  function signout() {
    localStorage.setItem('isLoggedIn', false);
    navigate('/login')
    
}

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
          <Link onClick={signout} to="/login">SignOut</Link>
        </li>
      </ul>
    </ul>
  );
}
