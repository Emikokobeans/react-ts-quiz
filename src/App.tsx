import React from 'react';
import QuestionCard from './components/QuestionCard';

function App() {
  const startQuiz = async () => {};

  const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  return (
    <div className='App'>
      <h1>QUIZ</h1>
      <button className='start' onClick={startQuiz}>
        Start
      </button>
      <p className='score'>Score:</p>
      <p>Loading Questions...</p>
    </div>
  );
}

export default App;
