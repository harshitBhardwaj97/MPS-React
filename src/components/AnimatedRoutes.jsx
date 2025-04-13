import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import ContactUs from '../pages/ContactUs';
import Gallery from '../pages/Gallery';
import ChairmanDesk from '../pages/ChairmanDesk';
import PrincipalDesk from '../pages/PrincipalDesk';
import {Navigate, Route, Routes, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import PrimaryCurriculum from '../pages/PrimaryCurriculum.jsx';
import MiddleCurriculum from '../pages/MiddleCurriculum.jsx';
import AdmissionsCriteria from '../pages/AdmissionsCriteria.jsx';
import Curriculum from '../pages/Curriculum.jsx';
import CoScholastic from '../pages/CoScholastic.jsx';
import Facilities from '../pages/Facilities.jsx';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/curriculum" element={<Curriculum />} />
        <Route exact path="/curriculum/primary-school" element={<PrimaryCurriculum />} />
        <Route exact path="/curriculum/middle-school" element={<MiddleCurriculum />} />
        <Route exact path="/admissions-criteria" element={<AdmissionsCriteria />} />
        <Route exact path="/co-scholastic" element={<CoScholastic />} />
        <Route exact path="/chairman-desk" element={<ChairmanDesk />} />
        <Route exact path="/principal-desk" element={<PrincipalDesk />} />
        <Route exact path="/contact-us" element={<ContactUs />} />
        <Route exact path="/facilities" element={<Facilities />} />
        <Route exact path="/gallery" element={<Gallery />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
