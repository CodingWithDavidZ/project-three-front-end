import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { useState } from 'react';

import Header from './components/Header';
import Home from './components/Home';
import Employees from './components/Employees';
import Managers from './components/Managers';
import EmployeeManagment from './components/EmployeeManagment';
import DeleteEmployeeByEmployeeNumber from './components/DeleteEmployeeByEmployeeNumber';
import DeleteEmployeeById from './components/DeleteEmployeeById';
import ChooseDelete from './components/ChooseDelete';
import CreateOrDelete from './components/CreateOrDelete';
import CreateNewEmployee from './components/CreateNewEmployee';

function App() {
  const [createNew, setCreateNew] = useState(false);
  const [deleteByID, setDeleteByID] = useState(true);

  return (
    <Router>
      <Header />
      <Route exact path='/'>
        <Redirect to='/home' />
      </Route>
      <Route exact path='/home'>
        <Home />
      </Route>
      <Route exact path='/employees'>
        <Employees />
      </Route>
      <Route exact path='/managers'>
        <Managers />
      </Route>
      <Route exact path='/employeeManagment'>
        <CreateOrDelete />
      </Route>
      <Route exact path='/createEmployee'>
        <CreateNewEmployee />
      </Route>
      <Route exact path='/chooseDelete'>
        <ChooseDelete />
      </Route>
      <Route exact path='/byEmployeeNumber'>
        <DeleteEmployeeByEmployeeNumber />
      </Route>
      <Route exact path='/byId'>
        <DeleteEmployeeById />
      </Route>
    </Router>
  );
}

// {
//   createNew ? (
//     <EmployeeManagment />
//   ) : (
//     <ChooseDelete deleteById={deleteByID} setDeleteByID={setDeleteByID} />
//   );
// }

export default App;
