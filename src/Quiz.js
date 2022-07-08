import React, { useContext } from "react";
import { QuizContext } from "./Context";
import Question from "./Questions";
import Menu from "./Menu";

const Quiz = () => {
  const { quizState, dispatch, userName } = useContext(QuizContext);
  console.log(quizState.showResults);

  return (
    <>
      {quizState.playQuiz && <Menu />}
      <div id="quiz-big" className="quiz">
        {quizState.showResults && (
          <div className="results">
            <div className="congratulations">
              Congratulations <br />{" "}
              <span className="user-name">{userName}</span>
            </div>
            <div className="results-info">
              <div>you have completed the quiz.</div>
              <div>
                You've got {quizState.correctAnswerCount} of{" "}
                {quizState.questions.length} right.
              </div>
              <div
                className="next-button"
                onClick={() => dispatch({ type: "RESTART" })}
              >
                Restart
              </div>
            </div>
          </div>
        )}

        {!quizState.showResults && !quizState.playQuiz && (
          <>
            <div className="score">
              Questions {quizState.currentQuestionIndex + 1} /
              {quizState.questions.length}
            </div>
            <Question />
            <div
              className="next-button"
              onClick={() => dispatch({ type: "NEXT_QUESTION" })}
            >
              next question
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Quiz;
