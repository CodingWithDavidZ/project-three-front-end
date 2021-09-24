import React from 'react';
import { Link } from 'react-router-dom';

function CreateOrDelete() {
  return (
    <div className='create-or-delete'>
      <h1>What action would you like to complete?</h1>
      <span>
        <Link className='button' to='/createEmployee'>
          Create Employee
        </Link>
        &nbsp; &nbsp;
        <Link className='button' to='/chooseDelete'>
          Delete Employee
        </Link>
      </span>
    </div>
  );
}

export default CreateOrDelete;
