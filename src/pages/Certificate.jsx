import React from "react";
import Card from "../components/Card";

const Certificate = () => {
  return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            title="Card 1"
            description="This is a description for Card 1."
            imgSrc="https://via.placeholder.com/400x300"
          />
          <Card
            title="Card 2"
            description="This is a description for Card 2."
            imgSrc="https://via.placeholder.com/400x300"
          />
          <Card
            title="Card 3"
            description="This is a description for Card 3."
            imgSrc="https://via.placeholder.com/400x300"
          />
        </div>
      </div>
  );
};

export default Certificate;
