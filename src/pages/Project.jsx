import { useState } from "react";
import Card from "../components/Card";
import { RiNextjsFill, RiReactjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import realEstate from "../assets/real-estate.jpg";
import { PiCircleNotch } from "react-icons/pi";
import comingSoon from "../assets/coming-soon.jpg"
import { FaFigma } from "react-icons/fa";

const Project = () => {
  const [activeTab, setActiveTab] = useState("development");

  const renderContent = () => {
    switch (activeTab) {
      case "development":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
            <Card
              title="Real Estate Website"
              description="Landing page of real estate website marketing using next.js & tailwind.css"
              imgSrc={realEstate}
              techStack={[RiNextjsFill, RiTailwindCssFill]}
            />
            <Card
              title="KopiKita"
              description="Casier Website App"
              imgSrc={""}
              techStack={[RiReactjsFill, RiTailwindCssFill]}
            />
            <Card
              title="O'Watch"
              description="Watch to Earn Web3 Website"
              imgSrc={""}
              techStack={[FaFigma]}
            />
          </div>
        );
      case "design":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
            <Card
              title="Enfin - Manage Financial Website"
              description="Hackathon Sevima 2024"
              imgSrc={""}
              techStack={[FaFigma]}
            />
          </div>
        );
      case "nocode":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
          <Card
            title="Coming Soon"
            description="the project is currently development"
            imgSrc={comingSoon}
            techStack={[PiCircleNotch]}
            />
            </div>
        );
       
      default:
        return null;
    }
  };

  return (
    <div className="p-8 pt-40 ">
      <h1 className="text-4xl font-bold mb-4 flex items-center justify-center">
        Projects
      </h1>

      {/* navigation tab */}
      <div className="flex space-x-4 border-b">
        <button
          onClick={() => setActiveTab("development")}
          className={`py-2 px-4 ${
            activeTab === "development"
              ? "border-b-2 border-sky-500 text-sky-500"
              : "text-gray-500"
          }`}
        >
          Development
        </button>
        <button
          onClick={() => setActiveTab("design")}
          className={`py-2 px-4 ${
            activeTab === "design"
              ? "border-b-2 border-sky-500 text-sky-500"
              : "text-gray-500"
          }`}
        >
          Design
        </button>
        <button
          onClick={() => setActiveTab("nocode")}
          className={`py-2 px-4 ${
            activeTab === "nocode"
              ? "border-b-2 border-sky-500 text-sky-500"
              : "text-gray-500"
          }`}
        >
          No-Code Development
        </button>
      </div>

      {/* content selection */}
      <div className="mt-4">{renderContent()}</div>
    </div>
  );
};

export default Project;
