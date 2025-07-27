import React from "react";
import { IoLocationOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="h-8 px-20 bg-gray-200 text-gray-600 flex items-center justify-between ">
      <p className=" font-medium text-sm">Welcome to XKOM PC</p>
      <div className="flex">
        <p className="flex items-center font-medium text-sm px-2 gap-1">
          <IoLocationOutline className="text-blue-500" /> Deliver to {`423434`}{" "}
        </p> |
        <p className="flex items-center font-medium text-sm px-2 gap-1">
          <IoLocationOutline className="text-blue-500" /> Track your order
        </p> | 

        <p className="flex items-center font-medium text-sm px-2 gap-1">
          <IoLocationOutline className="text-blue-500" /> All Offers
        </p>
      </div>
    </header>
  );
};

export default Header;
