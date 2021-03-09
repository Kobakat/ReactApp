import "./trivia-item.css";
import shuffle from "../common/utils/shuffle";
import { useState } from "react";

function TriviaItem({
  correctAnswer,
  incorrectAnswers,
  question,
  onNextClick,
  onAnswerSelected,
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const hasPickedAnswer = selectedAnswer !== null;

  const allAnswers = [correctAnswer, ...incorrectAnswers];
  const [shuffledAnswers, setShuffledAnswer] = useState(() =>
    shuffle(allAnswers)
  );

  let nextButtonClassName = "trivia-item__button trivia-item__next-button";
  if (!hasPickedAnswer) nextButtonClassName += " trivia-item__button--disabled";

  const onAnswerClick = (e) => {
    const playerAnswer = e.target.innerHTML;
    setSelectedAnswer(playerAnswer);
    const wasPlayerCorrect = playerAnswer === correctAnswer;
    onAnswerSelected(wasPlayerCorrect);
  };

  return (
    <div>
      <p className="trivia-item__question">{question}</p>
      <ul className="trivia-item__answers">
        {shuffledAnswers.map((answer, i) => {
          let className = "trivia-item__button";

          if (hasPickedAnswer) {
            const pickedThisAnswer = answer === selectedAnswer;
            const isThisCorrect = answer === correctAnswer;

            if (pickedThisAnswer && isThisCorrect) {
              className += " trivia-item__button--correct";
            } else if (pickedThisAnswer && !isThisCorrect) {
              className += " trivia-item__button--incorrect";
            } else {
              className += " trivia-item__button--disabled";
            }
          }
          return (
            <li key={answer}>
              <button
                className={className}
                onClick={onAnswerClick}
                disabled={hasPickedAnswer}
              >
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
      <button
        onClick={onNextClick}
        className={nextButtonClassName}
        disabled={!hasPickedAnswer}
      >
        Next ➡
      </button>
    </div>
  );
}

export default TriviaItem;
