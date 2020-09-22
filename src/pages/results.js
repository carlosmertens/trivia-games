import React from 'react';
import { Link } from 'react-router-dom';

import { PageHeader } from '../components/PageHeader';
import { PageLayout } from '../components/PageLayout';

function Results({ score, answeredList, handleReset }) {
  return (
    <PageLayout>
      <PageHeader>Score: {score}/10</PageHeader>

      <div className='container text-left'>{answeredList}</div>
      <div className='container'>
        <Link
          to='/quizes'
          onClick={handleReset}
          className='btn btn-outline-primary btn-lg m-5'>
          Play again?
        </Link>
      </div>
    </PageLayout>
  );
}

export default Results;
