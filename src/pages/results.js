import React from 'react';
import { Link } from 'react-router-dom';
import { useAppStore } from '../context/AppContext';

import { PageHeader } from '../components/PageHeader';
import { PageLayout } from '../components/PageLayout';

function Results({ score, answeredList, handleReset }) {
  const appStore = useAppStore();
  return (
    <PageLayout>
      <PageHeader>Score: {appStore.score}/10</PageHeader>

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
