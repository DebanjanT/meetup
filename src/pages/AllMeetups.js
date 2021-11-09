import React from "react";
import { useState } from "react";
import Fetch from "./fetch";

export default function AllMeetups() {
  const [loading, setLoading] = useState(false);
  function toggleLoad() {
    if (loading === false) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }
  return (
    <div className="px-3">
      <button
        onClick={toggleLoad}
        className="px-3 py-1 bg-blue-500 text-white rounded-md my-2 mr-2 hover:bg-blue-700 "
      >
        Toggle State
      </button>
      All meetup Page
      <h4>{loading}</h4>
      {loading ? <Fetch /> : <p>loading...</p>}
    </div>
  );
}
