import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <nav class="bg-white border-gray-200 px-2 sm:px-20 py-2.5  dark:bg-gray-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a className="self-center d whitespace-nowrap dark:text-white text-3xl font-bold">
            News.<a className="text-red-600 ">IDN</a>
          </a>
          {/* menu */}
          <div className="hidden w-full md:block md:w-auto">
            <ul className="flex flex-col p-4 mt-4 bg-gray-50  border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-800">
              <li>
                <BsSearch className="text-white" size={20} />
              </li>

              <Link to="/">
                <li className="block py-2 pr-4 pl-3 text-white bg-red-500 rounded md:bg-transparent md:text-red-500 md:p-0 dark:text-white" aria-current="page">
                  TRENDING
                </li>
              </Link>
              <Link to="/hiburan">
                <li className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  HIBURAN
                </li>
              </Link>
              <Link to="/bisnis">
                <li className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  BISNIS
                </li>
              </Link>

              <Link to="/kesehatan">
                <li className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  KESEHATAN
                </li>
              </Link>
              <Link to="/sains">
                <li className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  SAINS
                </li>
              </Link>
              <Link to="/olahraga">
                <li className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  OLAHRAGA
                </li>
              </Link>
              <Link to="/teknologi">
                <li className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  TEKNOLOGI
                </li>
              </Link>
            </ul>
          </div>

          {/* hamburger menu */}
          <div onClick={handleNav} className="md:hidden">
            {nav ? <AiOutlineClose size={20} className="text-white" /> : <GiHamburgerMenu size={20} className="text-white" />}
          </div>

          {/* responsive/mobile menu */}
          <div onClick={handleNav} className={nav ? "absolute left-0 top-0 w-full bg-gray-300/100 px-4 py-7 flex flex-col" : "absolute left-[-100%]"}>
            <div>
              <a className="self-center d whitespace-nowrap dark:text-white text-3xl font-bold">
                News.<a className="text-red-600 ">IDN</a>
              </a>
            </div>

            <ul>
              <li>
                <a href="#" class="block py-2 pr-4 pl-3 text-white bg-red-500 rounded md:bg-transparent md:text-red-500 md:p-0 dark:text-white" aria-current="page">
                  TRENDING
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  GENERAL
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  HIBURAN
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  BISNIS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  KESEHATAN
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  SAINS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  OLAHRAGA
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  TEKNOLOGI
                </a>
              </li>
              <div className=" border bg-gradient-to-r from-red-500 to-red-200 block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                <button>SEARCH</button>
              </div>
            </ul>
          </div>
        </div>
      </nav>

      {/* Jumbotron */}
      <div class="max-w-screen-lg bg-indigo-500  rounded-lg mx-auto text-center py-12 mt-4">
        <h2 class="justify-center text-3xl leading-9 font-bold tracking-tight text-white sm:text-4xl sm:leading-10">Selamat Datang di</h2>
        <h2 class="text-3xl leading-9 font-bold tracking-tight text-white sm:text-4xl sm:leading-10">Portal Berita Seputar Indonesia</h2>
        {/* <div class="mt-8 flex justify-center">
          <div class="inline-flex rounded-ml">
            <a href="#" class="text-gray-700 font-bold py-2 px-6">
              Start
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;
