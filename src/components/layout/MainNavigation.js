import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="w-full bg-coolGray-900 sticky top-0">
      <div className="flex justify-start px-2 py-3 w-full sm:w-full md:w-1/2 mx-auto">
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
  );
}
