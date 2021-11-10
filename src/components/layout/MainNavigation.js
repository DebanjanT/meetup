import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="w-full bg-coolGray-900 sticky top-0 z-50 shadow-lg">
      <div className="flex flex-col md:flex-row justify-between  px-2 py-3 w-full sm:w-full  mx-auto">
        <div className="flex justify-center items-center align-center mb-3 sm:mb-3 md:mb-0">
          <p className="text-gray-100 ml-3 text-lg font-semibold text-yellow-600">
            StartUP
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white -pl-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="flex justify-center mr-3">
          <Link to="/">
            <h1 className="bg-coolGray-700  text-white px-3 py-1 rounded-md mr-2 transform transition duration-200 hover:scale-110">
              {" "}
              Home{" "}
            </h1>
          </Link>
          <h1 className="bg-coolGray-700  text-white px-3 py-1 rounded-md mr-2 transform transition duration-200 hover:scale-110">
            {" "}
            <Link to="/add-meetup">Add Meetup</Link>{" "}
          </h1>
          <h1 className="bg-coolGray-700  text-white px-3 py-1 rounded-md mr-2 transform transition duration-200 hover:scale-110">
            {" "}
            <Link to="/favourites">Favourites</Link>{" "}
          </h1>
        </div>
      </div>
    </div>
  );
}
