import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import Home from './pages/home';
import Quizes from './pages/quizes';
import Results from './pages/results';

import { PageHeader } from './components/PageHeader';

function App() {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [answeredList, setAnswerList] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const apiUrl =
      'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';
    const fetchData = async () => {
      const response = await axios.get(apiUrl);
      setQuestions(response.data.results);
    };

    fetchData();
  }, []);

  const checkAnswer = (props) => {
    if (props === questions[questionNumber].correct_answer) {
      setScore(score + 1);
      setAnswerList([
        ...answeredList,
        <p key={questionNumber}>
          {questions[questionNumber].question} - CORRECT
        </p>,
      ]);
      setQuestionNumber(questionNumber + 1);
    } else {
      setAnswerList([
        ...answeredList,
        <p>{questions[questionNumber].question} - WRONG</p>,
      ]);
      setQuestionNumber(questionNumber + 1);
      console.log('Wrong');
    }
    if (questionNumber === 9) {
      setComplete(true);
      console.log(answeredList);
    }
  };

  const getQuestion = questions.map((question, index) => (
    <div key={index} className='mx-auto'>
      <PageHeader>{question.category}</PageHeader>

      <div className='card mx-auto' style={{ width: '20rem' }}>
        <div className='card-body'>
          <h5 className='card-title'>Score: {score}/10</h5>
          <p className='card-text'>{question.question}</p>
          <button
            onClick={() => checkAnswer('True')}
            className='btn btn-outline-primary btn-lg m-2'>
            True
          </button>
          <button
            onClick={() => checkAnswer('False')}
            className='btn btn-outline-primary btn-lg'>
            False
          </button>
        </div>
      </div>

      <div className='mt-5'>
        <h2>Question {questionNumber} of 10</h2>
      </div>
    </div>
  ));

  return (
    <Router>
      <Route exact path='/' component={Home} />
      <Route
        exact
        path='/quizes'
        render={() => {
          return (
            <Quizes
              getQuestion={getQuestion}
              complete={complete}
              questionNumber={questionNumber}
              questions={questions}
            />
          );
        }}
      />
      <Route
        exact
        path='/results'
        render={() => {
          return <Results score={score} answeredList={answeredList} />;
        }}
      />
    </Router>
  );
}

export default App;
