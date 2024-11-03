import React from "react";
import { FaArrowDown } from "react-icons/fa";

const Home = () => {
  return (
    <section className="flex items-center justify-center p-[200px]">
      <div className="lg:w-full ssm:w-fit">
        <h1 className="text-9xl font-bold font-mono mb-20 text-white">Rakyavara Artomily</h1>
        <div>
          <button className="flex items-center justify-center bg-white text-slate-700 px-10 py-2 my-3 rounded-full hover:bg-slate-900 hover:text-white">
            Show More <FaArrowDown size={24} className="ml-2"/>
          </button>
        </div>
      </div>
    </section>
    


  );
};

export default Home;
