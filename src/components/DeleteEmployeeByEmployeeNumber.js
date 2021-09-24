import React, { useState } from 'react';

function DeleteEmployeeByEmployeeNumber() {
  const [deleteByEmployeeNumber, setDeleteByEmployeeNumber] = useState('');

  const handleChange = (e) => {
    setDeleteByEmployeeNumber(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    setDeleteByEmployeeNumber(e.currentTarget.employeeNum.value);
    console.log(
      '🚀 ~ file: DeleteEmployeeByEmployeeNumber.js ~ line 14 ~ DeleteEmployeeByEmployeeNumber ~ deleteByEmployeeNumber',
      deleteByEmployeeNumber
    );
    fetch(`http://localhost:9292/employeeNumber/${deleteByEmployeeNumber}`, {
      method: 'DELETE',
    });
    setDeleteByEmployeeNumber('');
  }

  return (
    <>
      <h1>By Employee Number</h1>
      <form id='delete-by-id' autoComplete='off' onSubmit={handleSubmit}>
        <input
          required
          type='integer'
          minlength='8'
          maxLength='8'
          id='employeeNum'
          name='employeeNum'
          placeholder='Enter Employee Number'
          onChange={handleChange}
          value={deleteByEmployeeNumber}
        />
        <button>Submit</button>
      </form>
    </>
  );
}

export default DeleteEmployeeByEmployeeNumber;
