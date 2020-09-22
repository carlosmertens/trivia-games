import React from 'react';
import { Link } from 'react-router-dom';

import { PageHeader } from '../components/PageHeader';
import { PageLayout } from '../components/PageLayout';

function Home() {
  return (
    <PageLayout>
      <PageHeader>Welcome to the Trivia Challange!</PageHeader>
      <div className='container'>
        <p>You will be presented with 10 True or False questions.</p>
        <p>Can you score 100%?</p>
      </div>
      <Link to='/quizes' className='btn btn-outline-primary btn-lg mt-5'>
        Begin
      </Link>
    </PageLayout>
  );
}

export default Home;
