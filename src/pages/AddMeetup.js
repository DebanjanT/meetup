import AddMeetupform from "../components/forms/AddMeetpForm";
import { useNavigate } from "react-router-dom";

export default function AddMeetup() {
  const navigate = useNavigate();
  function MeetupHTTPhandler(meetupFormData) {
    fetch("https://meetup-c97fb-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupFormData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(navigate("/"));
  }

  return (
    <div className="bg-coolGray-800 min-h-screen">
      <AddMeetupform onAddMeetup={MeetupHTTPhandler} />
    </div>
  );
}
