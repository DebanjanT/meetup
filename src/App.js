import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/layout/MainNavigation";
import AddMeetup from "./pages/AddMeetup";
import AllMeetups from "./pages/AllMeetups";
import Favourites from "./pages/Favourites";

export default function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" exact element={<AllMeetups />}></Route>
        <Route path="/favourites" element={<Favourites />}></Route>
        <Route path="/add-meetup" element={<AddMeetup />}></Route>
      </Routes>
    </div>
  );
}
