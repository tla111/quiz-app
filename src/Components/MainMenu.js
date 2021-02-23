import React, { useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts';

const MainMenu = () => {
  const { gameState, setGameState } = useContext(QuizContext);
  return (
    <div className='Menu'>
      {''}
      <button
        onClick={() => {
          setGameState('quiz');
        }}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default MainMenu;
