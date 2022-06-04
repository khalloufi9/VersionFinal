import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Login from "./Login/Login";
import AddManeger from "./Manager/AddManager";
import Nav from "./NavBAr/Navbar";
import AddPlayer from "./Player/AddPlayer";
import AddTeam from "./Team/AddTeam";
import TeamDetails from "./Team/TeamDetails";
import TeamsList from "./Team/TeamsList";
import AddArbitre from "./Arbitre/Arbitre"
import AddTerrain from "./Terrain/Terrain"
import AddMatch from "./Matches/AddMatch"
function Main() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addManager" element={<AddManeger />} />
        <Route path="/addTeam" element={<AddTeam />} />
        <Route path="/addPlayer" element={<AddPlayer />} />
        <Route path="/teams" element={<TeamsList />} />
        <Route path="/team/:id" element={< TeamDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/addArbitre" element={<AddArbitre/>} />
        <Route path="/addTerrain" element={<AddTerrain/>} />
        <Route path="/matches" element={<AddMatch/>} />


      </Routes>
    </>
  );
}

export default Main;
