/* eslint-disable import/no-anonymous-default-export */
import { Navigate, Route, Routes, BrowserRouter } from "react-router-dom";
import loadable from "@loadable/component";

const Flicker = loadable(() => import("../components/Flicker"));

const AppRoutes = () => (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Flicker />}>
      <Route path=":content" element={<Flicker />} />
    </Route>
  </Routes>
  </BrowserRouter>
);

export default AppRoutes;
