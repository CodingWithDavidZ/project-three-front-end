import React, { useState } from 'react';

function DeleteEmployeeByID() {
  const [change2, setChange2] = useState('');
  const [employeeId, setEmployeeId] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setEmployeeId(e.currentTarget.employee.value);
    console.log(
      '🚀 ~ file: DeleteEmployeeByID.js ~ line 11 ~ DeleteEmployeeByID ~ employeeId',
      employeeId
    );
    fetch(`http://localhost:9292/employees/${employeeId}`, {
      method: 'DELETE',
    });
    setChange2('');
    console.log(
      '🚀 ~ file: DeleteEmployeeByID.js ~ line 19 ~ DeleteEmployeeByID ~ employeeId after fetch',
      employeeId
    );
  }

  const handleChange = (e) => {
    setChange2(e.target.value);
  };

  return (
    <>
      <h1>By Database Id</h1>
      <form id='delete-by-id' autoComplete='off' onSubmit={handleSubmit}>
        <input
          type='integer'
          min='1'
          max='999'
          maxLength='3'
          id='employee'
          name='employee'
          placeholder='Enter ID'
          onChange={handleChange}
          value={change2}
        />
        <button>Submit</button>
      </form>
    </>
  );
}

export default DeleteEmployeeByID;
