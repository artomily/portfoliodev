import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
// import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [toggle, setToggle] = useState(false);

  function openMenu() {
    setToggle(true);
  }

  function closeMenu() {
    setToggle(false);
  }

  return (
    <>
      <div className=" inline-block top-0 left-0 right-0 fixed">
        <nav className="w-[1000px] mx-auto flex items-center justify-between shadow-sm z-50 p-12  lg:flex-row">
          <div>
            <Link
              to="/"
              className="dark:text-white font-mono text-3xl tracking-wider flex items-center"
            >
              ARTOMILY
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <div className="sm:hidden lg:block space-x-2 cursor-pointer">
              <Link
                to="/"
                className="dark:text-white hover:bg-slate-800 rounded-full px-5 py-2 text-xl leading-none"
              >
                Resume
              </Link>
              <Link
                to="/projects"
                className="dark:text-white hover:bg-slate-800 rounded-full px-5 py-2 text-xl leading-none"
              >
                Projects
              </Link>
              <Link
                to="/certificates"
                className="dark:text-white hover:bg-slate-800 rounded-full px-5 py-2 text-xl leading-none"
              >
                Certificates
              </Link>
              <Link
                to="/contact"
                className="dark:text-white hover:bg-slate-800 rounded-full px-5 py-2 text-xl leading-none"
              >
                Contact
              </Link>
            </div>
            <button className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              <CiLight size={24} className="text-gray-700 dark:text-gray-300" />
            </button>
            <div className="sm:block lg:hidden">
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

        <div className={`lg:hidden ${toggle ? "block" : "hidden"}`}>
          <div className="fixed top-0 left-0 w-full h-full bg-primary z-40 flex flex-col items-center justify-center space-y-4 text-xl ">
            <Link
              onClick={closeMenu}
              to="/"
              className="hover:bg-slate-100 p-4 rounded cursor-pointer"
            >
              Resume
            </Link>
            <Link
              onClick={closeMenu}
              to="/projects"
              className="hover:bg-slate-100 p-4 rounded cursor-pointer"
            >
              Projects
            </Link>
            <Link
              onClick={closeMenu}
              to="/certificates"
              className="hover:bg-slate-100 p-4 rounded cursor-pointer"
            >
              Certificates
            </Link>
            <Link
              onClick={closeMenu}
              to="/contact"
              className="hover:bg-slate-100 p-4 rounded cursor-pointer"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
