import React from "react";
import { motion } from "framer-motion";

const LongCard = ({ title, description, date }) => {
    return (
        <div className="w-full max-w-6xl mx-auto p-6 border border-gray-300 rounded-lg shadow-sm bg-white">
      <motion.div
        className="p-6 bg-white shadow-lg rounded-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">{title}</h2>
              <p className="text-gray-600">{description}</p>
            </div>
            <div className="text-gray-500 text-sm">{date}</div>
          </div>
      </motion.div>
        </div>
    );
};

export default LongCard;
