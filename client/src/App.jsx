import { Route, Routes } from "react-router-dom";
import { router } from "./routes/root";
import { v4 } from "uuid";
export default function App() {
  return (
    <Routes>
      {router?.map(({ path, Component }) => (
        <Route path={path} element={<Component />} key={v4()} />
      ))}
    </Routes>
  );
}
