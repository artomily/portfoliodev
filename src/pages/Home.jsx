import React from "react";
import { FaArrowDown } from "react-icons/fa";
import LongCard from "../components/LongCard";
import Footer from "../components/Footer";
import { useTypewriter, Cursor } from "react-simple-typewriter";


const Home = () => {
  const [text] = useTypewriter({
    words: ["Frontend Developer", "UI/UX Designer", "Graphic Designer"],
    loop: {},
    typeSpeed: 60,
  });

  return (
    <div>
      {/* Hero */}
      <section className="p-20 lg:p-[150px] text-center">
        <div className="lg:w-full ssm:w-fit">
          <h1 className="text-5xl lg:text-9xl font-bold font-mono mb-6 text-white text-outline hover:text-sky-500">
            Rakyavara Artomily
          </h1>
          <h2 className="text-2xl lg:text-6xl font-mono mb-12 text-gray-300">
            I'm a<span> {text}</span>
            <span>
              <Cursor cursorStyle='|'/>
            </span>
          </h2>

          <div className="flex items-center justify-center">
            <button className="flex items-center justify-center border-slate-100  bg-transparent text-slate-700 px-10 py-2 my-3 rounded-full hover:bg-slate-900 hover:text-white outline outline-1">
              Show More <FaArrowDown size={24} className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Career */}
      <section className="p-8 bg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">Career</h2>
          <p className="text-gray-600">Details about career experiences</p>
        </div>
        <div className="bg-gray-50 px-4 py-8 ">
          <div className="max-w-screen w-full">
            <LongCard
              title="PT SIGMA CIPTA CARAKA"
              description="Quality Assurance"
              date="October 2023 - October 2024"
            />
            <LongCard
              title="Hellocation.id"
              description="Graphic Designer"
              date="June 2024 - October 2024"
            />
            <LongCard
              title="PT Digital Investa Indonesia"
              description="Graphic Designer"
              date="April 2023 - July 2023"
            />
            <LongCard
              title="Ibra Creative Studio"
              description="Graphic Designer"
              date="June 2022 - November 2022"
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="p-8 bg-gray-50">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold">Education</h2>
          <p className="text-gray-600">My educational background</p>
        </div>
        <div className=" bg-gray-50 px-4 py-8">
          <div className="max-w-screen w-full">
            <LongCard
              title="Cyber Asia University"
              description="Information Systems"
              date="October 2023 - October 2024"
            />
            <LongCard
              title="SMK TELKOM MALANG"
              description="Spftware Engineering"
              date="July 2020 - June 2023"
            />
          </div>
        </div>
      </section>

       <section className="p-8 bg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">Skills</h2>
          <p className="text-gray-600">Technology And Tools</p>
        </div>
        </section>

      <div className="bg-gray-800 text-white">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
