import React, { useState } from 'react';

function DeleteEmployeeByID() {
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
    setEmployeeId('');
    console.log(
      '🚀 ~ file: DeleteEmployeeByID.js ~ line 19 ~ DeleteEmployeeByID ~ employeeId after fetch',
      employeeId
    );
  }

  const handleChange = (e) => {
    setEmployeeId(e.target.value);
  };

  return (
    <div className='byDB'>
      <h1>By Database Id</h1>
      <form id='delete-by-id' autoComplete='off' onSubmit={handleSubmit}>
        <input
          required
          type='integer'
          min='1'
          max='999'
          maxLength='3'
          id='employee'
          name='employee'
          placeholder='Enter ID'
          onChange={handleChange}
          value={employeeId}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default DeleteEmployeeByID;
