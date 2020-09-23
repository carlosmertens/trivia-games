import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useAppStore } from './context/AppContext';
import axios from 'axios';

import Home from './pages/home';
import Quizes from './pages/quizes';
import Results from './pages/results';

import { Navbar } from './components/Navbar';
import { PageHeader } from './components/PageHeader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
library.add(faCheck, faTimes);

export default function App() {
  const [questions, setQuestions] = useState([]);
  const [answeredList, setAnswerList] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [complete, setComplete] = useState(false);

  const appStore = useAppStore();

  useEffect(() => {
    const apiUrl =
      'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';
    const fetchData = async () => {
      const response = await axios.get(apiUrl);
      setQuestions(response.data.results);
    };

    fetchData();
  }, [complete]);

  const checkAnswer = ({ check, key }) => {
    if (check === questions[questionNumber].correct_answer) {
      appStore.addScore();
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
          <h5 className='card-title'>Score: {appStore.score}/10</h5>
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
    appStore.clearScore();
    setAnswerList([]);
    setQuestionNumber(0);
    setComplete(false);
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
            <Results answeredList={answeredList} handleReset={handleReset} />
          );
        }}
      />
    </Router>
  );
}
