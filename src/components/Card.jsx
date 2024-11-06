import React from "react";

const Card = ({ title, description, imgSrc }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800">
      <img className="w-full h-48 object-cover" src={imgSrc} alt="Card image" />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2 text-gray-800 dark:text-white">
          {title}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;
