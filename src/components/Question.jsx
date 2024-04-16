import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../stylesheet/styles.scss";

const Question = () => {
  const [userInput, setUserInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [matchOrComformt, setMatchOrComfort] = useState("");

  const handleSubmit = async (event) => {
    console.log("in the first question handleSubmit");
    event.preventDefault();
    try {
      const response = await axios.get("/api/emotions", {
        params: { userInput },
      });
      setAnswer(response.data);
    } catch (error) {
      console.error(`Error in fetch first submit ${error}`);
    }
  };

  const handleChange = async (event) => {
    setUserInput(event.target.value);
  };

  const handleSelect = async (event) => {
    console.log("in the second question handleSelect");
    setMatchOrComfort(event.target.value);
  };

  const handleRecommend = async () => {
    console.log("in the ahndle recommend");
    try {
      const response = await axios.get("/api/movies", {
        params: {
          answer,
          matchOrComfort,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error(`Error in the recommend movie ${error}`);
    }
  };

  return (
    <div className="questionContainer">
      <p>How`s your day</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="userInput"
          value={userInput}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <p>It seems your are {answer}. Do you want to match it or comfort it?</p>
      <select value={matchOrComfort} onChange={handleSelect}>
        <option value="match">Match</option>
        <option value="comfort">Comfort</option>
      </select>
      <button onClick={handleRecommend} type="submit">
        Recommend
      </button>
      <br />
      <br />
    </div>
  );
};

export default Question;
