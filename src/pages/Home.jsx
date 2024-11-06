import React from "react";
import { FaArrowDown } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <section className="p-[200px]">
        <div className="lg:w-full ssm:w-fit">
          <h1 className="text-9xl font-bold font-mono mb-20 text-white text-outline hover:text-slate-950">
            Rakyavara Artomily
          </h1>
          <div>
            <button className="flex items-center justify-center border-slate-100  bg-transparent text-slate-700 px-10 py-2 my-3 rounded-full hover:bg-slate-900 hover:text-white outline outline-1">
              Show More <FaArrowDown size={24} className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Career */}
      <section className="p-8 bg-gray-100 ">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">Career</h2>
          <p>Details about career experiences...</p>
        </div>
      </section>

      {/* Education Section */}
      <section className="p-8 bg-white">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">Education</h2>
          <p>Details about educational background</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
