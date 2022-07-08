import "./index.css";
import React, { useContext } from "react";
import { QuizContext } from "./Context";

function Menu() {
  const { userName, setUserName, dispatch } = useContext(QuizContext);

  return (
    <div className="menu">
      <h2>SA History Quiz</h2>
      <div className="sub-menu">
        <label>Enter Your Name:</label>
        <input
          type="text"
          placeholder="e.g Shaun"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch({ type: "START_QUIZ" });
          }}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}

export default Menu;
