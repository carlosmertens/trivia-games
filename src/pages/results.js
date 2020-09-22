import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { PageLayout } from '../components/PageLayout';

import '../styles/App.css';

function Results(props) {
  return (
    <PageLayout>
      <PageHeader>Score: {props.score}/10</PageHeader>

      <div className='container'>{props.answeredList}</div>
      <div className='container'>
        <Link
          to='/quizes'
          onClick={props.handleReset}
          className='btn btn-outline-primary btn-lg'>
          Play again!
        </Link>
      </div>
    </PageLayout>
  );
}

export default Results;
