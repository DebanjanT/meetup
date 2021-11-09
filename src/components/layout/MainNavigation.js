import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="w-full bg-gray-800">
      <div className="flex justify-center py-3 w-full sm:w-full md:w-1/2 mx-auto">
        <h1 className="bg-gray-100 px-3 py-1 rounded-md mr-2">
          {" "}
          <Link to="/">Home</Link>{" "}
        </h1>
        <h1 className="bg-gray-100 px-3 py-1 rounded-md mr-2">
          {" "}
          <Link to="/add-meetup">Add Meetup</Link>{" "}
        </h1>
        <h1 className="bg-gray-100 px-3 py-1 rounded-md mr-2">
          {" "}
          <Link to="/favourites">Favourites</Link>{" "}
        </h1>
      </div>
    </div>
  );
}
