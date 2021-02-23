import React, { useState, useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts';
import { Questions } from '../Helpers/QuestionBank';

const Quiz = () => {
  const { score, setScore } = useContext(QuizContext);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState('');

  const nextQuestion = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    alert(score);
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className='Quiz'>
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className='options'>
        <button onClick={() => setOptionChosen('A')}>
          {Questions[currentQuestion].optionA}
        </button>
        <button onClick={() => setOptionChosen('B')}>
          {Questions[currentQuestion].optionB}
        </button>
        <button onClick={() => setOptionChosen('C')}>
          {Questions[currentQuestion].optionC}
        </button>
        <button onClick={() => setOptionChosen('D')}>
          {Questions[currentQuestion].optionD}
        </button>
      </div>

      <button onClick={nextQuestion}>Next Question</button>
    </div>
  );
};

export default Quiz;
