import React from 'react';
import { Navbar } from './Navbar';

export const PageLayout = ({ children }) => {
  return (
    <div className='container-fluid text-center'>
      <Navbar />
      {children}
    </div>
  );
};
