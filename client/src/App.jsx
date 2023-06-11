import { Route, Routes } from "react-router-dom";
import { router } from "./routes/root";
import { v4 } from "uuid";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getAllCategories,
  getAllEvents,
} from "./store/CategorySlice/categorySlice";
export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllEvents());
  }, [dispatch]);
  return (
    <Routes>
      {router?.map(({ path, Component }) => (
        <Route path={path} element={<Component />} key={v4()} />
      ))}
    </Routes>
  );
}
