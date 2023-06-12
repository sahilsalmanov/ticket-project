import AllEvents from "../pages/AllEvents/AllEvents";
import Details from "../pages/DetailsPage/Details";
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
    path: "/details/:id",
    Component: Details,
  },
];
