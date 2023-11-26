import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Gallery from "../pages/Gallery";
import ChairmanDesk from "../pages/ChairmanDesk";
import PrincipalDesk from "../pages/PrincipalDesk";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/chairman-desk" element={<ChairmanDesk />} />
        <Route exact path="/principal-desk" element={<PrincipalDesk />} />
        <Route exact path="/contact-us" element={<ContactUs />} />
        <Route exact path="/gallery" element={<Gallery />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
