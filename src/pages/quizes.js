import React from 'react';
import { Link } from 'react-router-dom';

import { PageLayout } from '../components/PageLayout';

import '../styles/App.css';

function Quizes({ complete, getQuestion, questionNumber }) {
  return (
    <PageLayout>
      {!complete ? (
        <div className='container'>{getQuestion[questionNumber]}</div>
      ) : (
        <Link
          to='/results'
          className='btn btn-outline-primary btn-lg align-middle align-self-center mt-5'>
          Review answers
        </Link>
      )}
    </PageLayout>
  );
}

export default Quizes;
