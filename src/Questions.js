import React, { useContext } from "react";
import { QuizContext } from "./Context";
import Answers from "./Answers";

const Question = () => {
  const { quizState, dispatch } = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  return (
    <div>
      <div className="question">{currentQuestion.question}</div>
      <div className="answers">
        {quizState.answers.map((answer, index) => {
          return (
            <Answers
              key={index}
              answerText={answer}
              index={index}
              currentAnswer={quizState.currentAnswer}
              correctAnswer={currentQuestion.correctAnswer}
              onSelectAnswer={(answerText) =>
                dispatch({ type: "SELECT_ANSWER", payload: answerText })
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default Question;
