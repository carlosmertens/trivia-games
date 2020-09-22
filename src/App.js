import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import { Navbar } from './components/Navbar';
import Home from './pages/home';
import Quizes from './pages/quizes';
import Results from './pages/results';

import { PageHeader } from './components/PageHeader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
library.add(faCheck, faTimes);

function App() {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [answeredList, setAnswerList] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [complete, setComplete] = useState(false);
  const [callApi, setCallApi] = useState(1);

  useEffect(() => {
    const apiUrl =
      'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';
    const fetchData = async () => {
      const response = await axios.get(apiUrl);
      setQuestions(response.data.results);
      setCallApi(0);
    };

    fetchData();
  }, [callApi]);

  const checkAnswer = ({ check, key }) => {
    if (check === questions[questionNumber].correct_answer) {
      setScore(score + 1);
      setAnswerList([
        ...answeredList,
        <p key={key}>
          <FontAwesomeIcon icon='check' size='lg' color='green' />{' '}
          <span className='pl-2'>{questions[questionNumber].question}</span>
        </p>,
      ]);
      setQuestionNumber(questionNumber + 1);
    } else {
      setAnswerList([
        ...answeredList,
        <p key={key}>
          <FontAwesomeIcon icon='times' size='lg' color='red' />{' '}
          <span className='pl-2'>{questions[questionNumber].question}</span>
        </p>,
      ]);
      setQuestionNumber(questionNumber + 1);
    }
    if (questionNumber === 9) {
      setComplete(true);
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
            onClick={() => checkAnswer({ check: 'True', key: index })}
            className='btn btn-outline-primary btn-lg m-2'>
            True
          </button>
          <button
            onClick={() => checkAnswer({ check: 'False', key: index })}
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

  const handleReset = () => {
    setQuestions([]);
    setScore(0);
    setAnswerList([]);
    setQuestionNumber(0);
    setComplete(false);
    setCallApi(1);
  };

  return (
    <Router>
      <Route
        path='/'
        render={() => {
          return <Navbar handleReset={handleReset} />;
        }}
      />
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
            />
          );
        }}
      />
      <Route
        exact
        path='/results'
        render={() => {
          return (
            <Results
              score={score}
              answeredList={answeredList}
              handleReset={handleReset}
            />
          );
        }}
      />
    </Router>
  );
}

export default App;
