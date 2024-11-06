import { useState } from "react";
import Card from "../components/Card";

const Project = () => {
  const [activeTab, setActiveTab] = useState("development");

  const renderContent = () => {
    switch (activeTab) {
      case "development":
        return <Card />;
      case "design":
        return <Card />;
      case "nocode":
        return <Card />;
       
      default:
        return null;
    }
  };

  return (
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-4 flex items-center justify-center">Projects</h1>

        {/* navigation tab */}
        <div className="flex space-x-4 border-b">
          <button
            onClick={() => setActiveTab("development")}
            className={`py-2 px-4 ${
              activeTab === "development"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
          >Development</button>
          <button
            onClick={() => setActiveTab("design")}
            className={`py-2 px-4 ${
              activeTab === "design"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
          >Design</button>
          <button
            onClick={() => setActiveTab("nocode")}
            className={`py-2 px-4 ${
              activeTab === "nocode"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
          >No-Code Development</button>
        </div>

        {/* content selection */}
        <div className="mt-4">{renderContent()}</div>
      </div>
  );
};

export default Project;
