import "./App.css";
import LandingPage from "./components/LandingPage/landingPage";
import { Route, Routes } from "react-router";
import React from "react";
import Pokemons from"./components/Pokemons/pokemons"

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path='/pokemons' element={<Pokemons/>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
