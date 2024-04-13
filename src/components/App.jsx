import React, { useState } from "react";
import Navbar from "./navbar.jsx";
import MovieContainer from "../containers/movieContainer.jsx";
import Question from "./Question.jsx";
import MovieRec from "./movieRec.jsx";
import styles from "../stylesheet/styles.scss";

function App() {
  return (
    <div>
      <Navbar />
      <MovieRec />
      {/*<Question />
      <MovieContainer /> */}
    </div>
  );
}

export default App;
