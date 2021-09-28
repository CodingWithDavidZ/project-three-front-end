import React, { useState } from 'react';

function CreateNewEmployee() {
  const [data, setData] = useState({
    first_name: '',
    last_name: '',
    hire_date: '',
    employee_num: '',
    manager_id: '',
  });

  const handleChange = (e) => {
    let attr = e.target.name;
    setData({ ...data, [attr]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();
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
    }).then(() => {
      setData({
        first_name: '',
        last_name: '',
        hire_date: '',
        employee_num: '',
        manager_id: '',
      });
    });
  }

  console.log(
    '🚀 ~ file: CreateNewEmployee.js ~ line 18 ~ CreateNewEmployee ~ data',
    data
  );

  return (
    <div className='create'>
      <form id='employee-form' autoComplete='off' onSubmit={handleSubmit}>
        <div className='form-group'>
          <h1>Create New Employee</h1>
          <span>
            First Name: &nbsp;
            <input
              required
              value={data.first_name}
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
              required
              value={data.last_name}
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
              required
              value={data.hire_date}
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
              required
              value={data.manager_id}
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
              required
              value={data.employee_num}
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
          &nbsp;
          <button className='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CreateNewEmployee;
