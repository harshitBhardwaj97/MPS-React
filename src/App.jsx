import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedRoutes from './components/AnimatedRoutes';
import Marquee from 'react-fast-marquee';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen min-w-[360px] flex flex-col">
      <Header />
      <Link
        to="https://forms.gle/bpC8svxCPopQBKWx6"
        target="_blank"
        className="font-semibold marqueeLink"
      >
        <Marquee
          pauseOnHover
          speed={120}
          className="p-2 my-2 w-[80%] mx-auto overflow-hidden text-lg text-green-100 duration-150 ease-linear
          bg-purpleDark cursor-pointer hover:bg-purple-300 hover:text-purpleDark md:text-xl rounded-md shadow-md"
        >
          Admissions Open, Click to Find More
        </Marquee>
      </Link>
      <main className="flex-grow">
        <AnimatedRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
