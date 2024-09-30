import { IoIosArrowUp } from "react-icons/io";
import Websites from "./Websites";
import Subscribe from "./Subscribe";

const Body = () => {
  return (
    <div>
      <div className="max-w-[50%] m-auto text-center">
        <p className="font-abel text-3xl font-thin py-28">
          The CO<sub>2</sub> footprint of the Internet&apos;s data centers alone
          may already be comparable to that of global air travel. The good news
          is that a growing number of major Internet corporations are becoming
          more environmentally conscientious, opting for more renewable energy
          sources for their data centers and operations.
        </p>

        <Websites />

        <div className="my-24">
          <p className="font-abel text-3xl font-thin mb-5">
            These websites avoid bloated frameworks by using compressed
            graphics, efficient file formats, and lightweight fonts. Check out
            our information on developing sustainable websites and establishing
            a page weight budget if you want to learn more.
          </p>
          <button className="bg-black text-white px-8 py-2 flex items-center justify-center m-auto gap-2 rounded-full border-[2px] border-white shadow-[0px_0px_10px_2px_#38a169] hover:bg-green-800 font-bold hover:border-green-800">
            <IoIosArrowUp /> Test now
          </button>
        </div>

        <Subscribe />
      </div>
      <div></div>
    </div>
  );
};

export default Body;
