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
          title="Membangun Karir Data Scientist dengan Pemrograman R"
          description="Course-Net X Prakerja"
          date="May 2024"
        />
        <Card
          title="Intro to Product Management"
          description="RevoU"
          date="September 2023"
        />
        <Card
          title="Favorite Champion National Business Case Competition"
          description="PT Penerbit Erlangga"
          date="August 2023"
        />
        <Card
          title="ADOBE ILLUSTRATOR"
          description="Rubrik Grafis"
          date="June 2023"
        />
      </div>
    </div>
  );
};

export default Certificate;
