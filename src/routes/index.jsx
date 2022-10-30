import { Route, Routes } from "react-router-dom";
import Destinations from "../pages/Destinations";
import Home from "../pages/Home";

const RoutesPages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destinations" element={<Destinations />} />
    </Routes>
  );
};

export default RoutesPages;
