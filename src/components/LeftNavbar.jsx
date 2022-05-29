import React from "react";
import {
  FaBookOpen,
  FaCog,
  FaHeart,
  FaRocket,
  FaSignOutAlt,
  FaTachometerAlt,
} from "react-icons/fa";

export function LeftNavbar() {
  return (
    <div className="fixed w-52 h-full bg-white shadow-3xl -md:w-[70px] ">
      <div className="p-2.5 pl-5 items-center text-xl font-bold -md:bg-black -md:w-10 -md:h-10 -md:p-3 -md:m-3">
        <h2 className="-md:opacity-0">Marcelo</h2>
      </div>
      <div className="p-2.5 z-[1]">
        <ul className="mt-5 text-left pl-2.5 flex flex-col text-lg font-bold gap-10 ">
          <li className="flex justify-start items-center text-xl opacity-60 -md:hover:text-red-700">
            <div>
              <FaTachometerAlt size={30} />
            </div>
            <a
              className="hover:text-2xl hover:text-[#B8860B] ease-in duration-200 -md:opacity-0"
              href="#"
            >
              Dashboard
            </a>
          </li>
          <li className="flex justify-start items-center text-xl opacity-60 -md:hover:text-red-700">
            <div>
              <FaRocket size={30} />
            </div>
            <a
              className="hover:text-2xl hover:text-[#B8860B] ease-in duration-200 -md:opacity-0"
              href="#"
            >
              Explore
            </a>
          </li>
          <li className="flex justify-start items-center text-xl opacity-60 -md:hover:text-red-700">
            <div>
              <FaBookOpen size={30} />
            </div>
            <a
              className="hover:text-2xl hover:text-[#B8860B] ease-in duration-200 -md:opacity-0"
              href="#"
            >
              Library
            </a>
          </li>
          <li className="flex justify-start items-center text-xl opacity-60 -md:hover:text-red-700">
            <div>
              <FaHeart size={30} />
            </div>
            <a
              className="hover:text-2xl hover:text-[#B8860B] ease-in duration-200 -md:opacity-0"
              href="#"
            >
              Favourite
            </a>
          </li>
          <li className="flex justify-start items-center text-xl opacity-60 -md:hover:text-red-700">
            <div>
              <FaCog size={30} />
            </div>
            <a
              className="hover:text-2xl hover:text-[#B8860B] ease-in duration-200 -md:opacity-0"
              href="#"
            >
              Settings
            </a>
          </li>
          <li className="flex justify-start items-center text-xl opacity-60 -md:hover:text-red-700">
            <div>
              <FaSignOutAlt size={30} />
            </div>
            <a
              className="hover:text-2xl hover:text-[#B8860B] ease-in duration-200 -md:opacity-0"
              href="#"
            >
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
