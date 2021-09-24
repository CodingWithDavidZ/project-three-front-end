import React from 'react';
import { Link } from 'react-router-dom';

function ChooseDelete() {
  return (
    <div>
      <h1>DELETE</h1>
      <span>
        <Link className='link' to='/byId'>
          By Database Id
        </Link>
        &nbsp; &nbsp;
        <Link className='link' to='/byEmployeeNumber'>
          By Employee Number
        </Link>
      </span>
    </div>
  );
}

export default ChooseDelete;
