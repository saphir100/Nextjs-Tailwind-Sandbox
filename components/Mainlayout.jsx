"use client";
import React, { useContext } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { FaAngleRight, FaCheck, FaCheckDouble } from "react-icons/fa";
import { SiHelpscout } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";

import Link from "next/link";
import MainHeader from "./MainHeader";
import { MenuContext } from "@/context/MenuContext";

const Mainlayout = ({ children }) => {
  const { Open } = useContext(MenuContext);
  return (
    <div className="bg-gray-100 w-screen min-h-screen ">
      <MainHeader />
      <div className="flex justify-start items-start p-2">
        <aside
          className={`bg-white rounded-lg overflow-hidden
          transition-all duration-1000
           ${Open ? "w-60 p-4" : "w-0"} lg:w-60 lg:p-4`}
        >
          <ul>
            <li
              className="flex justify-start  items-center
             hover:bg-blue-300 p-2
            hover:text-blue-900 px-3 space-x-1 rounded-lg"
            >
              <AiOutlineHome />
              <Link href="/">Home</Link>
            </li>

            <li
              className="flex justify-start  items-center
             hover:bg-blue-300 p-2
            hover:text-blue-900 px-3 space-x-1 rounded-lg"
            >
              <GrProjects />
              <h1 className="flex-1" href="#">
                Projects
              </h1>
              <FaAngleRight />
            </li>

            <li
              className="flex justify-start  items-center
             hover:bg-blue-300 p-2
            hover:text-blue-900 px-3 space-x-1 rounded-lg"
            >
              <FaCheck />
              <h1 className="flex-1" href="#">
                singular
              </h1>
              <FaAngleRight />
            </li>

            <li
              className="flex justify-start  items-center
             hover:bg-blue-300 p-2
            hover:text-blue-900 px-3 space-x-1 rounded-lg"
            >
              <FaCheckDouble />
              <h1 className="flex-1" href="#">
                Complex
              </h1>
              <FaAngleRight />
            </li>

            <li
              className="flex justify-start  items-center
             hover:bg-blue-300 p-2
            hover:text-blue-900 px-3 space-x-1 rounded-lg"
            >
              <SiHelpscout />
              <Link href="./about-us">About us</Link>
            </li>

            <li
              className="flex justify-start  items-center
             hover:bg-blue-300 p-2
            hover:text-blue-900 px-3 space-x-1 rounded-lg"
            >
              <FiPhoneCall />
              <Link href="#">Contact us</Link>
            </li>
          </ul>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default Mainlayout;
