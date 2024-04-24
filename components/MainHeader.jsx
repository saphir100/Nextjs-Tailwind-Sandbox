"use client";
import {MenuContext} from "@/context/MenuContext";
import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";

const MainHeader = () => {
  const {toggle}=useContext(MenuContext);
  return (
    <div className="flex w-full justify-between items-center h-12 px-2">
      <div>Brand</div>
      <div onClick={toggle} className="lg:hidden"> 
        <FaBars />
      </div>
    </div>
  );
};

export default MainHeader;
