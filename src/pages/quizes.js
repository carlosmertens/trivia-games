import React from 'react';
import { Link } from 'react-router-dom';
import { useAppStore } from '../context/AppContext';

import { PageLayout } from '../components/PageLayout';

function Quizes({ complete, getQuestion }) {
  const store = useAppStore();
  return (
    <PageLayout>
      {!complete ? (
        <div className='container'>{getQuestion[store.number]}</div>
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
