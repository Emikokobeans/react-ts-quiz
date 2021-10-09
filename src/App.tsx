import { userInfo } from 'os';
import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

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
      <QuestionCard />
      <button className='next' onClick={nextQuestion}>
        Next Questions
      </button>
    </div>
  );
}

export default App;
