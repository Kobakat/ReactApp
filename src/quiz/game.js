import { useState } from "react";
import Stats from "./stats";
import TriviaItem from "./trivia-item";
import triviaData from "./trivia-data";
import EndScreen from "./end-screen";

function Game() {
  const [gameState, setGameState] = useState({
    score: 0,
    triviaIndex: 0,
    isGameOver: false,
  });

  const { score, triviaIndex, isGameOver } = gameState;
  const questionNumber = triviaIndex + 1;
  const numQuestions = triviaData.length;
  const difficulty = triviaData[triviaIndex].difficulty;

  const restartGame = () => {
    setGameState({
      score: 0,
      triviaIndex: 0,
      isGameOver: false,
    });
  };

  const loadNextQuestion = () => {
    if (triviaIndex >= triviaData.length - 1) {
      setGameState({
        ...gameState,
        isGameOver: true,
      });
    } else {
      setGameState({
        ...gameState,
        triviaIndex: triviaIndex + 1,
      });
    }
  };

  const onAnswerSelected = (wasPlayerCorrect) => {
    if (wasPlayerCorrect) {
      let pointsScored;

      if (difficulty === "easy") {
        pointsScored = 1;
      } else if (difficulty === "medium") {
        pointsScored = 2;
      } else if (difficulty === "hard") {
        pointsScored = 3;
      }

      setGameState({
        ...gameState,
        score: score + pointsScored,
      });
    }
  };

  let pageContent;
  if (isGameOver) {
    pageContent = (
      <EndScreen
        score={score}
        bestScore={0}
        onRetryClick={restartGame}
      ></EndScreen>
    );
  } else {
    const triviaQuestion = triviaData[triviaIndex];
    const {
      correct_answer,
      incorrect_answers,
      question,
      difficulty,
    } = triviaQuestion;
    pageContent = (
      <TriviaItem
        key={triviaIndex}
        question={question}
        correctAnswer={correct_answer}
        incorrectAnswers={incorrect_answers}
        difficulty={difficulty}
        onNextClick={loadNextQuestion}
        onAnswerSelected={onAnswerSelected}
      ></TriviaItem>
    );
  }
  return (
    <>
      <Stats
        score={score}
        questionNumber={questionNumber}
        totalQuestions={numQuestions}
        difficulty={difficulty}
      ></Stats>

      {pageContent}
    </>
  );
}

export default Game;
