import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import { removeFromFavorites } from "../../store/CategorySlice/categorySlice";
export default function Favorites() {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.categoryReducer);
  const removeFav = (favId) => {
    dispatch(removeFromFavorites(favId));
  };
  const len = favorites.length <= 0;
  return (
    <>
      {len && <h1>FAVORIT YOXDU QAQA</h1>}
      {favorites.map((fav) => {
        const img = fav.imagePath.split("3000").join("3000/");
        return (
          <>
            <button
              style={{
                color: "#fff",
                fontSize: "40px",
                backgroundColor: "transparent",
                cursor: "pointer",
              }}
              onClick={() => removeFav(fav._id)}
            >
              Remove
            </button>

            <img src={img} alt="aa" />
            <li>{fav.name}</li>
            <li>{fav.description}</li>
          </>
        );
      })}
      <Footer />
    </>
  );
}
