import { navigations } from "../../constants/consts";
import "./nav.scss";
export default function Nav() {
  return (
    <ul className="menu">
      <div className="menu__logo">
        <h2>LOGO</h2>
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
