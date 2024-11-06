import React from "react";
import Card from "../components/Card";

const Certificate = () => {
  return (
    <div className="p-8 pt-40">
      <h1 className="text-4xl font-bold mb-4 flex items-center justify-center">
        Certificates
      </h1>
      <div className="bg-gray-50 px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Card
            title="Full-Stack Web Development"
            description="Certification in full-stack web development"
            date="January 2023"
          />
          <Card
            title="React.js Advanced"
            description="Advanced level certification in React.js"
            date="March 2023"
          />
          <Card
            title="React.js Advanced"
            description="Advanced level certification in React.js"
            date="March 2023"
          />
          <Card
            title="React.js Advanced"
            description="Advanced level certification in React.js"
            date="March 2023"
          />
        </div>
      </div>
  );
};

export default Certificate;
