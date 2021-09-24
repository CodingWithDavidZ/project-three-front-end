import React from 'react';
import { Link } from 'react-router-dom';

function ChooseDelete() {
  return (
    <div className='deleteMethod'>
      <h1>Delete Method?</h1>
      <span>
        <Link
          className='button
        '
          to='/byId'
        >
          By Database Id
        </Link>
        &nbsp; &nbsp;
        <Link
          className='button
        '
          to='/byEmployeeNumber'
        >
          By Employee Number
        </Link>
      </span>
    </div>
  );
}

export default ChooseDelete;
