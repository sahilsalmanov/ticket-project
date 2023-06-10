import { navigations } from "../../constants/consts";
import "./nav.scss";
import logo from "./logo.png";
export default function Nav() {
  return (
    <ul className="menu">
      <div className="menu__logo">
        <img src={logo} alt="" />
      </div>
      <div className="menu__list">
        {navigations.map(({ id, title }) => (
          <li key={id}>
            <a href="#">{title}</a>
          </li>
        ))}
      </div>
    </ul>
  );
}
