import { useSelector } from "react-redux";

export default function Favorites() {
  const { favorites } = useSelector((state) => state.categoryReducer);
  return <div>Favorites -- {favorites.length} </div>;
}
