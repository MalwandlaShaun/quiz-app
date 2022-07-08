import React, { useReducer, useState } from "react";
import questions from "./data";
import { shuffleAnswers } from "./ShuffleAnswers";

const QuizContext = React.createContext();
const initialState = {
  questions,
  currentQuestionIndex: 0,
  showResults: false,
  correctAnswerCount: 0,
  answers: shuffleAnswers(questions[0]),
  currentAnswer: "",
  playQuiz: true,
};

const reducer = (state, action) => {
  console.log("reducer", action, state);
  switch (action.type) {
    case "START_QUIZ": {
      return {
        ...state,
        playQuiz: false,
      };
    }
    case "SELECT_ANSWER": {
      const correctAnswerCount =
        action.payload ===
        state.questions[state.currentQuestionIndex].correctAnswer
          ? state.correctAnswerCount + 1
          : state.correctAnswerCount;
      return {
        ...state,
        currentAnswer: action.payload,
        correctAnswerCount,
      };
    }
    case "NEXT_QUESTION": {
      const showResults =
        state.currentQuestionIndex === state.questions.length - 1;
      const currentQuestionIndex = showResults
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;

      const answers = showResults
        ? []
        : shuffleAnswers(state.questions[currentQuestionIndex]);
      return {
        ...state,
        currentQuestionIndex: currentQuestionIndex,
        showResults,
        answers,
        currentAnswer: "",
      };
    }
    case "RESTART": {
      return initialState;
    }
    default:
      break;
  }
  return state;
};

const QuizProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [quizState, dispatch] = useReducer(reducer, initialState);

  return (
    <QuizContext.Provider
      value={{ quizState, dispatch, userName, setUserName }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export { QuizProvider, QuizContext };
