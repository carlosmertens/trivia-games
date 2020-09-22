import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/App.css';

function Results(props) {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>Score: {props.score}/10</p>
        <div className='container'>{props.answeredList}</div>
        <div className='container'>
          <Link to='/quizes' className='btn btn-outline-primary btn-lg'>
            Play again!
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Results;
