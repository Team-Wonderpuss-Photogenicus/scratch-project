import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import MovieContainer from "./MovieContainer.jsx";
import Question from "./Question.jsx";
import MovieRec from "./MovieRec.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <MovieRec />
      <Question />
      <MovieContainer />
    </div>
  );
}
