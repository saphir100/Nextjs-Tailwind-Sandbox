import React, { useState } from "react";
import { BsChevronExpand } from "react-icons/bs";
import { IoCheckmarkOutline } from "react-icons/io5";

const cities = [
  "Tehran",
  "Tabriz",
  "Urmia",
  "Ardabil",
  "Zanjan",
  "Hamadan",
  "Qoum",
];
const CustomeSelectBox = () => {
  const [selectedCity, setSelectedCity] = useState("Tehran");
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col w-fit p-2 bg-gray-100 justify-center 
    items-center relative">
      <div
        onClick={() => setOpen((prev) => !prev)}
        className=" flex flex-row justify-between items-center bg-white w-52 mt-4 p-2 rounded-lg"
      >
        <span>{selectedCity}</span>
        <BsChevronExpand className="text-gray-400" />
      </div>
      <div
        className={`flex flex-col  
      justify-start items-start mx-2 my-1 bg-white w-52 rounded-lg 
      absolute top-16 left-0 
      ${open ? " transition-all  duration-1000  " : "opacity-0"}`}
      >
        {cities.map((item) => (
          <div
          key={item}

          onClick={()=>{
            setSelectedCity(item);
            setOpen(false);
          }}
            className={`flex flex-row gap-2 justify-start items-start w-52
             hover:bg-orange-100 ${
              selectedCity === item ? "bg-orange-100" : ""
            }`}
          >
            <IoCheckmarkOutline
              className={`text-orange-800 ${
                selectedCity === item ? "opacity-100" : "opacity-0"
              }`}
            />

            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomeSelectBox;
