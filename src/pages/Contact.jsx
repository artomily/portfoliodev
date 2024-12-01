import React from 'react'
// import { FaArrowDown } from 'react-icons/fa';
import { MdArrowOutward } from 'react-icons/md';

const Contact = () => {
   const handleShowResume = () => {
     const resumeUrl =
       "https://drive.google.com/file/d/1ORuGsR0wBrirwKsx01XXGA6YfLm3Tpvd/view?usp=sharing";
     window.open(resumeUrl, "_blank"); 
   };
  return (
    <div>
      <div className="whitespace-pre-line mx-20 mt-40">
        Hi! I’m Rakyavara Artomily, a Frontend Developer passionate about
        creating fast, modern, and user-friendly web experiences. I work with
        technologies like JavaScript, TypeScript, React, Next.js to deliver
        seamless and responsive applications. For me, frontend development isn’t
        just about coding, it’s about how every detail can enhance the user
        experience. Each project is an opportunity to blend aesthetic design
        with reliable performance. If you’re looking for a developer to bring
        your creative ideas to life in a functional and engaging web
        application, I’m here to help!
      </div>
      <div className="flex items-center justify-center">
        <button onClick={handleShowResume}
          className="flex items-center justify-center border-slate-100  bg-transparent text-slate-700 px-10 py-2 my-3 rounded-full hover:bg-slate-900 hover:text-white outline outline-1"
        >
          Watch Resume <MdArrowOutward size={20} className="ml-2" />
        </button>
      </div>
    </div>
  );
}

export default Contact
