import React from "react";

const nav = () => {
  return (
    <>
      <div className="flex items-center justify-between p-10 lg:flex-row ">
        <div>
          <a href="#" className="text-white font-mono text-3xl tracking-wider flex items-center">ARTOMILY</a>
        </div>
        <div>
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">Certificates</a>
          <a href="#">About</a>
        </div>
      </div>
    </>
  );
};

export default nav;
