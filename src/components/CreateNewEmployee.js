import React, { useState } from 'react';

function CreateNewEmployee() {
  const [change, setChange] = useState('');
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setChange(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    setData({
      first_name: e.currentTarget.first_name.value,
      last_name: e.currentTarget.last_name.value,
      hire_date: e.currentTarget.hire_date.value,
      employee_num: e.currentTarget.employee_num.value,
      manager_id: e.currentTarget.manager_id.value,
    });
    fetch('http://localhost:9292/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name: data.first_name,
        last_name: data.last_name,
        hire_date: data.hire_date,
        employee_num: data.employee_num,
        manager_id: data.manager_id,
      }),
    });
  }

  console.log(
    '🚀 ~ file: CreateNewEmployee.js ~ line 18 ~ CreateNewEmployee ~ data',
    data
  );

  return (
    <div>
      <form id='employee-form' autoComplete='off' onSubmit={handleSubmit}>
        <div className='form-group'>
          <h1>Create New Employee</h1>
          <span>
            First Name: &nbsp;
            <input
              type='text'
              className='form-control'
              id='first_name'
              name='first_name'
              placeholder='First Name'
              onChange={handleChange}
            />
          </span>
          &nbsp; &nbsp;
          <span>
            Last Name: &nbsp;
            <input
              type='text'
              className='form-control'
              id='last_name'
              name='last_name'
              placeholder='Last Name'
              onChange={handleChange}
            />
          </span>
          <br />
          <span>
            Hire Date: &nbsp;
            <input
              type='date'
              className='form-control'
              id='hire_date'
              name='hire_date'
              placeholder='Hire Date'
              onChange={handleChange}
            />
          </span>
          &nbsp; &nbsp;
          <span>
            Manager: &nbsp;
            <input
              type='number'
              min='1'
              max='4'
              maxLength='1'
              className='form-control'
              id='manager_id'
              name='manager_id'
              placeholder='Manager'
              onChange={handleChange}
            />
          </span>
          <br />
          <span>
            Employee #: &nbsp;
            <input
              type='integer'
              minlength='8'
              maxlength='8'
              className='form-control'
              id='employee_num'
              name='employee_num'
              placeholder='Employee Number'
              onChange={handleChange}
            />
          </span>
          <button className='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CreateNewEmployee;
