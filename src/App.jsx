import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Marquee
        pauseOnHover
        speed={120}
        className="p-2 my-2 w-[80%] mx-auto overflow-hidden text-lg text-white duration-200 ease-linear bg-blue-800 cursor-pointer hover:bg-purple-700 md:text-xl rounded-md shadow-md"
      >
        <Link
          to="https://forms.gle/bpC8svxCPopQBKWx6"
          target="_blank"
          className="duration-200 ease-linear hover:text-green-600"
        >
          Admissions Open, Click to Find More
        </Link>
      </Marquee>
      <AnimatedRoutes />
      <Footer />
    </>
  );
}

export default App;
