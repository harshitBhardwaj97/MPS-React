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
        className="p-2 my-2 w-[80%] mx-auto overflow-hidden text-lg text-black duration-150 ease-linear bg-blue-700 cursor-pointer hover:bg-blue-200 md:text-xl rounded-md shadow-md"
      >
        <Link
          to="https://forms.gle/bpC8svxCPopQBKWx6"
          target="_blank"
          className="font-semibold marqueeLink"
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
