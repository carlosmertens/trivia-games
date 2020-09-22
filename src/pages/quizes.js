import React from 'react';
import { Link } from 'react-router-dom';

import { PageHeader } from '../components/PageHeader';

import '../styles/App.css';

function Quizes({ complete, getQuestion, questionNumber }) {
  return (
    <div className='App'>
      <PageHeader>Welcome to the Trivia Challange!</PageHeader>

      {!complete ? (
        <div className='container'>{getQuestion[questionNumber]}</div>
      ) : (
        <Link to='/results' className='btn btn-outline-primary btn-lg'>
          See score
        </Link>
      )}

      <div>
        <h2>{questionNumber} of 10</h2>
      </div>
    </div>
  );
}

export default Quizes;
