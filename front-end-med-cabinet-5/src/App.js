import React from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';
import UserCreation from './components/UserCreation';
import Login from "./components/Login";
import { Container } from "reactstrap";

function App() {
  return (
    <Container className="App">
      <Route exact path='/'>
        <Link to='/login'>Log in</Link>
      </Route>
        <Route exact path='/login'>
            <Login />
        </Route>
      <Route exact path='/signup'>
        <UserCreation />
      </Route>
    </Container>
  );
}

export default App;
