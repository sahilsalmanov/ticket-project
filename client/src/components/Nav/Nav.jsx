import "./nav.scss";
import logo from "./logo.png";
import { useSelector } from "react-redux";
export default function Nav() {
  const { categories } = useSelector((state) => state.categoryReducer);
  return (
    <ul className="menu">
      <div className="menu__logo">
        <img src={logo} alt="" />
      </div>
      <div className="menu__list">
        {categories.map(({ _id, type }) => (
          <li key={_id}>
            <a href="#">{type}</a>
          </li>
        ))}
      </div>
    </ul>
  );
}
