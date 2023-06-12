import AllEvents from "../pages/AllEvents/AllEvents";
import Details from "../pages/DetailsPage/Details";
import Favorites from "../pages/Favorites/Favorites";
import { HomePage } from "../pages/HomePage/HomePage";
import Login from "../Login/Login";
import Register from "../Login/Register";

export const router = [
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/all-events",
    Component: AllEvents,
  },
  {
    path: "/favorites",
    Component: Favorites,
  },
  {
    path: "/details/:id",
    Component: Details,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
];
