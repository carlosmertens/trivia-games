import React from 'react';
import { Redirect } from 'react-router-dom';
import { useAppStore } from '../context/AppContext';

import { PageLayout } from '../components/PageLayout';

function Quizes({ getQuestion, complete }) {
  const store = useAppStore();
  return (
    <PageLayout>
      {!complete ? (
        <div className='container'>{getQuestion[store.number]}</div>
      ) : (
        <Redirect to='/results' />
      )}
    </PageLayout>
  );
}

export default Quizes;
