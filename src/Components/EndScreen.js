import React, { useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts';
import { Questions } from '../Helpers/QuestionBank';
import '../App.css';

const EndScreen = () => {
  const { score, setScore, setGameState, userName } = useContext(QuizContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState('menu');
  };

  return (
    <div className='EndScreen'>
      <h1>Quiz Finished</h1>
      <h2>Thank You for Playing {userName}!!</h2>
      <h1>
        {score} / {Questions.length}
      </h1>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default EndScreen;
