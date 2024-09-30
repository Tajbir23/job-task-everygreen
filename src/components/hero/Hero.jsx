import { CiCircleInfo } from "react-icons/ci";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="bg-gradient-to-l from-emerald-500 to-teal-700 p-5 text-white md:h-screen overflow-hidden">
      <Navbar />

      <div className="mt-10 md:mx-10 md:m-0 flex flex-col-reverse md:flex-row gap-10 items-center h-full w-full">
        <div className="flex flex-col gap-5 md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-center md:text-start">Unlock Insights for a Greener Future!</h1>
          <p className="py-5">
            Download our comprehensive whitepaper now and embark on a journey
            towards a more sustainable future.
            <span className="tooltip">
              <CiCircleInfo />
              <span className="tooltiptext">
                Find out how many visitors from different traffic sources
                interact with your website
              </span>
            </span>
          </p>

          <button className="m-auto md:m-0 w-max flex items-center justify-center bg-gray-200 text-black px-5 py-4 rounded-full font-bold  hover:bg-gradient-to-l from-emerald-500 to-teal-700 shadow-md hover:text-white">Download now</button>
        </div>

        {/* <div className="mb-16">
            <img className="w-80 h-56 object-cover rounded-xl  border-[15px] border-black absolute z-30 shadow-lg" src="https://www.pickcel.com/assets/img/apps/text-board/banner.webp" alt="placeholder" />
            <img className="w-80 h-52 object-cover rounded-xl  border-[15px] border-blue-800 relative top-12  -right-[25%] z-0 shadow-lg" src="https://www.pickcel.com/assets/img/apps/text-board/banner.webp" alt="placeholder" />
        </div> */}

        <div>
            <img src="https://everythinggreen.org/assets/LandingPage-b5e16583.png" alt="Tajbir" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
