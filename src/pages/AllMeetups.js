import React from "react";
import MeetupList from "../components/meetup/MeetupList";
import { useState, useEffect } from "react";

export default function AllMeetups() {
  const [isLoading, setIsLoading] = useState(true);
  const [meetupsData, setMeetupsData] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://meetup-c97fb-default-rtdb.firebaseio.com/meetups.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = { id: key, ...data[key] };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setMeetupsData(meetups);
      });
  }, []);

  return (
    <div className="  bg-coolGray-800">
      {isLoading ? (
        <p className="min-h-screen text-white w-1/2 mx-auto text-center text-2xl">
          Loading...
        </p>
      ) : (
        <MeetupList meetupdata={meetupsData} />
      )}
    </div>
  );
}
