import React, { useState } from 'react';

function DeleteEmployeeByEmployeeNumber() {
  const [deleteByEmployeeNumber, setDeleteByEmployeeNumber] = useState('');
  const [change3, setChange3] = useState('');

  const handleChange = (e) => {
    setChange3(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    setDeleteByEmployeeNumber(e.target.employeeNum.value);
    console.log(
      '🚀 ~ file: DeleteEmployeeByEmployeeNumber.js ~ line 14 ~ DeleteEmployeeByEmployeeNumber ~ deleteByEmployeeNumber',
      deleteByEmployeeNumber
    );
    fetch(`http://localhost9292/employeeNumber/${deleteByEmployeeNumber}`);
  }

  return (
    <>
      <h1>By Employee Number</h1>
      <form id='delete-by-id' autoComplete='off' onSubmit={handleSubmit}>
        <input
          type='integer'
          minlength='8'
          maxLength='8'
          id='employeeNum'
          name='employeeNum'
          placeholder='Enter Employee Number'
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </>
  );
}

export default DeleteEmployeeByEmployeeNumber;
