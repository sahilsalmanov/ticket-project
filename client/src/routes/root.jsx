import AllEvents from "../pages/AllEvents/AllEvents";
import Details from "../pages/DetailsPage/Details";
import Favorites from "../pages/Favorites/Favorites";
import { HomePage } from "../pages/HomePage/HomePage";

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
];
