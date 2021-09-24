import React, { useState, useEffect } from 'react';

function Managers() {
  const [managers, setManagers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/managers')
      .then((response) => response.json())
      .then((data) => setManagers(data));
  }, []);

  console.log(
    '🚀 ~ file: Managers.js ~ line 12 ~ Managers ~ managers',
    managers
  );

  const managerList = managers.map((manager) => {
    return (
      <div className='individual-manager-card'>
        <ul id={manager.id}>
          <li>
            Name: {manager.last_name}, {manager.first_name}
          </li>
          <li>Employee #: {manager.employee_num}</li>
          <li>Hire Date: {manager.hire_date},</li>
          <li>Employees: {manager.employees.length}</li>
        </ul>
        <br />
      </div>
    );
  });

  return <div className='managersList'>{managerList}</div>;
}

export default Managers;
