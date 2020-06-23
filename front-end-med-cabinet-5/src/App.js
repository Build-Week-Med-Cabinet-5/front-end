import React from 'react';
import { Route, Link } from 'react-router-dom';
import UserCreation from './components/UserCreation';
import Login from "./components/Login";
import { Container } from "reactstrap";
import NavBarComponent from "./components/NavBarComponent";

function App() {
  return (
    <Container className="App">
        <NavBarComponent />
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
