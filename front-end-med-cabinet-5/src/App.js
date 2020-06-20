import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import UserCreation from './components/UserCreation';
import Login from "./components/Login";
import { Container } from "reactstrap";
import NavBarComponent from "./components/NavBarComponent";
import PrivateRoute from "./components/PrivateRoute";
import ProfilePage from "./components/ProfilePage";
import StrainSearch from "./components/StrainSearch";

function App() {
  return (
    <Container className="App">
        <NavBarComponent />
        <Switch>
            <PrivateRoute exact path="/profile" component={ProfilePage}/>
            <PrivateRoute exact path='/search' component={StrainSearch}/>
            <Route exact path='/'>
                <Link to='/login'>Log in</Link>
            </Route>
            <Route exact path='/login'>
                <Login />
            </Route>
            <Route exact path='/signup'>
                <UserCreation />
            </Route>
        </Switch>

    </Container>
  );
}

export default App;
