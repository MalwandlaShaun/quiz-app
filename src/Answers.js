import React from "react";

const Answers = ({
  answerText,
  index,
  onSelectAnswer,
  correctAnswer,
  currentAnswer,
}) => {
  const letterMapping = ["A", "B", "C", "D"];
  const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
  const isWrongAnswer =
    currentAnswer === answerText && currentAnswer !== correctAnswer;

  const isCorrectClass = isCorrectAnswer ? "correct-answer" : "";
  const isWrongClass = isWrongAnswer ? "wrong-answer" : "";
  const disabledClass = currentAnswer ? "disabled-answer6" : "";
  return (
    <div
      className={`answer ${isCorrectClass} ${isWrongClass} ${disabledClass}`}
      onClick={() => onSelectAnswer(answerText)}
    >
      <div className="answer-letter">{letterMapping[index]}</div>
      <div className="answer-text">{answerText}</div>
    </div>
  );
};

export default Answers;
