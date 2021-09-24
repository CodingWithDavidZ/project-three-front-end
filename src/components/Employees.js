import React, { useState, useEffect } from 'react';

function Employees() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    fetch('http://localhost:9292/employees')
      .then((response) => response.json())
      .then((data) => setEmployees(data));
  }, []);

  console.log('🚀 ~ file: Employees.js ~ line 13 ~ employees', employees);

  const employeeList = employees.map((employee) => {
    return (
      <div className='individual-employee-card'>
        <ul id={employee.id}>
          <li>
            Name: {employee.last_name}, {employee.first_name}
          </li>
          <li>Employee #: {employee.employee_num}</li>
          <li>Hire Date: {employee.hire_date},</li>
          <li>
            Manager: {employee.manager.last_name}, {employee.manager.first_name}
          </li>
        </ul>
      </div>
    );
  });

  return <div className='employeeList'>{employeeList}</div>;
}

export default Employees;
