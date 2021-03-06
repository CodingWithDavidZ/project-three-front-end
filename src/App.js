import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Employees from './components/Employees';
import Managers from './components/Managers';
import DeleteEmployeeByEmployeeNumber from './components/DeleteEmployeeByEmployeeNumber';
import DeleteEmployeeById from './components/DeleteEmployeeById';
import ChooseDelete from './components/ChooseDelete';
import CreateOrDelete from './components/CreateOrDelete';
import CreateNewEmployee from './components/CreateNewEmployee';

function App() {
  return (
    <Router>
      <Header className='header' />
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
      <Route exact path='/employeeManagement'>
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

export default App;
