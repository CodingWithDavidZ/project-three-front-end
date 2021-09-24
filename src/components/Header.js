import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='navigation'>
      <Link className='navLinks' id='homeLink' to='/home'>
        Home
      </Link>
      <Link className='navLinks' id='employeesLink' to='/employees'>
        Employees
      </Link>
      <Link className='navLinks' id='managersLink' to='/managers'>
        Managers
      </Link>
      <Link
        className='navLinks'
        id='employeeManagmentLink'
        to='/employeeManagment'
      >
        Employee Managment
      </Link>
    </div>
  );
}

export default Header;
