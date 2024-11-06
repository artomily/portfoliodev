import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
// import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { Link } from "react-router-dom";

const nav = () => {
  const [toggle, setToggle] = useState(false);

  function openMenu() {
    setToggle(true);
  }

  function closeMenu() {
    setToggle(false);
  }

  return (
    <>
      <nav className="fixed flex items-center justify-between top-0 left-0 w-full shadow-sm z-50 p-10 lg:flex-row bg-white">
        <div>
          <Link
            to="/"
            className="dark:text-white font-mono text-3xl tracking-wider flex items-center"
          >
            ARTOMILY
          </Link>
        </div>
        <div className="space-x-4">
          <div className="ssm:hidden lg:block space-x-2 cursor-pointer">
            <Link
              to="/"
              className="dark:text-white hover:bg-slate-100 rounded-full px-5 py-2 text-xl"
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="dark:text-white hover:bg-slate-100 rounded-full px-5 py-2 text-xl"
            >
              Projects
            </Link>
            <Link
              to="/certificates"
              className="dark:text-white hover:bg-slate-100 rounded-full px-5 py-2 text-xl"
            >
              Certificates
            </Link>
            <Link
              to="/about"
              className="dark:text-white hover:bg-slate-100 rounded-full px-5 py-2 text-xl"
            >
              About
            </Link>
          </div>
          <div>
            {/* <CiDark/> */}
            {/* <CiLight/> */}
          </div>
          <div className="ssm:block lg:hidden">
            {toggle ? (
              <AiOutlineClose
                size={30}
                onClick={closeMenu}
                className="text-white cursor-pointer"
              />
            ) : (
              <HiMenuAlt1
                size={30}
                onClick={openMenu}
                className="text-white cursor-pointer"
              />
            )}
          </div>
        </div>
      </nav>

      <div className="ssm:block lg:hidden">
        {toggle ? (
          <div className="flex justify-between ml-10">
            <ul>
              <li className="text-white hover:bg-slate-700 text-xl mb-2 cursor-pointer">
                Home
              </li>
              <li className="text-white hover:bg-slate-700 text-xl mb-2 cursor-pointer">
                Projects
              </li>
              <li className="text-white hover:bg-slate-700 text-xl mb-2 cursor-pointer">
                Certificates
              </li>
              <li className="text-white hover:bg-slate-700 text-xl mb-2 cursor-pointer">
                About
              </li>
            </ul>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default nav;
