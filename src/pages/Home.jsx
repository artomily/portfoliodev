import React from "react";
import Footer from "../components/Footer";
import { useTypewriter, Cursor } from "react-simple-typewriter";


const Home = () => {
  
  const [text] = useTypewriter({
    words: ["Frontend Developer", "UI/UX Designer"],
    loop: {},
    typeSpeed: 60,
  });

  return (
    <div className="pt-[200px] w-[1000px] mx-auto">
      {/* Hero */}
      <section className="text-center">
        <div className="lg:w-full ssm:w-fit">

          <h2 className="text-2xl lg:text-6xl font-mono mb-12 text-gray-300">
            I'm a<span> {text}</span>
            <span>
              <Cursor cursorStyle="|" />
            </span>
          </h2>
        </div>
      </section>

      {/* Career */}
      <section className="p-8">
       
      </section>

      {/* Education Section */}
      <section className="p-8">
        
      </section>

      <section className="p-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">Skills</h2>
          <p className="text-gray-600">Technology And Tools</p>
        </div>
      </section>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
