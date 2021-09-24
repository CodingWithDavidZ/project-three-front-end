import React from 'react';
import { Link } from 'react-router-dom';

function CreateOrDelete() {
  return (
    <>
      <h1>What action would you like to complete?</h1>
      <span>
        <Link className='link' to='/createEmployee'>
          Create Employee
        </Link>
        &nbsp; &nbsp;
        <Link className='link' to='/chooseDelete'>
          Delete Employee
        </Link>
      </span>
    </>
  );
}

export default CreateOrDelete;
