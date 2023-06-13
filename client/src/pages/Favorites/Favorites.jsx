import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import { removeFromFavorites } from "../../store/CategorySlice/categorySlice";
import InnerNav from '../../components/Nav/InnerNav'
import './Favorites.css'
import SignOutNav from "../../components/Nav/SignOutNav";

export default function Favorites() {

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.categoryReducer);
  const removeFav = (favId) => {
    dispatch(removeFromFavorites(favId));
  };
  const len = favorites.length <= 0;
  return (
    <>
    {isLoggedIn ? <SignOutNav /> : <InnerNav />}
   
      {len && <h1>Empty</h1>}
    <div className="general">
    {favorites.map((fav) => {
        const img = fav.imagePath.split("3000").join("3000/");
        return (
          <>
            <div className="item">
              <div className="top">
               <img src={img} alt="" />
              </div>
              <div className="bottom">
              <li  style={{  fontSize: "15px"}}>{fav.name}</li>
              <button
              style={{
                fontSize: "15px",
                backgroundColor: "yellow",
                cursor: "pointer",
                color: 'black'
              }}
              onClick={() => removeFav(fav._id)}
            >
              Remove
            </button>
              </div>
            </div>
          </>
        );
      })}
    </div>
     
      <Footer />
    </>
  );
}
