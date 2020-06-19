import React from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';
import UserCreation from './components/UserCreation';

function App() {
  return (
    <div className="App">
      <Route exact path='/'>
        <Link to='/signup'>Sign Up</Link>
      </Route>
      <Route exact path='/signup'>
        <UserCreation />
      </Route>
    </div>
  );
}

export default App;
