import { Route, Routes } from "react-router-dom";
import { router } from "./routes/root";
import { v4 } from "uuid";
import { useEffect } from "react";
export default function App() {
  useEffect(() => {}, []);
  return (
    <Routes>
      {router?.map(({ path, Component }) => (
        <Route path={path} element={<Component />} key={v4()} />
      ))}
    </Routes>
  );
}
