import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/App.css';

import { PageHeader } from '../components/PageHeader';

function Home() {
  return (
    <div className='container text-center'>
      <PageHeader>Welcome to the Trivia Challange!</PageHeader>
      <div className='container'>
        <p>You will be presented with 10 True or False questions.</p>
        <p>Can you score 100%?</p>
      </div>
      <Link to='/quizes' className='btn btn-outline-primary btn-lg'>
        Play Now
      </Link>
    </div>
  );
}

export default Home;
