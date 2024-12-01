import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Card = ({ title, description, imgSrc, date, techStack = [] }) => {
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
        <div className="text-gray-500 text-sm">{date}</div>
        <button className=" flex items-center justify-center w-full bg-slate-700 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded">
          Show More <MdArrowOutward size={20} className="ml-2" />
        </button>
      </div>

      {/* Tech Stack Icons */}
      <div className="flex space-x-2 mt-4 pl-6 pb-6">
        {techStack.map((Icon, index) => (
          <Icon key={index} className="w-6 h-6" />
        ))}
      </div>
    </div>
  );
};

export default Card;
